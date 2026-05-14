"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, Coffee ,Instagram } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/vicenteaugusto9", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/vicenteaugusto/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:gomezzdev@gmail.com", label: "Email", subject: "Contato via Portfólio", body: "Olá Vicente, gostaria de saber mais sobre seus serviços." },
  { icon: Instagram, href: "https://www.instagram.com/vicenteaugusto9/", label: "Instagram" },
]

const footerLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
]

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border bg-card/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container max-w-6xl mx-auto"
      >
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-bold text-primary font-mono">
              {"<GomezDev />"}
            </a>
            <p className="text-sm text-muted-foreground mt-3 max-w-xs">
              Desenvolvedor Full-Stack focado no ecossistema TypeScript. 
              Transformando ideias em soluções digitais.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GomezDev. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Transformando <Coffee className="h-4 w-4 text-primary fill-primary" /> em {" "}
            <span className="text-primary">Codigo</span>
            {/* <span className="text-primary">Tailwind CSS</span> &{" "} */}
          </p>
        </div>
      </motion.div>
    </footer>
  ) 
}
