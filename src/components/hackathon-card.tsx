"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React, { useRef, useEffect } from "react"; // Import React hooks
import gsap from "gsap"; // Import GSAP
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

// Register ScrollTrigger plugin globally or within component if preferred
gsap.registerPlugin(ScrollTrigger);

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon?: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  links,
}: Props) {
  const cardRef = useRef<HTMLLIElement>(null); // Ref for the individual list item

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      // Animation for the entire card as it enters the viewport
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50, scale: 0.98 }, // Start slightly off-screen, smaller
        {
          opacity: 1,
          y: 0,
          scale: 1, // Scale to normal size
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%", // Start animation when the top of the card is 85% into the viewport
            end: "bottom 20%",
            toggleActions: "play none none none", // Play animation once on enter
          },
        }
      );

      // Animate the Avatar - with null check
      const avatarContainer = cardRef.current?.querySelector(".avatar-container");
      if (avatarContainer) {
        gsap.fromTo(
          avatarContainer,
          { opacity: 0, rotate: -30, scale: 0.8 },
          {
            opacity: 1,
            rotate: 0,
            scale: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.7)", // Bouncy effect
            delay: 0.2, // Delay avatar animation slightly
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Animate the badges (links) with a stagger effect - with null check
      const badges = cardRef.current?.querySelectorAll(".badge-item");
      if (badges && badges.length > 0) {
        gsap.fromTo(
          badges,
          { opacity: 0, x: -20, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.15, // Stagger the animation for each badge
            ease: "power1.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, cardRef); // Pass the ref to gsap.context

    return () => ctx.revert(); // Cleanup on unmount
  }, []); // Empty dependency array to run once on mount

  return (
    <li ref={cardRef} className="relative ml-10 py-4"> {/* Apply ref here */}
      {/* Add a class for easier targeting of the avatar container */}
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full avatar-container">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-2">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-semibold leading-none">{title}</h2>
        {location && (
          <p className="text-sm text-muted-foreground font-semibold">
            {location}
          </p>
        )}
        {description && (
          <p className=" dark:prose-invert text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link
              href={link.href}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Add a class to each Badge for stagger animation */}
              <Badge
                variant={"outline"}
                title={link.title}
                className="flex gap-2 hover:border-foreground hover:cursor-pointer badge-item" // Added badge-item class
              >
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}