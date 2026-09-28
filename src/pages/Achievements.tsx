import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AchievementsSection from "@/components/AchievementsSection";

const Achievements = () => {
  return (
    <div className="min-h-screen bg-background grain">
      <Navbar />
      <div className="pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <AchievementsSection />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Achievements;
