import proj1 from "../assets/proj1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Tech enthusiast and lifelong learner with a passion for solving real-world problems through innovative solutions.I thrive on building impactful and efficient applications.`;
export const ABOUT_TEXT = `I am a passionate Computer Science student with expertise in Java, data structures, algorithms, and full-stack web development using the MERN stack. I have developed projects that solve real-world problems, demonstrating my ability to blend technical knowledge with practical applications. Committed to continuous learning, I am deepening my understanding of core concepts like operating systems, computer networking, and system design. I thrive in collaborative and challenging environments, aiming to make impactful contributions in the tech industry.`;
export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "Eduford - AI integrated Mock interveiw platform",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB", "Python"],
  },
  {
    year: "2024",
    role: "Mentor Juniors",
    company: "Sahyadri College",
    description: `Mentored over 150+ juniors with data structures and algorithm and coding fundamentals, helped them in ideation in hackathons `,
    technologies: [
      "Leadership",
      "Web development",
      "Data Structures and Algo",
      "Mentor",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Mediflow",
    image: proj1,
    description:
      "An application designed for doctors and patient for Doctor appointment management system with online payment optimization",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Corporate",
    image: project2,
    description:
      "An application for managing tasks and projects of employees, admin can assign and check the progress of employee, employee details,attendance are maintained",
    technologies: ["SQL", "CSS", "React", "Node.js", "Express"],
  },
  {
    title: "Disha.intro",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwindcss"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Adyar,Mangalore",
  phoneNo: "91+ 9535428132 ",
  email: "dishashetty546@gmail.com",
};
