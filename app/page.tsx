"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Mail, Phone, ArrowRight, ExternalLink, Code, Database, Server, Layers } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    const sections = [
      heroRef.current,
      aboutRef.current,
      experienceRef.current,
      skillsRef.current,
      projectsRef.current,
      educationRef.current,
      contactRef.current,
    ]

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  const skillCategories = [
    {
      name: "Frontend",
      icon: <Code className="h-6 w-6" />,
      skills: ["Angular", "Blazor", "HTML/CSS", "JavaScript", "TypeScript", "Responsive Design"],
    },
    {
      name: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: ["C#", "ASP.NET", "Python", "Java", "REST APIs", "Microservices"],
    },
    {
      name: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["SQL Server", "Entity Framework", "SQLite", "Database Design", "Stored Procedures"],
    },
    {
      name: "DevOps & Cloud",
      icon: <Layers className="h-6 w-6" />,
      skills: ["Azure", "AWS", "CI/CD", "Git", "Agile", "Identity Platform"],
    },
  ]

  const projects = [
    {
      title: "Financial Data Processing System",
      description:
        "Developed a high-performance ETL pipeline for processing financial datasets, reducing data latency by 40%.",
      tags: ["C#", "AWS", "ETL", "Financial Services"],
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Identity Management Platform",
      description: "Built a single sign-on solution with JWT authentication for multiple software products.",
      tags: ["Identity Server", "JWT", "Azure", "Security"],
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Responsive Angular Dashboard",
      description: "Created a user-friendly interface for operational efficiency with real-time data visualization.",
      tags: ["Angular", "TypeScript", "UI/UX", "Data Visualization"],
      color: "from-red-500 to-orange-400",
    },
    {
      title: "Mobile Data Collection App",
      description: "Designed and developed a Xamarin mobile app with local SQLite storage for field data collection.",
      tags: ["Xamarin", "SQLite", "Mobile", "C#"],
      color: "from-green-500 to-emerald-400",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-gray-950/80 dark:border-gray-800">
        <div className="container flex h-16 items-center justify-between">
          <Link
            href="#hero"
            className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-primary dark:to-blue-400"
          >
            Hans Voll
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#about"
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "about" ? "text-primary" : "text-muted-foreground"}`}
            >
              About
            </Link>
            <Link
              href="#experience"
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "experience" ? "text-primary" : "text-muted-foreground"}`}
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "skills" ? "text-primary" : "text-muted-foreground"}`}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "projects" ? "text-primary" : "text-muted-foreground"}`}
            >
              Projects
            </Link>
            <Link
              href="#education"
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "education" ? "text-primary" : "text-muted-foreground"}`}
            >
              Education
            </Link>
            <Link
              href="#contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "contact" ? "text-primary" : "text-muted-foreground"}`}
            >
              Contact
            </Link>
          </nav>
          <Button asChild size="sm" className="hidden md:flex">
            <Link href="#contact">
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
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
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" ref={heroRef} className="relative w-full min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            <div className="absolute top-20 left-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300/20 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 right-40 w-72 h-72 bg-blue-300/20 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity, scale }}
            className="container relative z-10 px-4 md:px-6"
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="inline-block"
                  >
                    <Badge
                      variant="outline"
                      className="px-4 py-1 text-sm font-medium bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-primary/20 text-primary"
                    >
                      Software Developer
                    </Badge>
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
                  >
                    Hans Voll
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="max-w-[600px] text-xl text-gray-600 dark:text-gray-300"
                  >
                    Building high-performance, low-maintenance systems with a focus on scalability and user experience.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button asChild size="lg" className="group">
                    <Link href="#contact">
                      Contact Me
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="group">
                    <Link href="https://github.com/hvoll44" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                      <ExternalLink className="ml-2 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="hidden lg:flex items-center justify-center"
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-purple-600 opacity-75 blur-xl"></div>
                  <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 p-2 shadow-xl">
                    <img
                      alt="Hans Voll"
                      className="aspect-square h-full w-full rounded-lg object-cover"
                      src="/placeholder.svg?height=400&width=400"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              >
                <Link href="#about" className="flex flex-col items-center text-sm text-muted-foreground">
                  <span>Scroll Down</span>
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
                    className="h-4 w-4 mt-1"
                  >
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" ref={aboutRef} className="w-full py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-grid-gray-200/50 dark:bg-grid-gray-950/20 bg-[center_top_-1px] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
          <div className="container relative px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full px-3 py-1 text-sm bg-primary/10 text-primary mb-4">
                  About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Crafting Digital Experiences
                </h2>
              </div>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experienced engineer with a strong focus on high-performance, low-maintenance systems. Skilled in
                collaborating with Agile teams to design, develop, and support technical solutions. Proficient in
                building identity platforms in Azure and applying CI/CD techniques to enhance software development
                processes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full">
                <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Full Stack Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Building complete solutions from database design to user interfaces with a focus on performance
                      and maintainability.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Cloud Architecture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Designing and implementing scalable cloud solutions using Azure and AWS services for optimal
                      performance.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Data Engineering</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Creating efficient ETL pipelines and data processing systems to handle high-volume datasets with
                      accuracy.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          ref={experienceRef}
          className="w-full py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full px-3 py-1 text-sm bg-primary/10 text-primary mb-4">
                  Experience
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Journey</h2>
              </div>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                My career path in software development and engineering
              </p>
            </div>

            <div className="mx-auto max-w-5xl mt-16">
              <div className="space-y-12">
                <div className="relative pl-8 border-l border-gray-200 dark:border-gray-800">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold">Software Developer</h3>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        Mar 2022 - Present
                      </Badge>
                    </div>
                    <p className="text-lg text-muted-foreground">MRS BPO</p>
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                      <ul className="list-disc pl-5 space-y-3 text-gray-600 dark:text-gray-400">
                        <li>
                          Developed backend systems to handle business-critical logic, ensuring accuracy and scalability
                          for financial operations across multiple departments.
                        </li>
                        <li>
                          Designed and implemented cloud-based architectures using AWS services like Lambda, S3, Aurora,
                          and EC2, optimizing data storage and workflows.
                        </li>
                        <li>
                          Created ETL pipelines in C# to process high-volume financial datasets, reducing data latency
                          and improving reporting accuracy across business units.
                        </li>
                        <li>
                          Maintained and extended reusable code libraries, standardizing solutions and promoting
                          efficient development practices aligned with team standards.
                        </li>
                        <li>
                          Built responsive front-end applications with Angular, delivering user-friendly interfaces and
                          supporting operational efficiency.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="relative pl-8 border-l border-gray-200 dark:border-gray-800">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold">Full Stack Developer</h3>
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                        Feb 2021 - Mar 2022
                      </Badge>
                    </div>
                    <p className="text-lg text-muted-foreground">CDYNE Corp.</p>
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                      <ul className="list-disc pl-5 space-y-3 text-gray-600 dark:text-gray-400">
                        <li>
                          Designed, developed, and maintained software applications using C# and ASP.Net. Worked in full
                          stack capacity on both front end websites and back end applications.
                        </li>
                        <li>
                          Created single-page applications in Blazor and Angular. Incorporated Entity Framework on both
                          code-first and database-first projects.
                        </li>
                        <li>
                          Created and maintained databases using Microsoft SQL Server. Designed tables, wrote stored
                          procedures, created user defined types, and utilized data views.
                        </li>
                        <li>
                          Built and consumed RESTful web APIs using HTTP methods. Utilized Swagger for automated
                          documentation and Postman for testing endpoints.
                        </li>
                        <li>
                          Collaborated with team on development projects using Azure DevOps. Incorporated Git source
                          control, work tracking, and continuous integration and delivery.
                        </li>
                        <li>
                          Used Identity Server to provide single-sign-on functionality across multiple software
                          products. Used JWT Authentication with web tokens, claims, and schemes to verify access.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="relative pl-8 border-l border-gray-200 dark:border-gray-800">
                  <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1"></div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold">Geophysicist</h3>
                      <Badge variant="outline" className="bg-purple-500/10 text-purple-500 border-purple-500/20">
                        May 2017 - Jan 2021
                      </Badge>
                    </div>
                    <p className="text-lg text-muted-foreground">NAEVA Geophysics Inc.</p>
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                      <ul className="list-disc pl-5 space-y-3 text-gray-600 dark:text-gray-400">
                        <li>Automated ETL workflows with Python scripts enabling seamless flow across data sources.</li>
                        <li>
                          Designed and developed a Xamarin mobile app with local data storage functionality in SQLite.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" ref={skillsRef} className="w-full py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-200/50 dark:bg-grid-gray-950/20 bg-[center_top_-1px] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
          <div className="container relative px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full px-3 py-1 text-sm bg-primary/10 text-primary mb-4">
                  Skills
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Expertise</h2>
              </div>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A comprehensive toolkit of technologies and methodologies
              </p>
            </div>

            <div className="mx-auto max-w-5xl mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <Card
                  key={index}
                  className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-gray-200 dark:border-gray-800 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-bl-full"></div>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">{category.icon}</div>
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="flex items-center p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800"
                        >
                          <span className="text-sm font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          ref={projectsRef}
          className="w-full py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 relative"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full px-3 py-1 text-sm bg-primary/10 text-primary mb-4">
                  Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Work</h2>
              </div>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Showcasing some of my most impactful projects and solutions
              </p>
            </div>

            <div className="mx-auto max-w-6xl mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-lg"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" ref={educationRef} className="w-full py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-200/50 dark:bg-grid-gray-950/20 bg-[center_top_-1px] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
          <div className="container relative px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full px-3 py-1 text-sm bg-primary/10 text-primary mb-4">
                  Education
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Academic Background</h2>
              </div>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Educational qualifications that have shaped my professional journey
              </p>
            </div>

            <div className="mx-auto max-w-4xl mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-lg">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
                <div className="p-8">
                  <div className="mb-4 inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 p-3">
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
                      className="text-blue-600 dark:text-blue-400"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Geology (BS)</h3>
                  <p className="text-lg text-muted-foreground mb-4">Radford University</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Graduation</span>
                      <span className="text-sm font-medium">May 2017</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">GPA</span>
                      <span className="text-sm font-medium">3.6</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-lg">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-700"></div>
                <div className="p-8">
                  <div className="mb-4 inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 p-3">
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
                      className="text-purple-600 dark:text-purple-400"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Economics (BA)</h3>
                  <p className="text-lg text-muted-foreground mb-4">Metropolitan State University</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Graduation</span>
                      <span className="text-sm font-medium">May 2011</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">GPA</span>
                      <span className="text-sm font-medium">3.8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          ref={contactRef}
          className="w-full py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full px-3 py-1 text-sm bg-primary/10 text-primary mb-4">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              </div>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's connect and discuss how I can contribute to your team
              </p>
            </div>

            <div className="mx-auto max-w-4xl mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-lg">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600"></div>
                  <div className="p-8">
                    <div className="mb-6 inline-block rounded-full bg-primary/10 p-3">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Phone</h3>
                    <p className="text-xl text-primary">(719) 429-1997</p>
                    <p className="mt-4 text-sm text-muted-foreground">Feel free to call during business hours</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-lg">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
                  <div className="p-8">
                    <div className="mb-6 inline-block rounded-full bg-blue-500/10 p-3">
                      <Mail className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Email</h3>
                    <p className="text-xl text-blue-500">hvoll44@gmail.com</p>
                    <p className="mt-4 text-sm text-muted-foreground">I'll respond to your message promptly</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Button asChild size="lg" className="group">
                  <Link href="mailto:hvoll44@gmail.com">
                    Send Me a Message
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0 bg-white dark:bg-gray-950">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Hans Voll. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/hvoll44"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

