'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  {
    name: 'Next.js / React',
    percentage: 100,
    description: 'Mükemmel seviyede deneyim',
    color: 'from-white to-gray-300'
  },
  {
    name: 'Node.js',
    percentage: 100,
    description: 'Mükemmel seviyede deneyim',
    color: 'from-white to-gray-300'
  },
  {
    name: 'Python',
    percentage: 45,
    description: 'İyi seviyede deneyim',
    color: 'from-white to-gray-300'
  },
  {
    name: 'PHP',
    percentage: 30,
    description: 'Temel seviyede bilgi',
    color: 'from-white to-gray-300'
  }
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Yeteneklerim
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="bg-gray-800/50 p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300 group"
              whileHover={{ 
                y: -10, 
                scale: 1.05, 
                rotateX: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {skill.name}
                </h3>
                <span className="text-primary-500 font-bold">
                  {skill.percentage}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                  />
                </div>
              </div>

              <p className="text-gray-400 text-sm">
                {skill.description}
              </p>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 max-w-2xl mx-auto">
            <p className="text-gray-300 italic">
              "Her gün yeni bir şey öğrenmeye devam ediyorum. Teknoloji dünyası 
              sürekli gelişiyor ve ben de bu gelişime ayak uydurmaya çalışıyorum."
            </p>
            <div className="mt-4 text-sm text-gray-500">
              — Cheyza
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
