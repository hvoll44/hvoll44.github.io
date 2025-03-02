"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Github, Linkedin, Mail, Moon, Sun, Twitter, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
    },
    project: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: "#7c3aed",
      mixBlendMode: "difference" as any,
    },
  }

  const enterProject = () => setCursorVariant("project")
  const leaveProject = () => setCursorVariant("default")

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block"
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        style={{
          backgroundColor: darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
        }}
      />

      <header className="fixed top-0 w-full z-40 backdrop-blur-sm bg-background/80 border-b">
        <div className="container flex justify-between items-center h-16">
          <Link href="#" className="text-xl font-bold flex items-center gap-2">
            <Code className="h-6 w-6" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">DevName</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle dark mode">
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20" />
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-primary/20"
                initial={{
                  x: Math.random() * 100 - 50 + "%",
                  y: Math.random() * 100 - 50 + "%",
                  scale: Math.random() * 0.5 + 0.5,
                  opacity: Math.random() * 0.5 + 0.25,
                }}
                animate={{
                  x: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
                  y: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: Math.random() * 20 + 20,
                  ease: "linear",
                }}
                style={{
                  width: Math.random() * 300 + 50,
                  height: Math.random() * 300 + 50,
                  filter: "blur(40px)",
                }}
              />
            ))}
          </div>

          <div className="container px-4 md:px-6 flex flex-col items-center text-center z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge className="mb-4 text-sm py-1 px-3">Full-Stack Developer</Badge>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hi, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                DevName
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I build exceptional digital experiences that live at the intersection of design and technology.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button asChild size="lg" className="gap-2">
                <Link href="#projects">
                  <Zap className="h-4 w-4" />
                  View My Work
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </motion.div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
              <span className="sr-only">Scroll down</span>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 relative">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl border-8 border-background shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Developer portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl p-4 shadow-lg border">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center p-2 bg-muted rounded-lg">
                      <div className="text-3xl font-bold">5+</div>
                      <div className="text-xs text-muted-foreground">Years Exp</div>
                    </div>
                    <div className="text-center p-2 bg-muted rounded-lg">
                      <div className="text-3xl font-bold">50+</div>
                      <div className="text-xs text-muted-foreground">Projects</div>
                    </div>
                    <div className="text-center p-2 bg-muted rounded-lg">
                      <div className="text-3xl font-bold">20+</div>
                      <div className="text-xs text-muted-foreground">Clients</div>
                    </div>
                    <div className="text-center p-2 bg-muted rounded-lg">
                      <div className="text-3xl font-bold">10+</div>
                      <div className="text-xs text-muted-foreground">Awards</div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">About Me</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  I'm a passionate full-stack developer with a love for creating beautiful, functional, and
                  user-friendly applications. With over 5 years of experience in web development, I specialize in
                  building modern web applications using the latest technologies.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or enjoying outdoor activities. I believe in continuous learning and pushing the boundaries of what's
                  possible with code.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild variant="outline" className="gap-2">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-4 w-4" />
                      Twitter
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 md:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <motion.h2
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                My Tech Stack
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                I work with a variety of technologies to create powerful and scalable applications.
              </motion.p>
            </div>

            <Tabs defaultValue="frontend" className="w-full max-w-[800px] mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-12">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="tools">Tools & Others</TabsTrigger>
              </TabsList>
              <TabsContent value="frontend" className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {[
                    { name: "React", icon: "⚛️" },
                    { name: "Next.js", icon: "▲" },
                    { name: "TypeScript", icon: "TS" },
                    { name: "JavaScript", icon: "JS" },
                    { name: "HTML5", icon: "🌐" },
                    { name: "CSS3", icon: "🎨" },
                    { name: "Tailwind CSS", icon: "🌊" },
                    { name: "Redux", icon: "🔄" },
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Card className="overflow-hidden h-full cursor-pointer hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                                <div className="text-3xl mb-2">{skill.icon}</div>
                                <h3 className="font-medium">{skill.name}</h3>
                              </CardContent>
                            </Card>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Expert in {skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="backend" className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {[
                    { name: "Node.js", icon: "🟢" },
                    { name: "Express", icon: "🚂" },
                    { name: "MongoDB", icon: "🍃" },
                    { name: "PostgreSQL", icon: "🐘" },
                    { name: "GraphQL", icon: "⬢" },
                    { name: "Firebase", icon: "🔥" },
                    { name: "REST API", icon: "🔄" },
                    { name: "Prisma", icon: "◭" },
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Card className="overflow-hidden h-full cursor-pointer hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                                <div className="text-3xl mb-2">{skill.icon}</div>
                                <h3 className="font-medium">{skill.name}</h3>
                              </CardContent>
                            </Card>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Proficient in {skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="tools" className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {[
                    { name: "Git", icon: "🔄" },
                    { name: "Docker", icon: "🐳" },
                    { name: "AWS", icon: "☁️" },
                    { name: "Vercel", icon: "▲" },
                    { name: "Figma", icon: "🎨" },
                    { name: "Jest", icon: "🃏" },
                    { name: "CI/CD", icon: "🔄" },
                    { name: "VS Code", icon: "📝" },
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Card className="overflow-hidden h-full cursor-pointer hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                                <div className="text-3xl mb-2">{skill.icon}</div>
                                <h3 className="font-medium">{skill.name}</h3>
                              </CardContent>
                            </Card>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Experienced with {skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <motion.h2
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Featured Projects
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Here are some of my recent projects that showcase my skills and expertise.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-Commerce Platform",
                  description:
                    "A full-featured e-commerce platform with payment processing, user authentication, and admin dashboard.",
                  tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "Social Media Dashboard",
                  description:
                    "A comprehensive dashboard for social media analytics with real-time data visualization.",
                  tags: ["React", "D3.js", "Firebase", "Material UI"],
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "Task Management App",
                  description: "A collaborative task management application with real-time updates and team features.",
                  tags: ["React", "Node.js", "Socket.io", "MongoDB"],
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "Fitness Tracking App",
                  description:
                    "A mobile-first fitness tracking application with workout plans and progress visualization.",
                  tags: ["React Native", "GraphQL", "AWS", "Chart.js"],
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "Recipe Sharing Platform",
                  description: "A community-driven recipe sharing platform with search, filtering, and user profiles.",
                  tags: ["Vue.js", "Express", "PostgreSQL", "Cloudinary"],
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "Real Estate Listing Site",
                  description: "A real estate listing site with advanced search, filtering, and map integration.",
                  tags: ["Next.js", "Prisma", "Google Maps API", "Tailwind CSS"],
                  image: "/placeholder.svg?height=400&width=600",
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={enterProject}
                  onMouseLeave={leaveProject}
                  className="group"
                >
                  <Card className="overflow-hidden h-full border-2 hover:border-primary transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button className="scale-0 group-hover:scale-100 transition-transform duration-300">
                          View Project
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  View All Projects
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                  Let's Work Together
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Have a project in mind or just want to say hello? Feel free to reach out to me. I'm always open to
                  discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">hello@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <p className="text-muted-foreground">linkedin.com/in/devname</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <p className="text-muted-foreground">github.com/devname</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Send Me a Message</h3>
                      <p className="text-muted-foreground">I'll get back to you as soon as possible.</p>
                    </div>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <input
                            id="name"
                            placeholder="Your name"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="Your email"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <input
                          id="subject"
                          placeholder="Subject"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          placeholder="Your message"
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                DevName
              </span>
            </div>
            <div className="flex gap-4">
              <Button asChild variant="ghost" size="icon">
                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevName. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

