import { FaFacebook, FaTiktok, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { id: 1, icon: <FaFacebook size={20} />, link: 'https://facebook.com/synnovalumiere', label: 'Facebook' },
    { id: 2, icon: <FaTiktok size={20} />, link: 'https://tiktok.com/@_synnova', label: 'TikTok' },
    { id: 3, icon: <FaLinkedin size={20} />, link: 'https://bj.linkedin.com/in/synnova-belvine-kybarance-tocloe-3882a9232', label: 'LinkedIn' },
    { id: 4, icon: <FaInstagram size={20} />, link: 'https://instagram.com/_synnova', label: 'Instagram' }
  ];

  const quickLinks = [
    { label: 'Accueil', link: '/' },
    { label: 'À propos', link: '/about' },
    { label: 'Mes univers', link: '/univers' },
    { label: 'Portfolio', link: '/portfolio' },
    { label: 'Contact', link: '/contact' }
  ];

  const contactInfo = [
    { icon: <HiOutlineMail size={20} />, text: 'contact@synnova.com', link: 'mailto:contact@synnova.com' },
    { icon: <HiOutlinePhone size={20} />, text: '+229 00 00 00 00', link: 'tel:+22900000000' }
  ];

  return (
    <footer className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] border-t border-[rgba(249,168,37,0.15)] py-16 md:py-24 overflow-hidden relative font-outfit-bold">
      
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[rgba(194,24,91,0.05)] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[rgba(249,168,37,0.05)] blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          
          {/* Colonne 1 : Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-cormorant-bold-italic text-[#FAFAFA]">
              <span className="text-[#C2185B]">Synnova</span> TOCLOE
            </h3>
            <p className="text-[#F8BBD0]/70 text-sm leading-relaxed max-w-xs">
              Animatrice · Communicatrice · Actrice · Entrepreneuse sociale
            </p>
            <p className="text-white/40 text-xs italic">
              "Pour un monde positif"
            </p>
            
            <div className="flex gap-4 mt-6">
              {socials.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[rgba(13,17,64,0.6)] border border-[rgba(249,168,37,0.2)] flex items-center justify-center text-[#FAFAFA] hover:bg-[#C2185B] hover:border-[#C2185B] transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

         

          {/* Colonne 3 : Contact */}
          <div className="space-y-4">
            <h4 className="text-[#F9A825] font-bold text-lg uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.link}
                    className="flex items-center gap-3 text-[#FAFAFA]/70 hover:text-[#F8BBD0] transition-colors duration-300 text-sm"
                  >
                    <span className="text-[#C2185B]">{item.icon}</span>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 : Newsletter ou mention */}
          <div className="space-y-4">
            <h4 className="text-[#F9A825] font-bold text-lg uppercase tracking-wider">
              Restons connectés
            </h4>
            <p className="text-[#FAFAFA]/70 text-sm">
              Rejoignez ma communauté pour ne rien manquer de mes projets et événements.
            </p>
           
          </div>

        </div>

        {/* Séparateur */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(249,168,37,0.3)] to-transparent my-12" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            &copy; {currentYear} <span className="text-[#C2185B]">Synnova TOCLOE</span>. Tous droits réservés.
          </p>
          <p className="text-white/30 text-xs">
            Design &amp; Développement par <span className="text-[#F9A825]">Synnova</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;