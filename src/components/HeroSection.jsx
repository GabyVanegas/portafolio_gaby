import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center px-6 lg:px-20">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/public/projects/nebulosa.mp4"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/projects/nebulosa.mp4" type="video/mp4" />
      </video>

      {/* Capa opaca encima para dar efecto “vidrio” */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Contenido */}
      <div className="relative z-10 container mx-auto max-w-4xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="opacity-0 animate-fade-in">Hola, yo soy</span>
          <span className="text-primary opacity-0 animate-fade-in-delay-1"> Gabriela</span>
          <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Vanegas</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          Transformo ideas en aplicaciones móviles y web funcionales, priorizando calidad,
          escalabilidad y diseño centrado en el usuario.
        </p>
        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
          <a href="#proyectos" className="cosmic-button">
            Un vistazo a mis proyectos
          </a>
        </div>
      </div>

      {/* Indicador scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
