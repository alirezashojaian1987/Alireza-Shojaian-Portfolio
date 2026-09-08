"use client";

import { useState } from "react";
import Link from "next/link";

import { Menu, X } from "lucide-react"
import Button from "../UI/Button";

const navLinks=[
    { href:"#about", label:"About", },
    { href:"#projects", label:"Projects", },
    { href:"#experience", label:"Experience", },
    { href:"#testimonials", label:"Testimonials", }
];

export default function Navbar(){
    const [isMobileMenuOpen, setIsMobileMenuOpen]=useState(false);

    return(
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-5">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <Link href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                    Alireza <span className="text-primary">Shojaian</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index)=>(
                            <Link
                                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                                key={index}
                                href={link.href}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button size="sm">Contact me</Button>
                </div>

                {/* Mobile menu Button */}
                <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={()=>setIsMobileMenuOpen((prev) => !prev)}>
                    {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </nav>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index)=>(
                            <Link
                                className="text-lg text-muted-foreground hover:text-foreground py-2 "
                                key={index}
                                href={link.href}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <Button>Contact me</Button>
                    </div>
                </div>
            )}
        </header>
    );
}