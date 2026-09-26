import Image from "next/image";
import Link from "next/link";
import { Award, ExternalLink, FileText, Trophy } from "lucide-react";

export default function Certificates() {
    return (
        <section id="certificates" className="py-32 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Certificates
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        A milestone worth
                        <span className="font-serif italic font-normal text-white">
                            {" "}remembering.
                        </span>
                    </h2>

                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A recognition of my learning journey and the effort I put
                        into developing my skills in modern web development.
                    </p>
                </div>

                {/* Certificate */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Certificate Image */}
                    <div className="animate-fade-in animation-delay-300">
                        <div className="relative group">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"/>

                            <div className="relative glass rounded-3xl p-3 glow-border overflow-hidden">
                                <Image
                                    src="/Certificate.jpg"
                                    alt="Web development course certificate"
                                    width={1200}
                                    height={850}
                                    className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Certificate Information */}
                    <div className="space-y-6 animate-fade-in animation-delay-400">

                        {/* Achievement */}
                        <div className="inline-flex items-center gap-3 glass rounded-full px-4 py-2 text-primary">
                            <Trophy className="w-5 h-5" />
                            <span className="text-sm font-medium">
                                Highest Score
                            </span>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-foreground">
                                Frontend Development
                            </h3>

                            <p className="text-primary mt-2 text-lg">
                                Daneshkar
                            </p>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                            Completed the Frontend + React course at Daneshkar,
                            building a strong foundation in modern web
                            development and frontend technologies. I graduated
                            with the highest score in the course.
                        </p>

                        {/* Achievement Highlight */}
                        <div className="glass rounded-2xl p-5 border border-primary/20">
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <Award className="w-5 h-5 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-semibold">
                                        Course Achievement
                                    </h4>

                                    <p className="text-sm text-muted-foreground mt-1">
                                        Graduated with the highest score among
                                        the course participants.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-4 pt-2">

                            {/* PDF */}
                            <Link
                                href="/Certificate of Achievement - Alireza Shojaian.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20"
                            >
                                <FileText className="w-5 h-5" />
                                View Certificate
                            </Link>

                            {/* External certificate link */}
                            <Link
                                href="https://www.linkedin.com/feed/update/urn:li:activity:7482314468312375296/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                            >
                                <ExternalLink className="w-5 h-5" />
                                View on Linkedin
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}