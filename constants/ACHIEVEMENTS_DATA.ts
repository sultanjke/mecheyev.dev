type AchievementDataItem = {
  competition: string;
  logo?: string;
  date: string;
  description: string[];
};
type AchievementData = Record<string, AchievementDataItem>;

const ACHIEVEMENTS_DATA: AchievementData = {
  hackathon1: {
    competition: 'Decentrathon 2.0: The Largest Multivenue Hackathon',
    logo: '/achievements/decentrathon.png', // Placeholder
    date: "Issued 12/2024",
    description: [
      "Top 10% among ~300 teams in the Telegram Mini App development track with stack of NodeJS and React usage.",
    ],
  },
  codingComp1: {
    competition: "WorldSkills Kazakhstan 2024 Republic Championship",
    logo: '/achievements/worldskills.png', // Placeholder
    date: "Issued 11/2024",
    description: [
      "Scored 663 out of 700 points amongst the top 12 regional representatives."
    ],
  },
  hackathon2: {
    competition: "WorldSkills Kazakhstan 2024 Regional Championship",
    logo: '/achievements/worldskills.png', // Placeholder
    date: "Issued 10/2024",
    description: [
      "Ranked 1st place in the WorldSkills Kazakhstan 2024 Regional Championship in the 'Graphic Design' competency, later on directed to the Republic Championship."
    ],
  },
};
export default ACHIEVEMENTS_DATA;
