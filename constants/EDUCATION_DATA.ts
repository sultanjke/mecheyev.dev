type EducationDataItem = {
  university: string;
  logo?: string;
  degree: string;
  start: string;
  end: string;
  startMobile: string;
  endMobile: string;
  details: string[];
};
type EducationData = Record<string, EducationDataItem>;

const EDUCATION_DATA: EducationData = {
  kbtu: {
    university: 'Kazakh-British Technical University',
    logo: '/education/kbtu.png',
    degree: "Bachelor of Science in Information Systems",
    start: "• September 2025",
    end: "June 2028",
    startMobile: "• Sep 2025",
    endMobile: "Jun 2028",
    details: [
      "School of Information Technology and Engineering",
    ],
  },
  apec: {
    university: "APEC PetroTechnic",
    logo: '/education/apec.jpg',
    degree: "Associate's Degree in Computer Science",
    start: "• September 2021",
    end: "May 2025",
    startMobile: "• Sep 2021",
    endMobile: "May 2025",
    details: [
      "GPA: 3.57/4",
      "Academic Excellence Scolarship holder."
    ],
  }
};
export default EDUCATION_DATA;
