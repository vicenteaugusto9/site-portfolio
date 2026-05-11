"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Github, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  { icon: Phone, label: "Telefone", value: "(85) 9 9659-5927" },
  { icon: Mail, label: "Email", value: "gomezzdev@gmail.com" },
  { icon: MapPin, label: "Localização", value: "Fortaleza, CE" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/vicenteaugusto9", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/vicenteaugusto/", label: "LinkedIn" },
]

export function ContactSection() {
  return (
    <section id="contato" className="py-24 px-6 md:px-12 lg:px-24 bg-card/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-4">Fale comigo</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em contato
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tem um projeto em mente? Vamos conversar sobre como posso ajudar a transformar sua ideia em realidade.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Siga-me nas redes sociais</p>
              <div className="flex gap-4">
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

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30"
            >
              <h3 className="text-lg font-bold text-foreground mb-2">
                Tem um novo projeto?
              </h3>
              <p className="text-sm text-muted-foreground">
                Entre em contato agora e vamos discutir como posso ajudar a construir a solução ideal para o seu negócio.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-6 p-8 rounded-xl bg-card border border-border">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nome / Empresa
                  </label>
                  <Input id="name" placeholder="Seu nome ou empresa" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Assunto
                </label>
                <Input id="subject" placeholder="Sobre o que deseja falar?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Descreva seu projeto ou dúvida..."
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                <Send className="mr-2 h-4 w-4" />
                Enviar mensagem
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
