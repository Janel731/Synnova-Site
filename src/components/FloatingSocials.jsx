import { FaFacebook, FaTiktok, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FloatingSocials = () => {
  const socials = [
    { 
      id: 1, 
      name: 'Facebook', 
      icon: <FaFacebook size={36} />, 
      color: '#1877F2', 
      link: 'https://facebook.com/synnovalumiere' 
    },
    { 
      id: 2, 
      name: 'TikTok', 
      icon: <FaTiktok size={36} />, 
      color: '#00F2EA', 
      link: 'https://tiktok.com/@_synnova' 
    },
    { 
      id: 3, 
      name: 'LinkedIn', 
      icon: <FaLinkedin size={36} />, 
      color: '#1A237E', 
      link: 'https://bj.linkedin.com/in/synnova-belvine-kybarance-tocloe-3882a9232' 
    },
    { 
      id: 4, 
      name: 'Instagram', 
      icon: <FaInstagram size={36} />, 
      color: '#C2185B', 
      link: 'https://instagram.com/_synnova' 
    }
  ];

  return (
    <section className="hero-section-dark py-20 md:py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-5xl md:text-7xl font-cormorant-bold-italic text-[#FAFAFA]">
            Restons <span className="text-[#F9A825]">connectés</span>
          </h2>
          <div className="w-20 h-1 bg-[#F8BBD0] mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
          {socials.map((social, index) => {
            const angle = (index / socials.length) * 360;
            const radius = 160;
            
            return (
              <motion.a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute flex items-center justify-center w-20 h-20 rounded-full cursor-pointer hover:scale-125 transition-transform"
                style={{ 
                  backgroundColor: social.color,
                  boxShadow: `0 0 30px ${social.color}40`
                }}
                animate={{
                  x: Math.cos(angle * Math.PI / 180) * radius,
                  y: Math.sin(angle * Math.PI / 180) * radius,
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 6 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  rotate: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ scale: 1.3 }}
              >
                <span className="text-white">{social.icon}</span>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FloatingSocials;