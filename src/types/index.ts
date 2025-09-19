export interface Project {
  id: string
  title: string
  category: 'software' | 'embedded'
  description: string
  longDescription: string
  technologies: string[]
  achievements: string[]
  links: {
    demo?: string
    github?: string
    documentation?: string
  }
  image: string
  featured: boolean
}

export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
  logo?: string
}

export interface Skill {
  name: string
  category: 'languages' | 'software' | 'embedded' | 'tools'
  proficiency: number // 1-5 scale
  icon?: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}
