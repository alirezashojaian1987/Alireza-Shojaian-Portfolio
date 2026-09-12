"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, GithubIcon, Linkedin, Send } from "lucide-react";
import Button from "../UI/Button";
import AnimatedBorderButton from "../UI/AnimatedBorderButton";

interface Dot {
  id: number;
  left: string;
  top: string;
  duration: string;
  delay: string;
}

export default function Hero(){
    const [dots, setDots] = useState<Dot[]>([]);
    useEffect(()=>{
        setDots(
            [...Array(30)].map((_, i) => ({
                id:i,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                duration: `${15 + Math.random() * 20}s`,
                delay: `${Math.random() * 5}s`,
            })),
        );
    }, []);

    return(
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src="/hero-background.svg"
                    alt="Hero background"
                    fill
                    priority
                    className="object-cover opacity-40 "
                />

                <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* Blue dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {dots.map((dot)=>(
                    <div
                        key={dot.id}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor:"#38bdf8",
                            left:dot.left,
                            top:dot.top,
                            animation:`slow-drift ${dot.duration} ease-in-out infinite`,
                            animationDelay:dot.delay,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left column - Text content */}
                    <div className="space-y-8 ">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                                Front-end Developer • React Specialist
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Creating <span className="text-primary glow-text">Interactive</span>
                                <br/>
                                web apps and pages with
                                <br/>
                                <span className="font-serif italic font-normal text-white">
                                    precision.
                                </span>
                            </h1>

                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hi, I&apos;m Alireza Shojaian. Front-end developer in
                                React, Next.Js and TypeScript. I build scalable, performant web
                                apps that users like.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg">
                                Contact me
                                <ArrowRight className="w-5 h-5"/>
                            </Button>
                            <AnimatedBorderButton/>
                        </div>
                        {/* social links */}
                        {/* <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow me:</span>
                            {[
                                {icon:Github, href:"#"},
                                {icon:Linkedin, href:"#"},
                                {icon:Send, href:"#"},
                            ].map((social, idx)=>(
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                >
                                    {<social.icon className="w-5 h-5"/>}
                                </a>
                            ))}
                        </div> */}
                    </div>
                    {/* Right column - Profile Image */}
                </div>
            </div>
        </section>
    )
}