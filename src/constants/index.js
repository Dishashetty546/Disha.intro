import proj1 from "../assets/proj1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Tech enthusiast and lifelong learner with a passion for solving real-world problems through innovative solutions.I thrive on building impactful and efficient applications.`;
export const ABOUT_TEXT = `I am a passionate Computer Science student with expertise in Java, data structures, algorithms, and full-stack web development using the MERN stack. I have developed projects that solve real-world problems, demonstrating my ability to blend technical knowledge with practical applications. Committed to continuous learning, I am deepening my understanding of core concepts like operating systems, computer networking, and system design. I thrive in collaborative and challenging environments, aiming to make impactful contributions in the tech industry.`;
export const EXPERIENCES = [
  {
    year: "Oct-2024",
    role: "Mentor - Data Structures & Web Development",
    company: "Sahyadri College of Engineering, Mangalore",
    description:
      "Led a team of 3-4 mentors to guide and mentor 100+ junior students in Data Structures & Algorithms, Git, and the fundamentals of Web Development and project-based learning.Encouraging students to apply their knowledge in real-world problem-solving.",
    technologies: [
      "Leadership",
      "Mentorship",
      "Data Structures & Algorithms",
      "Git",
      "Web Development",
      "Hackathons",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Mediflow",
    image: proj1,
    description:
      "A doctor appointment and multiple disease prediction application developed using the MERN stack and Machine Learning. It includes features like JWT-secured login authentication, an interactive doctor and patient dashboard, doctor-patient appointment scheduling, payment integration, and a productivity-boosting multiple disease prediction system with a medicine recommendation engine.",
    technologies: ["MERN Stack", "Machine Learning", "JWT", "Stripe Payment"],
  },
  {
    title: "Eduford",
    image: project3,
    description:
      "An AI-integrated mock interview platform with feedback analysis. It evaluates test performance on topics like data structures and algorithms, identifying weak and strong areas. For example, if a person is weak in arrays but strong in strings, it provides detailed feedback to help improve weak areas.",
    technologies: ["MERN Stack", "Machine Learning", "AI Feedback Analysis"],
  },
  {
    title: "Corporate",
    image: project4,
    description:
      "An employee database management system built with React, Node.js, and SQL. It features a responsive employee and admin dashboard where admins can assign tasks, track progress, and manage employee details, including attendance.",
    technologies: ["React", "Node.js", "Express", "SQL"],
  },
  {
    title: "Disha.intro",
    image: project2, // Replace with actual image path
    description:
      "A personal portfolio website designed using React and Tailwind CSS. It showcases projects, skills, and contact information with a clean and responsive UI.",
    technologies: ["React", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "Adyar,Mangalore",
  phoneNo: "91+ 9535428132 ",
  email: "dishashetty546@gmail.com",
};
