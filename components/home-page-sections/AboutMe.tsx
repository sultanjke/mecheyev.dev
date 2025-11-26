import Space from "../ui/Space";
import BluredCircle from "./BluredCircle";

export default function AboutMe() {
  return (
    <section className="relative">
      <BluredCircle radius={150} top="85%" left="60%" bg="bg-gold2A" blur="200px" />
      <div className="mx-auto max-w-page  ">
        <h2 className="H1" id="about">
          About Me
        </h2>
        <Space size="h-4" />
        <div className="space-y-4 c-gray11">
          <p>A 19-year-old, rapidly developing software engineer, focused on creating innovative solutions. My skills include a wide range of programming languages, experience developing client-server and web applications, and working effectively in a team.</p>
          <p>I help businesses create user experiences that give them a competitive edge</p>
          <p>and over the past few years, I&apos;ve worked with various teams as both a Developer and Designer.</p>
        </div>
      </div>
    </section>
  );
}
