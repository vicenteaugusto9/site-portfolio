"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Target, Code2 } from "lucide-react"

const timeline = [
  {
    icon: GraduationCap,
    title: "Engenharia de Software",
    description: "Formação sólida em fundamentos de computação, arquitetura de sistemas e boas práticas de desenvolvimento.",
    period: "Em andamento",
  },
  {
    icon: Briefcase,
    title: "Desenvolvedor Full-Stack",
    description: "Experiência prática construindo sistemas completos, desde a arquitetura até o deploy em produção.",
    period: "2+ anos",
  },
  {
    icon: Code2,
    title: "Especialista TypeScript",
    description: "Foco no ecossistema TypeScript, criando aplicações type-safe e com alta qualidade de código.",
    period: "Especialização",
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Capacidade de equilibrar múltiplos projetos e responsabilidades, sempre entregando valor ao negócio.",
    period: "Constante",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-0 sm:px-4"
        >
          <p className="text-primary font-mono text-sm mb-4">Saiba mais</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre quem eu sou
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma jornada de evolução constante no universo do desenvolvimento de software, 
            sempre buscando transformar problemas complexos em soluções elegantes.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative w-full min-w-0 p-5 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0 mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground break-words">{item.title}</h3>
                    <span className="text-xs font-mono text-primary px-2 py-1 bg-primary/10 rounded self-start sm:self-center whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed break-words">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 sm:p-8 rounded-xl border border-primary/30 bg-gradient-to-r from-primary/5 to-transparent"
        >
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            {'"'}Meu diferencial não é apenas saber codar, mas entender o{" "}
            <span className="text-primary font-medium">ciclo de vida de um software</span> — do estoque de uma 
            empresa ao gerenciamento de uma clínica. Acredito que a verdadeira maestria está em transformar 
            problemas de negócio em soluções técnicas elegantes e escaláveis.{'"'}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
