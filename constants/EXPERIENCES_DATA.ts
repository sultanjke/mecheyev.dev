type WorkDataItem = {
  company: string;
  logo: string;
  title: string;
  start: string;
  end: string;
  startMobile: string;
  endMobile: string;
  whatIDid: string[];
};
type WorkData = Record<string, WorkDataItem>;

const EXPERIENCES_DATA: WorkData = {
  kmg: {
    company: 'JSC “National Company “KazMunayGas”',
    logo: '/companies/kmg.png',
    title: "Software Engineering Intern",
    start: "• April 2025",
    end: "May 2025",
    startMobile: "• Apr 2025",
    endMobile: "May 2025",
    whatIDid: [
      "Automated the extraction of legal entity data for companies using their Business Identification Numbers (BINs), resulting in accurate and efficient data retrieval via the Open Data portal’s API (data.egov.kz) using a custom Python script;",
      "Improved data storage and traceability by deploying a local PostgreSQL database to store structured API responses and maintain detailed execution logs of script;",
      "Demonstrated the feasibility of a modern Data Lakehouse architecture by building a proof of concept using MinIO, Apache Iceberg, PySpark, Project Nessie, and Dremio, enabling structured data loading, analysis, and support for BI reporting and visualization."
    ],
  },
  tco: {
    company: "Tengizchevroil",
    logo: '/companies/tco.png',
    title: "Software Engineering Intern",
    start: "• August 2024",
    end: "September 2024",
    startMobile: "• Aug 2024",
    endMobile: "Sep 2024",
    whatIDid: [
      "Developed a reliable script in C# using the .NET SDK to parse user login activity from the OSIsoft PI Client, enhancing operational monitoring within an enterprise environment;",
      "Enhanced system security and user oversight by identifying and flagging inactive employee accounts (no activity within 3 months) through analysis of extracted user operational logs;",
      "Streamlined user identity management by integrating the solution with Active Directory via LDAP, enabling the retrieval of detailed employee information, including full name, corporate email, and supervisor — using their Chevron Account Information (CAI)."
    ],
  },
  ncoc: {
    company: "North Caspian Operating Company N. V. (NCOC)",
    logo: '/companies/ncoc.png',
    title: "Cybersecurity Analyst Intern",
    start: "• July 2023",
    end: "August 2023",
    startMobile: "• Jul 2023",
    endMobile: "Aug 2023",
    whatIDid: [
      "Developed and implemented a project addressing complex business challenges related to data management and privacy into concrete & tangible recommendations within the Improvement Portfolio Tool (IPT) and Power BI Dashboard contents, classified as restricted data by the company's policy;",
      "Structured users with their accessibility and optimized data handling processes to enhance data security and compliance;",
      "Created detailed flowcharts to visualize data access points and streamline decision-making for improved data accessibility."
    ],
  },
  bitech: {
    company: "BI - TECH, Freelance",
    logo: '/companies/bitech.png',
    title: "UI/UX Designer",
    start: "• September 2021",
    end: "April 2023",
    startMobile: "• Sep 2021",
    endMobile: "Apr 2023",
    whatIDid: [
      "A team of goal-oriented web developers, creating innovative and high-performance web applications. Our team, which built with ambitious and proactive students, combines experience and passion for technology to deliver unique and effective solutions to the clients."
    ],
  },
};
export default EXPERIENCES_DATA;
