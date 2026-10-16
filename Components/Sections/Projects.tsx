import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import AnimatedBorderButton from "../UI/AnimatedBorderButton";
import Link from "next/link";
import Image from "next/image";

const projects=[
    {
        title: "Nardban",
        description:"An academic website for children",
        image:"/Projects/Nardban.png",
        tags:[
            "React",
            "TypeScript",
            "Scss",
            "Tailwind",
            "Django",
        ],
        link:"https://nardban.net/",
        github:"#",
    },

    {
        title: "Store app",
        description:"A simple store app using dummyjson's store api",
        image:"/Projects/store app.png",
        tags:[
            "React",
            "TypeScript",
            "Scss",
        ],
        link:"https://store-app-nine-indol.vercel.app/",
        github:"https://github.com/alirezashojaian1987/Store-app.git",
    },

    {
        title: "Quiz app",
        description:"A web app where you can setup your desired category for questions and test your skills",
        image:"/Projects/quiz app.png",
        tags:[
            "React",
            "TypeScript",
            "Tailwind",
        ],
        link:"https://quiz-app-i3sn.vercel.app/",
        github:"https://github.com/alirezashojaian1987/Quiz-app.git",
    },
];

export default function Projects(){
    return(
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif font-normal text-white">
                            {" "}
                            make an impact.
                        </span>
                    </h2>

                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        My recent works
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((prj, idx)=>(
                        <div
                            key={idx}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{animationDelay:`${(idx + 1) * 100}ms`}}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <Image
                                    src={prj.image}
                                    alt={prj.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"/>

                                {/* Overlay links */}
                                <div className="hidden md:flex absolute inset-0 items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Link
                                        href={prj.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View ${prj.title} live`}
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <ArrowUpRight className="w-5 h-5"/>
                                    </Link>

                                    <Link
                                        href={prj.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View ${prj.title} on GitHub`}
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <FaGithub className="w-5 h-5"/>
                                    </Link>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{prj.title}</h3>
                                    <ArrowUpRight
                                        className="
                                        w-5 h-5 text-muted-foreground group-hover:text-primary
                                        group-hover:translate-x-1
                                        group-hover:-translate-y-1 transition-all"
                                    />
                                </div>

                                <p className="text-muted-foreground text-sm">
                                    {prj.description}
                                </p>

                                {/* Mobile project links */}
                                <div className="flex md:hidden items-center gap-3">
                                    <Link
                                        href={prj.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                                            border border-border/70 text-xs font-medium text-muted-foreground
                                            hover:text-primary hover:border-primary/50 transition-colors"
                                    >
                                        Live demo
                                        <ArrowUpRight className="w-3.5 h-3.5"/>
                                    </Link>

                                    <Link
                                        href={prj.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                                            border border-border/70 text-xs font-medium text-muted-foreground
                                            hover:text-primary hover:border-primary/50 transition-colors"
                                    >
                                        Source code
                                        <FaGithub className="w-3.5 h-3.5"/>
                                    </Link>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {prj.tags.map((tag, tagId)=>(
                                        <span
                                            key={tagId}
                                            className="
                                                px-4 py-1.5 rounded-full bg-surface text-xs font-medium
                                                border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary
                                                transition-all duration-300"
                                            >
                                                {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View all CTA */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton>
                        <Link
                            className="flex items-center gap-2"
                            href="https://github.com/alirezashojaian1987"
                            target="_blank"
                        >
                            View all projects
                            <ArrowUpRight className="w-5 h-5"/>
                        </Link>
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    );
};