import { motion } from "framer-motion";

export default function FadeInSection({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}
