import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highlights=[
    {
        icon:Code2,
        title:"Clean code",
        description:"Writing maintainable and scalable code",
    },

    {
        icon:Rocket,
        title:"Performance",
        description:"Optimizing for speed and delivering fast user experiences",
    },

    {
        icon:Users,
        title:"Collaborating",
        description:"Working effectively with teammates to build and improve projects",
    },

    {
        icon:Lightbulb,
        title:"Innovation",
        description:"Staying ahead with the latest technologies",
    },
]

export default function About(){
    return(
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider">About me</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Building with purpose,
                            <span className="font-serif italic font-normal text-white">
                                {' '}
                                learning with every project.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                My interest in web development started with wanting to understand how websites work behind the scenes and gradually
                                grew into a focus on frontend development. I enjoy taking an idea and turning it into
                                a responsive, structured, and interactive interface.
                            </p>

                            <p>
                                I primarily work with React, Next.js, and TypeScript to build responsive and interactive web applications.
                                I&apos;m interested in writing clean, maintainable code while also paying attention
                                to design, performance, and the overall user experience.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                My main focus is modern frontend development with React, Next.js, and
                                TypeScript. I enjoy building responsive web applications, creating
                                reusable components, and continuously improving the way I build.
                                I&apos;m also expanding my knowledge of backend technologies with the goal
                                of becoming a full-stack web developer
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx)=>(
                            <div 
                                key={idx}
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{animationDelay: `${ (idx + 1) * 100}ms`}}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary"/>
                                </div>

                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}