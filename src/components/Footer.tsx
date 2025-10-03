'use client'

import { motion } from 'framer-motion'
import { Github, Mail, MessageCircle, Music, Instagram, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/cheyza',
      color: 'hover:text-gray-300'
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      url: 'https://discord.com/users/cheyza',
      color: 'hover:text-indigo-400'
    },
    {
      name: 'Spotify',
      icon: Music,
      url: 'https://open.spotify.com/user/cheyza',
      color: 'hover:text-green-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/cheyza',
      color: 'hover:text-pink-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:cheyza@example.com',
      color: 'hover:text-red-400'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <motion.button
              onClick={scrollToTop}
              className="text-2xl font-bold gradient-text mb-4 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cheyza
            </motion.button>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer olarak modern web teknolojileri ile 
              kullanıcı dostu uygulamalar geliştiriyorum.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              Hızlı Linkler
            </h3>
            <ul className="space-y-2">
              {['Ana Sayfa', 'Hakkımda', 'Yetenekler', 'Projeler', 'İletişim'].map((link, index) => (
                <li key={link}>
                  <motion.button
                    onClick={() => {
                      const sectionId = link === 'Ana Sayfa' ? '#hero' : `#${link.toLowerCase()}`
                      const element = document.querySelector(sectionId)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              Sosyal Medya
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-primary-500/50 transition-all duration-300 ${social.color}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm flex items-center">
              © {currentYear} Cheyza. Tüm hakları saklıdır.
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>by Cheyza</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
