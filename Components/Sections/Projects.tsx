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
            "Scss",
            "Tailwind",
            "Django",
        ],
        link:"#",
        github:"#",
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
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Link
                                        href={prj.link}
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <ArrowUpRight className="w-5 h-5"/>
                                    </Link>

                                    <Link
                                        href={prj.link}
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
                                            group-hover:-translate-y-1 transition-all
                                        "
                                    />
                                </div>

                                <p className="text-muted-foreground text-sm">
                                    {prj.description}
                                </p>

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
                        View all projects
                        <ArrowUpRight className="w-5 h-5"/>
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    );
};