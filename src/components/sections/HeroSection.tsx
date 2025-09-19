import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail } from 'lucide-react'

export function HeroSection() {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  const titles = [
    'Computer Engineering Student',
    'Full-Stack Developer',
    'Embedded Systems Engineer',
  ]

  const currentTitle = titles[currentIndex]

  useEffect(() => {
    if (displayText.length < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        if (currentIndex < titles.length - 1) {
          setDisplayText('')
          setCurrentIndex(currentIndex + 1)
        } else {
          setIsTypingComplete(true)
        }
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [displayText, currentTitle, currentIndex, titles.length])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-50 via-neutral-50 to-secondary-50"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10" />

      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6">
            Bryan Kuang
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="h-16 sm:h-20 flex items-center justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-primary-600 min-h-[1.2em]">
              {displayText}
              <span
                className={`inline-block w-0.5 h-8 sm:h-10 bg-secondary-500 ml-1 ${
                  isTypingComplete ? 'animate-pulse' : 'animate-pulse'
                }`}
              />
            </h2>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="text-lg sm:text-xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Passionate about creating innovative solutions across software
          development and embedded systems. Currently pursuing Computer
          Engineering at University of Waterloo with hands-on experience in
          full-stack development and microcontroller programming.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg 
                     hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 
                     hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary-300
                     min-w-[200px] sm:min-w-0"
          >
            <span className="flex items-center justify-center gap-2">
              View Projects
              <Download className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>

          <button
            onClick={scrollToContact}
            className="group relative px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold 
                     rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 
                     transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 
                     focus:ring-primary-300 min-w-[200px] sm:min-w-0"
          >
            <span className="flex items-center justify-center gap-2">
              Contact Me
              <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => {
              const aboutSection = document.getElementById('about')
              aboutSection?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span className="text-sm text-neutral-500 mb-2 group-hover:text-primary-600 transition-colors duration-300">
              Scroll to explore
            </span>
            <ChevronDown className="w-6 h-6 text-neutral-400 group-hover:text-primary-600 transition-colors duration-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
