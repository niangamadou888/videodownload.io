import { motion } from "framer-motion";

type CallToActionProps = {
  buttonText: string;
  href: string;
};

export function CallToAction({ buttonText, href }: CallToActionProps) {
  return (
    <motion.div 
      className="mt-16 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.7 }}
    >
      <a 
        href={href}
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-8 py-3 text-lg font-medium text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        {buttonText}
      </a>
    </motion.div>
  );
}
