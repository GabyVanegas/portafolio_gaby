import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"
import {cn} from "../lib/utils"
import { useToast } from "../hooks/use-toast"
import { useState } from "react"

export const ContactSection = () =>{

    const {toast} = useToast() 
    const [isSubmitting, setSubmitting] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()

        setSubmitting(true)

        setTimeout(() =>{
            toast({
                title: "Mensaje enviado con exito",
                description: "Gracias por tu mensaje. Pronto me estare comunicando contigo."
            })
        
            setSubmitting(false)
        }, 1500)

    }


    return(
        <section id="contacto" className="py-24 px-4 relative bg-secondar/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Estoy siempre abierta a nuevas oportunidades y colaboraciones en el desarrollo de aplicaciones móviles y web. Si tienes un proyecto en mente o deseas trabajar conmigo, no dudes en escribirme. Estaré encantada de conversar y encontrar la mejor forma de aportar valor con mis habilidades.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:gabriela0vanegas@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        gabriela0vanegas@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Telefono</h4>
                                    <a href="tel:+50374184891" className="text-muted-foreground hover:text-primary transition-colors">
                                        +503 7418-4891
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Ubicación</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Sonsonate, El Salvador
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Conecta conmigo</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" target="_blank">
                                    <Linkedin/>
                                </a>
                                <a href="#" target="_blank">
                                    <Twitter/>
                                </a>
                                <a href="#" target="_blank">
                                    <Facebook/>
                                </a>
                                <a href="#" target="_blank">
                                    <Instagram/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6">Enviame un mensaje</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre: </label>
                                <input type="text" id="name" required name="name"
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder=""/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email: </label>
                                <input type="email" id="email" required name="email"
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder=""/>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje: </label>
                                <textarea id="message" required name="message"
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder=""/>
                            </div>

                            <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                            )} >
                                {isSubmitting ? "Enviando..." : "Enviar mensaje" }
                                
                                <Send size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}