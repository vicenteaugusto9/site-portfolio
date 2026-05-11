"use client"

import { motion } from "framer-motion"
import { Server, Database, Layout, Code2, Workflow, Cloud } from "lucide-react"

const services = [
  {
    icon: Layout,
    title: "Desenvolvimento Web",
    subtitle: "Frontend & UI/UX",
    items: [
      "Landing Pages",
      "Aplicações Web",
      "Dashboards",
      "E-commerce",
      "Design Responsivo",
    ],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    subtitle: "Servidor & Lógica",
    items: [
      "APIs RESTful",
      "Autenticação JWT",
      "Integrações",
      "Microserviços",
      "WebSockets",
    ],
  },
  {
    icon: Database,
    title: "Banco de Dados",
    subtitle: "Modelagem & Queries",
    items: [
      "PostgreSQL",
      "Modelagem de Dados",
      "Otimização de Queries",
      "Migrations",
      "Backups",
    ],
  },
  {
    icon: Code2,
    title: "Sistemas SaaS",
    subtitle: "Multi-Tenant",
    items: [
      "Arquitetura Multi-Tenant",
      "Isolamento de Dados",
      "Billing Integration",
      "Dashboards Admin",
      "Analytics",
    ],
  },
  {
    icon: Workflow,
    title: "Automação",
    subtitle: "Processos & Integrações",
    items: [
      "Automação de Tarefas",
      "Integração de Sistemas",
      "Webhooks",
      "Jobs Agendados",
      "ETL Pipelines",
    ],
  },
  {
    icon: Cloud,
    title: "DevOps",
    subtitle: "Deploy & Infraestrutura",
    items: [
      "CI/CD Pipelines",
      "Docker",
      "Vercel / AWS",
      "Monitoramento",
      "SSL / Segurança",
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-4">Nossos Serviços</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que eu faço
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Confira as especialidades e serviços que ofereço para transformar suas ideias em realidade.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-primary font-mono">{service.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
