"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactMeForm from "@/components/contact-me-form";
import { HackathonCard } from "@/components/hackathon-card";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import { DATA } from "@/data/resume";
import { Notebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { Roboto } from "next/font/google";
import Lenis from "lenis"; 

const interFont = Roboto({
  subsets: ["latin"],
  weight: "500",
});

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const aboutTitleRef = useRef<HTMLHeadingElement>(null);
  const aboutContentRef = useRef<HTMLDivElement>(null);
  const resumeButtonRef = useRef<HTMLDivElement>(null);
  const workTitleRef = useRef<HTMLHeadingElement>(null);
  const workCardsRef = useRef<HTMLDivElement[]>([]);
  const skillsTitleRef = useRef<HTMLHeadingElement>(null);
  const skillsBadgesRef = useRef<HTMLDivElement[]>([]);

  // Initialize Lenis and GSAP ScrollTrigger integration
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1,
      syncTouch: true,
      infinite: false,
      lerp: 0.1,
    });

    // Create a function to handle the RAF callback
    const handleRAF = (time: number) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    };

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    lenis.on("scroll", ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
    gsap.ticker.add(handleRAF);

    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);

    // --- GSAP Animations (as before) ---

    // Hero Section Animations
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    }).from(
      descriptionRef.current,
      {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.5"
    );

    // About Section Animations
    gsap.from(aboutTitleRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: "power3.out",
    });

    gsap.from(aboutContentRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
      duration: 0.8,
      y: 20,
      opacity: 0,
      ease: "power3.out",
      delay: 0.2,
    });

    gsap.from(resumeButtonRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
      duration: 0.8,
      y: 20,
      opacity: 0,
      ease: "power3.out",
      delay: 0.4,
    });

    // Work Section Animations
    gsap.from(workTitleRef.current, {
      scrollTrigger: {
        trigger: workRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: "power3.out",
    });

    workCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.from(card, {
          scrollTrigger: {
            trigger: workRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
          duration: 0.8,
          y: 40,
          opacity: 0,
          ease: "power3.out",
          delay: 0.2 + index * 0.1,
        });
      }
    });

    // Skills Section Animations
    gsap.from(skillsTitleRef.current, {
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: "power3.out",
    });

    skillsBadgesRef.current.forEach((badge, index) => {
      if (badge) {
        gsap.from(badge, {
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
          duration: 0.6,
          scale: 0.8,
          opacity: 0,
          ease: "back.out(1.7)",
          delay: 0.3 + index * 0.05,
        });
      }
    });

    // Cleanup function
    return () => {
      // Kill all ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      // Remove the GSAP ticker listener
      gsap.ticker.remove(handleRAF);
      // Destroy Lenis instance
      lenis.destroy();
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div className="px-6">
      <main
        className={`flex items-center justify-center flex-col min-h-[100dvh] space-y-10  ${interFont.className}`}
      >
        <section id="hero" ref={heroRef}>
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-3 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <h1
                  ref={titleRef}
                  className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text=6xl/none"
                >
                  {`Hi, I'm ${DATA.name.split(" ")[0]}`}
                </h1>
                <p ref={descriptionRef} className="max-w-[600px] md:text-xl">
                  {DATA.description}
                </p>
              </div>
              <Avatar
                className="size-40 border hover:shadow-lg hover:shadow-foreground/20 transition-all duration-300 ease-in-out"
              >
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </section>
        <section id="about" ref={aboutRef}>
          <h2 ref={aboutTitleRef} className="text-4xl font-bold ">
            About
          </h2>
          <div ref={aboutContentRef}>
            <Markdown
              className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
            >
              {DATA.summary}
            </Markdown>
          </div>
          <div ref={resumeButtonRef} className="flex items-center justify-end mt-4">
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button size={`sm`} variant={`outline`}>
                Download Resume
                <Notebook className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
        <section id="work" className="w-full" ref={workRef}>
          <div className="flex min-h-0  min-w-0 w-full flex-col gap-y-3">
            <h2 ref={workTitleRef} className="text-3xl font-bold">
              Work Experience
            </h2>
            {DATA.work.map((work, id) => (
              <div
                key={work.company}
                ref={(el) => {
                  if (el) {
                    workCardsRef.current[id] = el;
                  }
                }}
              >
                <ResumeCard
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                  links={work.links}
                />
              </div>
            ))}
          </div>
        </section>
        <section id="education" className="w-full">
          <div className="flex min-h-0 max-w-2x min-w-0 w-full flex-col gap-y-3">
            <h2 className="text-3xl font-bold">Education</h2>
            {DATA.education.map((education, id) => (
              <ResumeCard
                key={education.school}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            ))}
          </div>
        </section>
        <section id="skills" className="w-full" ref={skillsRef}>
          <div className="flex min-h-0 flex-col gap-y-3">
            <h2 ref={skillsTitleRef} className="text-3xl font-bold">
              Skills
            </h2>

            <div className="flex flex-wrap gap-1 items-center justify-center">
              {DATA.skills.map((skill, id) => (
                <div
                  key={skill.name}
                  ref={(el: HTMLDivElement | null) => {
                    if (el) {
                      skillsBadgesRef.current[id] = el;
                    }
                  }}
                >
                  <Badge
                    className={`hover:cursor-default transition-all duration-300 ease-in-out `}
                  >
                    <span className="mr-2">{skill.icon}</span>
                    {skill.name}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Projects
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I like to build projects. I have built a lot of projects, here
                  are just some of my{" "}
                  <span className="font-bold">favorites</span>.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project, id) => (
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  links={project.links}
                />
              ))}
            </div>
          </div>
        </section>
        <section id="positions">
          <div className="space-y-12 w-full py-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Positions of Responsibility
                </h2>
                <p className="text-muted-foreground md:text-base/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I believe in the power of collaboration and teamwork. So I
                  like to keep myself busy while working in different
                  <span className="font-bold"> communities</span> and{" "}
                  <span className="font-bold">projects</span>. Here are some of
                  the positions I have held.
                </p>
              </div>
            </div>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.positions.map((position, id) => (
                <HackathonCard
                  key={position.title + position.dates}
                  title={position.title}
                  description={position.description}
                  location={position.location}
                  dates={position.dates}
                  image={position.image}
                  links={position.links}
                />
              ))}
            </ul>
          </div>
        </section>
        <section id="achievements">
          <div className="space-y-12 w-full py-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Achievements
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended 4 hackathons. I like
                  to keep exploring and learning new things.
                </p>
              </div>
            </div>
            <Marquee>
              {DATA.achievements.map((achievement, id) => (
                <div key={achievement.title + id}>
                  <div>
                    <Image
                      className="w-72 h-48 object-cover"
                      src={achievement.image}
                      alt={achievement.title}
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </section>
        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <div className="space-y-0">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <ContactMeForm />
              <p className="mx-auto max-w-[600px] text-muted-foreground text-sm/relaxed md:text-base/relaxed">
                Or just want to have a casual chat? you can just shoot me a dm
                on{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-foreground hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Link>{" "}
                or{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-foreground hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}