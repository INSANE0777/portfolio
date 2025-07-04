import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Play } from "lucide-react";
import { DiPostgresql } from "react-icons/di";
import { FaDocker, FaNodeJs, FaPython } from "react-icons/fa";

export const DATA = {
  name: "Gyanendra Prakash",
  initials: "GP",
  url: "https://portfolio-zeta-one-39.vercel.app/",
  location: "Mohali Punjab, India",
  locationLink: "/",
  description:
    "A curious developer/undergraduate with a growing interest in AI, LLMs, and the evolving landscape of intelligent systems.",
  summary:
    "I am **Gyanendra Prakash**, a **second-year Bachelor of Technology student** from **India**, currently pursuing **Computer Science Engineering**. While still early in my academic journey, I am deeply passionate about the world of **Artificial Intelligence**, especially **Large Language Models**, **intelligent agents**, and seamless **AI integrations**. Beyond academics, I enjoy immersing myself in **video games**, exploring **cinematic universes**, and experimenting with new **recipes in the kitchen**.",
  avatarUrl: "/me1.jpg",
  skills: [
    {
      name: "Next.js",
      icon: <Icons.nextjs className="size-3" />,
    },
    {
      name: "Typescript",
      icon: <Icons.typescript className="size-3" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="size-3" />,
    },
    {
      name: "Python",
      icon: <FaPython className="size-3" />,
    },
    {
      name: "Postgres",
      icon: <DiPostgresql className="size-3" />,
    },
    {
      name: "Docker",
      icon: <FaDocker className="size-3" />,
    },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "gyanendraprakash10@gmail.com",
    tel: "+91 9779515993",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Gyaanendra",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gyanendra-prakash-3b6293324/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Gyaanendra1",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:gyanendraprakash10@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Ezlearn",
      href: "https://ezlearn.in/",
      badges: [],
      location: "Remote",
      title: "Backend Intern",
      logoUrl: "/work-experience/ez.png",
      start: "Apr 2024",
      end: "Present",
      description: [
        "- Joined Ezlearn as a Backend Django **Intern**  in April, 2025.",
        "---",
        "- Started my work with **optimizing** the load on several **API endpoints**. ",
        "- Helped in creating a **simpler and more efficient course purchase flow**. ",
        "- Also implemented several **high-quality features** to enhance the **user experience**.",
        "---",
      ],
      links: [
        {
          type: "Website",
          href: "https://ezlearn.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      company: "nexCarft",
      href: "https://skillarena.in/",
      badges: [],
      location: "Remote",
      title: "AppDev Intern",
      logoUrl: "/work-experience/nex.png",
      start: "Jan 2024",
      end: "Mar 2024",
      description: [
        "- Improved and maintained core backend systems written in the **MERN** stack",
        "- Implemented a **real-time chat application** backend utilizing WebSockets and FastAPI",
      ],
      links: [
        {
          type: "Website",
          href: "https://skillarena.in/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Letter of Recommendation",
          href: "https://drive.google.com/file/d/1ONCudngptfuLZuR7hjSinbvVSr7fEnbd/view?usp=sharing",
          icon: <Icons.email className="size-3" />,
        },
      ],
    },
  ],
  education: [
    {
      school: "Bennett University",
      href: "https://bennett.edu.in/",
      degree: "Bachelor's of Technology in Computer Science Engineering ",
      logoUrl: "/bennett.png",
      start: "2024",
      end: "2028",
    },
    {
      school: "Goverment Model Senior Secondary School Sector 35-D",
      href: "https://gmsss35.com/",
      degree: "Senior Secondary (CBSE) | XII - 86.6%",
      logoUrl: "/gmsss35.png",
      start: "2022",
      end: "2024",
    },
    {
      school: "Manav Mangal Smart School",
      href: "https://manavmangal.school/mmss-64-mohali",
      degree: "Secondary (CBSE) | X - 88.8%",
      logoUrl: "/mmss.png",
      start: "2010",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "cooming soon 1 ",
      href: "",
      dates: "Nov 2024 - Present",
      active: true,
      description: "",
      technologies: ["Next.js", "Typescript", "LLaMa3.2", "Web Scraping"],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/",
    },
    {
      title: "cooming soon 2 ",
      href: "",
      dates: "September 2024 - October 2024",
      active: true,
      description: "",
      technologies: ["Next.js", "Typescript", "CopilotKit", "Appwrite"],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/",
    },
    {
      title: "cooming soon 3 ",
      href: "",
      dates: "April 2023 - March 2023",
      active: true,
      description: "",
      technologies: ["Java", "XML", "Firebase", "Android Studio"],
      links: [
        {
          type: "Play Store",
          href: "",
          icon: <Play className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/",
    },
    {
      title: "cooming soon 4",
      href: "",
      dates: "Dec 2022 - Jan 2023",
      active: true,
      description: "",
      technologies: ["Python", "Tkinter", "SQLite"],
      links: [
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/",
    },
  ],
  positions: [
    {
      title: "Junior core Tech Member",
      dates: "Sep 2024 - Jun 2025",
      location: "Artificial Intelligence Society ,Bennett University",
      description:
        "I worked with AIS to organise various events and Workshops.ALso worked on its website, which helped me be updated with various kinds of technologies.",
      image: "/ais.jpg",
      links: [
        {
          title: "LinkedIn",
          href: "https://www.linkedin.com/company/ais-bennett/posts/?feedView=all",
        },
        {
          title: "Website",
          href: "https://aiswebsite-new.vercel.app/home",
        },
      ],
    },
    {
      title: "Fullstack Developer and tech team",
      dates: "Feb 2025 - May 2025",
      location: "International Affairs Society, Bennett University",
      description:
        "I worked part time with them and help them build Website with a CMS",
      image: "/ias.jpg",
      links: [
        // {
        //   title: "Website",
        //   href: "https://international.fpt.edu.vn/",
        // },
        {
          title: "LinkedIn",
          href: "https://www.linkedin.com/company/international-affairs-society-bennet/",
        },
      ],
    },
    {
      title: "Tech team",
      dates: "August 2023 - May 2024",
      location: "SPARK E-Cell, Bennett University",
      description:
        "As the technical member i helped in creation and managment of a live autioning webite for and an event called Spark aution bid, Where participaints where given 30 seconds to think and buy a startup , Team or invidual with highest total worth of startups bought would win .",
      image: "/spark.jpg",
      links: [
        // { title: "Website", href: "https://csiindia.org/" },
        {
          title: "LinkedIn",
          href: "https://www.linkedin.com/company/spark-e-cell/",
        },
      ],
    },
    {
      title: "Tech Member",
      dates: "September 2022 - May 2023",
      location: "Centre for Law, Technology and Innovation, Bennett University",
      description:
        "CLTI was a  new and unique club launched in 2025 at Bennett University.  As a member, I helped organize various fun games and stalls, and played a crucial role in the hackathon LexHack — a one-of-a-kind event that combined  building websites  with defending them in a simulated courtroom setting.",
      image: "/clti.jpg",
      links: [
        // { title: "Website", href: "https://www.burs.bennett.edu.in/" },
        {
          title: "LinkedIn",
          href: "https://www.linkedin.com/company/clti-bu/",
        },
      ],
    },
  ],
  achievements: [
    {
      title: "Netruon",
      dates: "Apr 2024",
      location: "NST Riverhood campus",
      image: "/achievements/nst.jpeg",
    },
    {
      title: "Netruon",
      dates: "Apr 2024",
      location: "NST Riverhood campus",
      image: "/achievements/nst2.jpg",
    },
    {
      title: "Hackaccino",
      dates: "Apr 2025",
      location: "CSI Bennett University",
      image: "/achievements/hackachino.jpeg",
    },
  ],
} as const;
