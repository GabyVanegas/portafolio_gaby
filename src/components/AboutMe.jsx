import { Briefcase, Code, User } from "lucide-react"

export const AboutMe = () => {
    return(
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Acerca <span className="text-primary">De</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6 text-center md:text-left" >
                        <h3 className="text-2xl font-semibold">Full Stack & Mobile App Developer</h3>
                        <p className="text-muted-foreground max-w-3xl mx-auto">
                        Soy desarrolladora de software especializada en el desarrollo de aplicaciones móviles con Kotlin y en la creación de interfaces web dinámicas con React. Además, trabajo con diversos lenguajes como Java, JavaScript, PHP, C++ y C#, y con frameworks modernos como Node.js, Laravel y Tailwind CSS.
                        </p>
                        <p className="text-muted-foreground max-w-3xl mx-auto">
                        Combino experiencia en frontend y backend para construir soluciones escalables, seguras y con un diseño centrado en el usuario. Me apasiona transformar ideas en productos digitales funcionales, integrando buenas prácticas de programación, arquitectura limpia y tecnologías actuales para garantizar calidad y rendimiento.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contacto" className="cosmic-button">
                                {" "}
                                Contactame
                            </a>
                            <a href="/projects/cv.pdf" download="cv.pdf"  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Descargar CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                 <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Developer</h4>
                                    <p className="text-muted-foreground">
                                        Creadora de paginas webs responsivas y modernas
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                 <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Mobile App Developer</h4>
                                    <p className="text-muted-foreground">
                                    Desarrollo de aplicaciones móviles nativas y multiplataforma, optimizadas para rendimiento y experiencia de usuario.
                                    </p>
                                </div>
                            </div>
                        </div>
                            
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                 <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Backend Developer</h4>
                                    <p className="text-muted-foreground">
                                    Construcción de APIs escalables y seguras con Node.js y Laravel, aplicando arquitectura limpia y buenas prácticas.
                                    </p>
                                </div>
                            </div>
                        </div>
                            
                    </div>
                </div>
            </div>
        </section>
    )
}