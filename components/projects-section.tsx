"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "SaaS Multi-Tenant ERP",
    description: "Sistema de gestão empresarial com arquitetura multi-tenant, isolamento por schema no PostgreSQL, autenticação JWT e dashboard administrativo completo.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    image: "/placeholder.svg?height=300&width=500",
    demo: "#",
    github: "#",
  },
  {
    title: "Sistema de Gestão Clínica",
    description: "Sistema completo com agenda inteligente, prontuário eletrônico, controle financeiro e relatórios gerenciais para clínicas médicas.",
    tech: ["React", "Node.js", "Fastify", "PostgreSQL"],
    image: "/placeholder.svg?height=300&width=500",
    demo: "#",
    github: "#",
  },
  {
    title: "E-commerce B2B",
    description: "Plataforma B2B com catálogo dinâmico, carrinho de compras, integração com ERP legado e painel de analytics para distribuidoras.",
    tech: ["Next.js", "NestJS", "Supabase", "Redis"],
    image: "/placeholder.svg?height=300&width=500",
    demo: "#",
    github: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Dashboard de analytics em tempo real com gráficos interativos, filtros avançados e exportação de relatórios customizados.",
    tech: ["Next.js", "Recharts", "PostgreSQL", "Redis"],
    image: "/placeholder.svg?height=300&width=500",
    demo: "#",
    github: "#",
  },
  {
    title: "API de Integração",
    description: "API REST robusta para integração de sistemas legados com autenticação OAuth2, rate limiting e documentação Swagger.",
    tech: ["Node.js", "Fastify", "PostgreSQL", "Docker"],
    image: "/placeholder.svg?height=300&width=500",
    demo: "#",
    github: "#",
  },
  {
    title: "Automação de Processos",
    description: "Sistema de automação de fluxos de trabalho com triggers, actions e webhooks para integração entre diferentes plataformas.",
    tech: ["TypeScript", "Bull", "Redis", "PostgreSQL"],
    image: "/placeholder.svg?height=300&width=500",
    demo: "#",
    github: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-24 px-6 md:px-12 lg:px-24 bg-card/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-4">Portfólio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projetos Recentes
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cases de sucesso que demonstram minha capacidade de transformar problemas complexos em soluções elegantes.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-muted-foreground/30">{project.title.charAt(0)}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" asChild className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
