import EDUCATION_DATA from "@/constants/EDUCATION_DATA";
import DesktopOnly from "../ui/DesktopOnly";
import GradientMask from "../ui/GradientMask";
import MobileOnly from "../ui/MobileOnly";
import Space from "../ui/Space";
import BluredCircle from "./BluredCircle";

export default function Education() {
  return (
    <section className="relative">
      <BluredCircle radius={200} top="20%" left="5%" bg="bg-purple2" blur="200px" />

      <div className="mx-auto max-w-page">
        <h2 className="H1" id="education">
          Education
        </h2>
        <Space size="h-8" />
        <ul role="list" className="list-none list-disc-outside pt-4 b-l-2 b-transparent relative">
          <GradientMask
            className="absolute -top-5% -bottom-5% -left-2px -z-1"
            direction="to bottom"
            transparencyStops={[
              [0, 0],
              [10, 100],
              [90, 100],
              [100, 0],
            ]}
          >
            <div className="w-2px b-base5A b-dashed b-l-2 h-full"></div>
          </GradientMask>
          <EducationItem {...EDUCATION_DATA.kbtu}></EducationItem>
          <EducationItem {...EDUCATION_DATA.apec}></EducationItem>
        </ul>
      </div>
    </section>
  );
}

function EducationItem({
  degree,
  start,
  end,
  startMobile,
  endMobile,
  university,
  logo,
  details,
}: {
  degree: string;
  start: string;
  end: string;
  startMobile: string;
  endMobile: string;
  university: string;
  logo?: string;
  details: string[];
}) {
  return (
    <li className="-ml-1.75 flex gap-2">
      <div className="w-3 h-3 bg-[#5a6169] rd-1 shrink-0 grow-0"></div>
      <div className="pis-2">
        <h3 className="">
          <div className="flex items-center gap-2">
            {logo && <img src={logo} alt={university} className="w-8 h-8 object-contain bg-white rounded-md" />}
            <div className="H5 line-height-0.8 tracking-wide">{university}</div>
          </div>
          <Space size="h-1" />
          <div className="flex flex-wrap items-baseline tracking-wide">
            <div className="font-content c-base11 whitespace-nowrap mie-2">{degree}</div>
            <DesktopOnly>
              <div className="c-base11 fs-sm ">
                {start} - {end}
              </div>
            </DesktopOnly>
            <MobileOnly>
              <div className="c-base11 fs-sm ">
                {startMobile} - {endMobile}
              </div>
            </MobileOnly>
          </div>
        </h3>

        <Space size="h-6" />
        <ul
          className={`list-disc-outside fs-sm space-y-1.2em mb-8`}
          style={{
            listStyleImage: 'url("circle-list-item-marker.svg")',
          }}
        >
          {details &&
            details.length > 0 &&
            details.map((item, index: number) => {
              return <Li key={`education-detail-${index}`}>{item}</Li>;
            })}
        </ul>

        <Space size="xs:h-2 h-8" />
      </div>
    </li>
  );
}

function Li({ className = "", children }) {
  return (
    <li className={`${className} flex gap-1.5 items-baseline`}>
      <div className="pb-0.125em ">
        <div className="w-1.5 h-1.5 rd-full bg-base6 shrink-0 " />
      </div>
      <div className="grow">{children}</div>
    </li>
  );
}
