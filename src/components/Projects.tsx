'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react'

const projects = [
  {
    title: 'Cheyza Portfolio',
    description: 'Modern, minimalist ve responsive portfolyo sitesi. Next.js, React ve TailwindCSS kullanılarak geliştirildi.',
    image: '/api/placeholder/400/250',
    tags: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    status: 'Tamamlandı',
    statusColor: 'bg-green-500',
    githubUrl: 'https://github.com/cheyza/portfolio',
    liveUrl: 'https://cheyza.vercel.app',
    date: '2024'
  },
  {
    title: 'Discord Bot Projesi',
    description: 'Discord sunucuları için geliştirilmiş çok amaçlı bot. Node.js ve Discord.js kullanılarak yapıldı.',
    image: '/api/placeholder/400/250',
    tags: ['Node.js', 'Discord.js', 'JavaScript'],
    status: 'Devam Ediyor',
    statusColor: 'bg-yellow-500',
    githubUrl: 'https://github.com/cheyza/discord-bot',
    liveUrl: null,
    date: '2024'
  },
  {
    title: 'Web Hosting Sitesi',
    description: 'İlk kez Front-End kullanarak yaptığım hosting projesi. Responsive tasarım ve modern UI.',
    image: '/api/placeholder/400/250',
    tags: ['HTML', 'CSS', 'JavaScript'],
    status: 'Tamamlandı',
    statusColor: 'bg-green-500',
    githubUrl: 'https://github.com/cheyza/hosting-site',
    liveUrl: 'https://hosting.cheyza.com',
    date: '2023'
  }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Projelerim
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -15 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="bg-gray-800/50 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300 group overflow-hidden"
              whileHover={{ 
                y: -12, 
                scale: 1.03, 
                rotateY: 5,
                boxShadow: "0 30px 60px rgba(0,0,0,0.5)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-900/20 to-secondary-900/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white font-semibold">{project.title}</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.date}
                  </div>
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-4 h-4 text-gray-300" />
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Ziyaret Et
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6">
            Daha fazla proje geliştirmeye devam ediyorum...
          </p>
          <motion.button
            className="px-8 py-3 bg-gray-800 text-gray-300 font-semibold rounded-full border border-gray-700 hover:border-primary-500 hover:text-primary-500 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Tüm Projeler (Yakında)
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
