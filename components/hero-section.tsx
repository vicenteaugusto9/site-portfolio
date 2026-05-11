"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Github, Linkedin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlexusBackground } from "@/components/PlexusBackgroud"

const rotatingWords = [
  "Sistemas SaaS",
  "Aplicações Web",
  "Automação",
  "APIs Robustas",
  "Integrações",
]

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-start md:justify-center items-center relative overflow-hidden py-16 sm:py-24">
      <PlexusBackground />
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="container px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden sm:block text-primary font-mono text-sm md:text-base mb-6 tracking-wider"
          >
            Desenvolvedor Full-Stack | Pronto para torna sua ideia em realidade 
          </motion.p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            <span className="text-balance">BEM-VINDO AO MEU</span>
            <br />
            <span className="text-primary">PORTFÓLIO</span>
          </h1>
          
          <div className="h-16 md:h-20 flex items-center justify-center mb-8">
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
              Especialista em{" "}
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-primary font-semibold inline-block"
              >
                {rotatingWords[currentWordIndex]}
              </motion.span>
            </p>
          </div>

          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Desenvolvedor Full-Stack focado no ecossistema TypeScript. 
            Transformando fluxos complexos em interfaces eficientes e soluções que escalam.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <Button size="lg" asChild className="font-medium px-8">
              <a href="#contato">Entrar em contato</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="font-medium">
              <a href="https://github.com/vicenteaugusto9" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="font-medium">
              <a href="https://www.linkedin.com/in/vicenteaugusto/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mt-8"
        >
          {[
            { value: "2+", label: "Anos de experiência" },
            { value: "15+", label: "Projetos concluídos" },
            { value: "5+", label: "Clientes atendidos" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#sobre" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs mb-2 font-mono">Scroll down</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
