import {
    Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter,
  } from "lucide-react";
  import { cn } from "../lib/utils";
  import { useToast } from "../hooks/use-toast";
  import { useRef, useState } from "react";
  
  export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setSubmitting] = useState(false);
    const formRef = useRef(null);
    const API = import.meta.env.VITE_API_BASE_URL || "";
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!formRef.current) return;
  
      const formData = new FormData(formRef.current);
      const payload = Object.fromEntries(formData.entries());
  
      setSubmitting(true);
      try {
        const res = await fetch(`${API}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Error de envío");
  
        toast({
          title: "Mensaje enviado con éxito",
          description: "Gracias por tu mensaje. ¡Pronto me comunicaré contigo!",
        });
        formRef.current.reset();
      } catch (err) {
        toast({
          title: "No se pudo enviar",
          description: "Ocurrió un problema al enviar tu mensaje. Inténtalo de nuevo.",
          variant: "destructive",
        });
      } finally {
        setSubmitting(false);
      }
    };
  
    return (
      <section id="contacto" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Contac<span className="text-primary">tame</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Estoy siempre abierta a nuevas oportunidades y colaboraciones en el desarrollo
            de aplicaciones móviles y web. Si tienes un proyecto en mente o deseas trabajar
            conmigo, no dudes en escribirme.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Izquierda: info */}
            <div className="md:col-span-5 space-y-8">
              <h3 className="text-2xl font-semibold">Información de Contacto</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:gabriela0vanegas@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      gabriela0vanegas@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium">Teléfono</h4>
                    <a
                      href="tel:+50374184891"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +503 7418-4891
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium">Ubicación</h4>
                    <p className="text-muted-foreground">Sonsonate, El Salvador</p>
                  </div>
                </li>
              </ul>
  
              <div className="pt-2">
                <h4 className="font-medium mb-3">Conecta conmigo</h4>
                <div className="flex items-center gap-4">
                  <a aria-label="LinkedIn" href="https://www.linkedin.com/in/gabriela0vanegas" target="_blank" rel="noreferrer"><Linkedin /></a>
                  <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61553263212099" target="_blank" rel="noreferrer"><Facebook /></a>
                  <a aria-label="Instagram" href="https://www.instagram.com/gabyy_vanegas?igsh=MW53eXF2NWoyMGNvdg==" target="_blank" rel="noreferrer"><Instagram /></a>
                </div>
              </div>
            </div>
  
            {/* Derecha: formulario */}
            <div className="md:col-span-7">
              <div className="bg-card/80 backdrop-blur rounded-2xl border border-white/10 p-8 shadow-xs">
                <h3 className="text-2xl font-semibold mb-6">Envíame un mensaje</h3>
  
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
                      <input
                        type="text" id="name" name="name" required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email" id="email" name="email" required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
                    <textarea
                      id="message" name="message" required rows={5}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-y"
                      placeholder="Cuéntame sobre tu proyecto…"
                    />
                  </div>
  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn("cosmic-button w-full md:w-auto flex items-center justify-center gap-2")}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  