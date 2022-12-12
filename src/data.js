const projects = [
  {
    title: "Backpacker's Companion App",
    reason: "Personal",
    tech: "JavaScript, Express, Node.js",
    description: "A React-based app to assist backpackers in planning and estimating the weight of camping gear prior to a" +
      "backpacking trip. Will utilize Node’s package puppeteer to create a script to collect weights of popular backpacking items" +
      "(backpacks, tents, sleeping bags and pad, etc.) which will be made available via a custom API." +
      "Will include a database where each user can store lists of items taken on previous trips as well as functionality to create" +
      "custom items with weights. Will feature an interactive interface where users can view gear taken on previous trips and tinker" +
      "with gear for an upcoming trip.",
    video: "[Description Video]",
    link: "https://github.com/alexsimon7/backpacker-trip-companion",
    current: true
  },
  {
    title: "Electric Vehicle Efficiency Tracker",
    reason: "Personal",
    tech: "JavaScript, Node.js",
    description: "A console-based application using Node to collect, store, and view electric vehicle trip data to analyze factors that affect" +
      "electric vehicle range. This included collecting route information (e.g. start and end locations, distance, time in route) as well" +
      "as weather, battery drain, and climate control use data." +
      "Utilized Node’s puppeteer package to automate the collection of route information in kml ﬁles via Google Timeline, where an" +
      "API was unavailable. Used route data to retrieve approximate weather temperature for each trip via a historical weather API." +
      "Implemented a console-based interface to collect car data (battery and climate control usage) for user selected trips, save the" +
      "trips locally via JSON, and view and ﬁlter the trips by certain parameters for analysis.",
    video: "[Description Video]",
    link: "https://github.com/alexsimon7/ev-tracker",
    current: false
  },
  {
    title: "Punch An Ork App",
    reason: "Personal",
    tech: "JavaScript, Node.js, React",
    description: "A console-based dice-rolling game using Node where players take on the role of a commander sending waves of grunts " +
      "to ﬁght a more formidable ork opponent. Includes an interactive interface for the player to select actions (attack, parry, or" +
      "run) based on their current dicehand and health as well as automated computer actions based on the same. Partially" +
      "converted the console-based app to a React leveraging state and hooks to track player, computer, and round information.",
    video: "[Description Video]",
    link: "https://github.com/alexsimon7/punch-an-ork",
    current: false
  },
];

const skills = [
  "JavaScript",
  "Node.js",
  "React",
  "HTML5",
  "CSS3",
  "Git",
  "Linux"
];

const experience = {
  projects,
  skills,
}

export default experience;
