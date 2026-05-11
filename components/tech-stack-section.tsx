"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const techCategories = [
  {
    title: "Frontend",
    subtitle: "Desenvolvimento",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend",
    subtitle: "Desenvolvimento",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Fastify / Express", level: 85 },
      { name: "NestJS", level: 75 },
      { name: "REST APIs", level: 95 },
    ],
  },
  {
    title: "Database",
    subtitle: "Banco de Dados",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "Prisma ORM", level: 95 },
      { name: "Supabase", level: 85 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    title: "DevOps",
    subtitle: "Infraestrutura",
    skills: [
      { name: "Docker", level: 80 },
      { name: "Git / GitHub", level: 95 },
      { name: "Vercel", level: 90 },
      { name: "CI/CD", level: 75 },
    ],
  },
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-foreground font-medium">{name}</span>
        <span className="text-xs text-primary font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
        />
      </div>
    </div>
  )
}

export function TechStackSection() {
  return (
    <section id="stack" className="py-24 px-6 md:px-12 lg:px-24 bg-card/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-4">Tecnologias</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ferramentas e tecnologias que domino para criar soluções completas e escaláveis.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="mb-6">
                <p className="text-xs text-primary font-mono mb-1">{category.subtitle}</p>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 0.1 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 rounded-xl bg-card border border-border"
        >
          <p className="text-xs text-primary font-mono mb-1 text-center">Soft Skills</p>
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Habilidades Interpessoais</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Metodologias Ágeis",
              "Scrum",
              "Liderança de Equipes",
              "Visão de Produto",
              "Comunicação",
              "Resolução de Problemas",
              "Trabalho em Equipe",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
