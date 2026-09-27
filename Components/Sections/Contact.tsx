"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react"
import Button from "../UI/Button";
import { useState } from "react";

const contactInfo=[
    {
        icon:Mail,
        label:"Email",
        value:"ash19878304@gmail.com",
        href:"mailto:ash19878304@gmail.com",
    },

    {
        icon:Phone,
        label:"Phone",
        value:"+98 9153290738",
        href:"tel:+989153290738",
    },

    {
        icon:MapPin,
        label:"Location",
        value:"Iran - Mashhad - Fakoori Blvd",
        href:"#",
    },
];

export default function Contact(){
    const [formData, setFormData]=useState({
        name:"",
        email:"",
        message:"",
    });

    const handleSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    }

    return(
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider animate-fade-in">
                        Get In Touch
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Let&apos;s build{" "}
                        <span className="font-serif italic font-normal text-white">
                        something great.
                        </span>
                    </h2>

                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Have a project in mind? I&apos;d love to hear about it. Send me a message
                        and let&apos;s discuss how we can work together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                     <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    placeholder="Your name:..."
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name:e.target.value})}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email:e.target.value})}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    required
                                    placeholder="Your message:..."
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message:e.target.value})}
                                />
                            </div>

                            <Button className="w-full" type="submit" size="lg">
                                Send message
                                <Send/>
                            </Button>
                        </form>
                     </div>
                </div>
            </div>
        </section>
    )
}