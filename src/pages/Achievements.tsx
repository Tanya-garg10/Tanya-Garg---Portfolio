import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, Trophy, Award, BookOpen, Star, Medal } from "lucide-react";

const achievementCategories = [
    {
        title: "🎓 Internships & Experience",
        icon: Briefcase,
        color: "from-blue-500 to-cyan-500",
        items: [
            {
                title: "Data Science Intern — Enginow",
                description: "Worked on end-to-end ML projects: Customer Churn Prediction, Sales Forecasting (Time Series + Dashboard), and Credit Risk & Loan Default Prediction (FinTech).",
                highlight: "End-to-end ML Projects"
            },
            {
                title: "Frontend Developer Intern — SynapseIT Solution",
                description: "Starting 5 March 2026. Focus on real-world web applications, frontend skills, collaboration, and industry practices.",
                highlight: "Selected"
            },
            {
                title: "Web Developer Intern (Core Team) — TechMNHub",
                description: "3 months project-based internship. Building live projects and strengthening web development + teamwork skills.",
                highlight: "Core Team"
            }
        ]
    },
    {
        title: "🏆 Awards & Rankings",
        icon: Trophy,
        color: "from-yellow-500 to-orange-500",
        items: [
            {
                title: "1st Place — Prajwalan 2025",
                description: "DSA & Competitive Programming Challenge. Ranked #1 out of 1254 participants; received Gold Certificate of Excellence and featured on Instagram.",
                highlight: "Rank #1/1254"
            },
            {
                title: "2nd Place — Socio-Tech Insight National Case Study",
                description: 'Team: Creative Chaos. Proposed "UDAAN CONNECT — AI Donor Engagement Chatbot" for NGO donor engagement.',
                highlight: "National Level"
            },
            {
                title: "First Runner-Up — Social Ideate (IBS Mumbai)",
                description: "National Case Study Competition competing across a national pool (305+ participants).",
                highlight: "305+ Participants"
            },
            {
                title: "3rd Prize — FIN-STARS 2025",
                description: "E-Cell MNNIT Allahabad. Strategy + financial modeling competition (Risk-to-Riches theme).",
                highlight: "MNNIT Allahabad"
            },
            {
                title: "2nd Place — PM Ready Case Competition 2025",
                description: "Built LocalVibe, an AI-powered hyper-local experience app concept.",
                highlight: "AI Product Design"
            }
        ]
    },
    {
        title: "🧠 Quizzes & Recognitions",
        icon: Medal,
        color: "from-purple-500 to-pink-500",
        items: [
            {
                title: "2nd Rank — Nerds AI Quest 1.0 (Unstop)",
                description: "AI Fundamentals quiz competition.",
                highlight: "AI Expertise"
            },
            {
                title: "1st Place — Networking Cheat Codes",
                description: "Post Webinar Quiz on Unstop.",
                highlight: "Winner"
            },
            {
                title: "Winner — Stock Quiz by StockFox",
                description: "Financial markets and stock trading quiz.",
                highlight: "Finance Knowledge"
            },
            {
                title: "Top 3 Best Comment Winners",
                description: "Goodies Giveaway Task + Invite to BuildX Hackathon (NSUT).",
                highlight: "NSUT Hackathon"
            },
            {
                title: "Top 3 Posts — Elite Coders Winter of Code",
                description: "Swag Winners for outstanding contributions.",
                highlight: "Open Source"
            },
            {
                title: "Gold & Silver Medals + Cash Prizes",
                description: "Financopedia Contest by Aquilae Technologies.",
                highlight: "Multiple Awards"
            }
        ]
    },
    {
        title: "✍️ Publication & Creative",
        icon: BookOpen,
        color: "from-green-500 to-emerald-500",
        items: [
            {
                title: "Co-author — When the Calendar Turns – Volume 3",
                description: "Featured as a published co-author in this anthology.",
                highlight: "Published Author"
            }
        ]
    }
];

const Achievements = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="pt-24 pb-16"
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            Achievements & <span className="text-gradient">Recognition</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            A journey of continuous learning, competitions, and professional growth
                        </p>
                    </motion.div>

                    <div className="space-y-12 max-w-6xl mx-auto">
                        {achievementCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                                        <category.icon className="text-white" size={20} />
                                    </div>
                                    <h2 className="text-2xl font-bold">{category.title}</h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {category.items.map((item, itemIndex) => (
                                        <motion.div
                                            key={itemIndex}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: categoryIndex * 0.2 + itemIndex * 0.1 }}
                                            className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-hover"
                                        >
                                            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                            <div className="relative">
                                                <div className="flex items-start justify-between mb-3">
                                                    <h3 className="text-lg font-semibold pr-2">{item.title}</h3>
                                                    <span className="px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary whitespace-nowrap">
                                                        {item.highlight}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="mt-16 text-center"
                    >
                        <div className="inline-flex items-center gap-2 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                            <Star className="text-primary" size={24} />
                            <p className="text-lg font-semibold">Continuously striving for excellence and new challenges</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            <Footer />
        </div>
    );
};

export default Achievements;
