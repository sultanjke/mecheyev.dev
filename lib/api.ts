import fs from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import path from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";

// gray-matter still looks for deprecated safeLoad/safeDump; provide shims so it works with js-yaml v4.
const yamlAny = yaml as unknown as {
  safeLoad?: typeof yaml.load;
  safeDump?: typeof yaml.dump;
  load: typeof yaml.load;
  dump: typeof yaml.dump;
};
if (!yamlAny.safeLoad) yamlAny.safeLoad = yamlAny.load;
if (!yamlAny.safeDump) yamlAny.safeDump = yamlAny.dump;

function resolvePostsDirectory() {
  const candidates = [
    path.join(process.cwd(), "_posts"),
    path.join(process.cwd(), "..", "_posts"),
    path.join(__dirname, "..", "_posts"),
    path.join(__dirname, "..", "..", "_posts"),
    path.join(__dirname, "..", "..", "..", "_posts"),
  ];

  const found = candidates.find((dir) => fs.existsSync(dir));
  if (!found) {
    throw new Error("Could not locate _posts directory");
  }

  return found;
}

const postsDirectory = resolvePostsDirectory();

function getPostFiles() {
  if (!fs.existsSync(postsDirectory)) {
    console.error("[blog] _posts directory not found at", postsDirectory);
    return [];
  }
  return fs.readdirSync(postsDirectory);
}

function getParser() {
  return unified()
    .use(remarkParse, { fragment: true })
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      content: (arg) => ({
        type: "element",
        tagName: "a",
        properties: { href: `#${String(arg.properties?.id)}` },
        children: [{ type: "text", value: "" }],
      }),
    })
    .use(rehypeStringify, { allowDangerousHtml: true });
}

// small speedup from caching this parser
const parser = getParser();

export type Post = {
  title: string;
  subtitle: string;
  id: string;
  date: string;
  html: string;
  draft: boolean;
  [key: string]: any;
};

export async function getPostById(id: string): Promise<Post | null> {
  if (!id) return null;

  const realId = `${id}`.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realId}.md`);

  let rawFile: string;
  try {
    if (!fs.existsSync(fullPath)) {
      console.error("[blog] markdown file missing for id", realId, "at", fullPath);
      return null;
    }
    rawFile = await fs.promises.readFile(fullPath, "utf8");
  } catch {
    console.error("[blog] failed to read markdown for id", realId, "at", fullPath);
    return null;
  }

  const { data, content } = matter(rawFile, {
    engines: { yaml: (source) => yaml.load(source) as object },
  });

  let html = "";
  try {
    const processed = await parser.process(content);
    html = processed.value.toString();
  } catch (error) {
    console.error(`Error parsing markdown for ${realId}:`, error);
    html = `<pre>${content}</pre>`;
  }

  const parsedDate = data?.date ? new Date(data.date as string) : null;
  const date =
    parsedDate && !Number.isNaN(parsedDate.getTime())
      ? parsedDate.toISOString().slice(0, 10)
      : "";

  return {
    ...data,
    title: data.title as string,
    subtitle: data.subtitle as string,
    id: realId,
    date,
    html,
    draft: Boolean(data.draft),
  };
}

export async function getPageMarkdown(string_: string) {
  const { data, content } = matter(
    fs.readFileSync(path.join("_pages", string_), "utf8"),
    {
      engines: { yaml: (source) => yaml.load(source) as object },
    }
  );
  const html = await parser.process(content);

  return {
    ...data,
    html: html.value.toString(),
  };
}

export function getPostSlugs() {
  const slugs = getPostFiles()
    .filter((name) => name.endsWith(".md"))
    .map((name) => {
      const rawFile = fs.readFileSync(path.join(postsDirectory, name), "utf8");
      const { data } = matter(rawFile, {
        engines: { yaml: (source) => yaml.load(source) as object },
      });

      return { slug: name.replace(/\.md$/, ""), draft: Boolean(data.draft) };
    })
    .filter(({ draft }) => !draft)
    .map(({ slug }) => slug);

  console.log("[blog] discovered slugs", slugs);
  return slugs;
}

export async function getAllPosts() {
  const posts = await Promise.all(
    getPostFiles()
      .filter((name) => name.endsWith(".md"))
      .map((id) => getPostById(id))
  );

  const filtered = posts
    .filter((p): p is Post => p !== null && !p.draft)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  console.log("[blog] getAllPosts count", filtered.length);
  return filtered;
}
