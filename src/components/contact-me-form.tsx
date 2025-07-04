"use client";

import React, { useRef, useEffect } from "react"; // Import useRef and useEffect
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage, // Import FormMessage for better error display
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

// Import GSAP and its animation plugins
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const formSchema = z.object({
  email: z.string().nonempty("Email is required").email("Invalid email format"),
  message: z.string().nonempty("Message is required"),
});

export default function ContactMeForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  // Ref for the form container to attach GSAP animations
  const formContainerRef = useRef<HTMLDivElement>(null);

  // Effect for GSAP animations
  useEffect(() => {
    if (formContainerRef.current) {
      const ctx = gsap.context(() => {
        // Fade-in animation for the entire form
        gsap.fromTo(
          formContainerRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );

        // Animate individual form fields as they come into view
        gsap.fromTo(
          ".form-field-item", // Use a class for individual fields
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2, // Stagger animations for each field
            ease: "power2.out",
            scrollTrigger: {
              trigger: formContainerRef.current,
              start: "top 80%", // Start animation when the top of the form is 80% into the viewport
              end: "bottom 20%",
              toggleActions: "play none none none", // Play animation once when it enters the viewport
            },
          }
        );

        // Animate the submit button
        gsap.fromTo(
          ".submit-button",
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "elastic.out(1, 0.7)", // A bouncy, engaging ease
            delay: 0.5, // Slightly delay the button animation
            scrollTrigger: {
              trigger: formContainerRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Cleanup function to kill GSAP animations when the component unmounts
      return () => ctx.revert();
    }
  }, []); // Empty dependency array means this effect runs once on mount

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // In a real application, you would typically send this data to a backend API.
    // For this example, we'll simulate a successful submission with a toast.
    console.log("Form submitted with data:", data);

    // Simulate an API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message Sent!", {
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Optionally reset the form after successful submission
    form.reset();
  };

  // The handleSubmit from react-hook-form already handles event prevention.
  // We don't need a separate handleSubmit function that calls form.handleSubmit.
  // The original `onSubmit` function is now what we pass to `form.handleSubmit`.

  return (
    // Wrap the form in a div for better animation targeting
    <div ref={formContainerRef} className="contact-form-container">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)} // Use react-hook-form's handleSubmit
          method="POST"
          className="space-y-8 max-w-3xl mx-auto py-10"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="form-field-item"> {/* Add class for animation */}
                <div className="flex flex-col gap-y-2 items-start">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example-email@gmail.com"
                      type="email"
                      {...field}
                      className="focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" // Add shadcn/ui focus styles
                    />
                  </FormControl>
                  <FormMessage /> {/* Display validation messages */}
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="form-field-item"> {/* Add class for animation */}
                <div className="flex flex-col gap-y-2 items-start">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={5}
                      placeholder="Hi! I really like your work and want to discuss some things...."
                      className="resize-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" // Add shadcn/ui focus styles
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Ask me anything you would like. I always respond :D
                  </FormDescription>
                  <FormMessage /> {/* Display validation messages */}
                </div>
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="submit-button"> {/* Add class for animation */}
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}