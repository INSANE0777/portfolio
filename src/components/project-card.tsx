"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import React, { useRef, useEffect } from "react"; // Import React hooks
import gsap from "gsap"; // Import GSAP
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

// Register ScrollTrigger plugin if not done globally
gsap.registerPlugin(ScrollTrigger);

interface Props {
  title: string;
  href?: string;
  description?: string;
  dates: string;
  tags?: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null); // Ref for the entire card div

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      // --- Entrance Animations ---
      const entranceTl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%", // Start animation when the top of the card is 85% into the viewport
          end: "bottom 20%",
          toggleActions: "play none none none", // Play animation once on enter
        },
      });

      // Animate the Card itself (scale and opacity)
      entranceTl.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.98, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      // Animate the Media (video/image) with a slight delay
      const mediaElement = cardRef.current?.querySelector("video, img");
      if (mediaElement) {
        entranceTl.fromTo(
          mediaElement,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out" },
          "-=0.4" // Start this animation 0.4s before the card's entrance animation ends
        );
      }

      // Animate the Text Content (Title, Dates, Description)
      const textContentElements = cardRef.current?.querySelectorAll(".card-text-content > *");
      if (textContentElements && textContentElements.length > 0) {
        entranceTl.fromTo(
          textContentElements,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: "power2.out" },
          "-=0.3" // Start this animation 0.3s before the previous one ends
        );
      }

      // Animate the Tags
      const tags = cardRef.current?.querySelectorAll(".project-tags .badge");
      if (tags && tags.length > 0) {
        entranceTl.fromTo(
          tags,
          { opacity: 0, y: 10, scale: 0.8, stagger: 0.05 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.05, duration: 0.4, ease: "power1.out" },
          "-=0.2"
        );
      }

      // Animate the Links (Footer)
      const links = cardRef.current?.querySelectorAll(".card-links-container .badge");
      if (links && links.length > 0) {
        entranceTl.fromTo(
          links,
          { opacity: 0, y: 10, scale: 0.8, stagger: 0.08 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.4, ease: "power1.out" },
          "-=0.1"
        );
      }

      // --- Scroll Back Animations ---
      // We'll use the same ScrollTrigger instances but with different `toggleActions`
      // and define reverse animations.

      // Scroll back for the entire Card
      const cardScrollBack = gsap.fromTo(
        cardRef.current,
        { opacity: 1, scale: 1, y: 0 }, // Start from the end state of entrance
        {
          opacity: 0,
          scale: 0.98,
          y: 30,
          duration: 0.8,
          ease: "power2.in", // Use an 'in' ease for reverse
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse", // Play on enter, reverse on leave
            scrub: true, // Link animation to scroll position
          },
        }
      );

      // Scroll back for Media
      if (mediaElement) {
        const mediaScrollBack = gsap.fromTo(
          mediaElement,
          { opacity: 1, y: 0, scale: 1 }, // Start from the end state
          {
            opacity: 0,
            y: 20,
            scale: 0.95,
            duration: 0.6,
            ease: "power2.in",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              scrub: true,
            },
          }
        );
      }

      // Scroll back for Text Content
      if (textContentElements && textContentElements.length > 0) {
        const textContentScrollBack = gsap.fromTo(
          textContentElements,
          { opacity: 1, y: 0 }, // Start from the end state
          {
            opacity: 0,
            y: 15,
            ease: "power2.in",
            stagger: 0.08, // Stagger the reverse animation as well
            duration: 0.5,
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              scrub: true,
            },
          }
        );
      }

      // Scroll back for Tags
      if (tags && tags.length > 0) {
        const tagsScrollBack = gsap.fromTo(
          tags,
          { opacity: 1, y: 0, scale: 1 }, // Start from the end state
          {
            opacity: 0,
            y: 10,
            scale: 0.8,
            duration: 0.4,
            ease: "power1.in",
            stagger: 0.05,
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              scrub: true,
            },
          }
        );
      }

      // Scroll back for Links
      if (links && links.length > 0) {
        const linksScrollBack = gsap.fromTo(
          links,
          { opacity: 1, y: 0, scale: 1 }, // Start from the end state
          {
            opacity: 0,
            y: 10,
            scale: 0.8,
            duration: 0.4,
            ease: "power1.in",
            stagger: 0.08,
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              scrub: true,
            },
          }
        );
      }

    }, cardRef); // Pass the ref to gsap.context

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <Card
      ref={cardRef} // Apply ref here
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      {/* Link wrapper for Media */}
      <Link
        href={href || "#"}
        target="_blank"
        className={cn("block cursor-pointer", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>

      <div className="card-text-content flex flex-col px-2"> {/* Wrapper for text content */}
        <CardHeader className="px-0 pb-1"> {/* Adjusted padding */}
          <div className="space-y-1">
            <CardTitle className="mt-1 text-base">{title}</CardTitle>
            <time className="font-sans text-xs">{dates}</time>
            <div className="hidden font-sans text-xs underline print:visible">
              {link?.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
          </div>
        </CardHeader>
        <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
          {description}
        </Markdown>
      </div>

      <CardContent className="mt-auto flex flex-col px-2 pt-1"> {/* Adjusted padding */}
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1 project-tags"> {/* Added class for tags */}
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-2 flex items-center justify-end pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1 card-links-container"> {/* Added class for links */}
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                  <p className="pr-[1px]">{link.icon}</p>
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}