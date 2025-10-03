'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Bot, Server, Target } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: Code,
      title: 'Web Geliştirme',
      description: 'Modern web teknolojileri ile kullanıcı dostu uygulamalar'
    },
    {
      icon: Bot,
      title: 'Discord Botları',
      description: 'Discord için özel botlar ve otomasyonlar'
    },
    {
      icon: Server,
      title: 'Backend Geliştirme',
      description: 'Güvenli ve ölçeklenebilir sunucu uygulamaları'
    },
    {
      icon: Target,
      title: 'Hedef Odaklı',
      description: 'Her projede mükemmellik için çalışıyorum'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Hakkımda
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Merhaba, ben <span className="gradient-text">Cheyza</span>
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
              <p>
                Web ve Discord botları geliştiriyorum. Şu an React ve Next.js öğreniyorum, 
                backend tarafında kendimi geliştirmeye çalışıyorum.
              </p>
              <p>
                Amacım kullanıcı dostu, performanslı web uygulamaları yapabilmek ve 
                bunları paylaşmak. Her proje benim için yeni bir öğrenme fırsatı.
              </p>
              <p>
                Teknoloji dünyasında sürekli gelişen bir alan olduğunu biliyorum ve 
                bu yüzden her gün yeni şeyler öğrenmeye devam ediyorum.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 sm:gap-6 mt-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">2+</div>
                <div className="text-sm text-gray-400">Tamamlanan Proje</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">6+</div>
                <div className="text-sm text-gray-400">Ay Tecrübe</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: -15 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease: "easeOut" }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300 group"
              whileHover={{ 
                y: -8, 
                scale: 1.03, 
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
                <feature.icon className="w-8 h-8 text-primary-500 mb-4 group-hover:text-secondary-500 transition-colors duration-300" />
                <h4 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
