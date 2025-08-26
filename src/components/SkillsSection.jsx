import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 65, category: "frontend" },
  { name: "JavaScript", level: 65, category: "frontend" },
  { name: "React", level: 65, category: "frontend" },
  { name: "TypeScript", level: 60, category: "frontend" },
  { name: "Tailwind CSS", level: 45, category: "frontend" } ,

  // Backend
  { name: "Node.js", level: 50, category: "backend" },
  { name: "Java", level: 60, category: "backend" },
  { name: "Kotlin", level: 55, category: "backend" },
  { name: "Phython", level: 48, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 51, category: "tools" },
  { name: "VS Code", level: 50, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

// Mapeo de level(num) -> etiqueta visible
const getLevelLabel = (level) => {
  if (level >= 85) return "Experto";
  if (level >= 70) return "Avanzado";
  if (level >= 50) return "Intermedio";
  return "Básico";
};

// Mapeo de level(num) -> pasos 1..4 (para los bloques)
const getLevelSteps = (level) => {
  if (level >= 85) return 4;
  if (level >= 70) return 3;
  if (level >= 50) return 2;
  return 1;
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mis <span className="text-primary">Habilidades</span>
        </h2>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const label = getLevelLabel(skill.level);
            const steps = getLevelSteps(skill.level);

            return (
              <div key={skill.name} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                {/* Título + badge de nivel */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <span className="chip">{label}</span>
                </div>

                {/* Indicador por bloques (1..4) */}
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <span
                      key={i}
                      className={cn(
                        "h-2 w-10 rounded-full transition-colors",
                        i <= steps ? "bg-primary" : "bg-secondary/50"
                      )}
                    />
                  ))}
                </div>

                {/* Opcional: descripción corta por nivel */}
                {/* <p className="text-sm text-muted-foreground mt-3">
                  {label === "Experto" && "Dominio profundo, diseño de arquitectura y mentoría."}
                  {label === "Avanzado" && "Construcción autónoma de features robustas."}
                  {label === "Intermedio" && "Resolución de tareas habituales con buenas prácticas."}
                  {label === "Básico" && "Fundamentos sólidos en progreso."}
                </p> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
