import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code2, Brain, Wrench, Database, Globe, Palette } from "lucide-react";

const skillCategories = [
    {
        icon: Code2,
        title: "Programming Languages",
        color: "from-blue-500 to-cyan-500",
        skills: ["Python", "TypeScript", "JavaScript", "HTML5", "CSS3", "PHP", "SQL"]
    },
    {
        icon: Brain,
        title: "AI & Machine Learning",
        color: "from-purple-500 to-pink-500",
        skills: ["Machine Learning", "Generative AI", "Multimodal AI", "Natural Language Processing", "Computer Vision", "Time Series Forecasting", "Deep Learning"]
    },
    {
        icon: Wrench,
        title: "Frameworks & Libraries",
        color: "from-orange-500 to-red-500",
        skills: ["React", "Node.js", "Streamlit", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV"]
    },
    {
        icon: Database,
        title: "Databases & Cloud",
        color: "from-green-500 to-emerald-500",
        skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "AWS", "Docker", "Redis"]
    },
    {
        icon: Globe,
        title: "Web Technologies",
        color: "from-indigo-500 to-blue-500",
        skills: ["REST APIs", "GraphQL", "WebSockets", "Tailwind CSS", "Bootstrap", "Responsive Design", "Progressive Web Apps"]
    },
    {
        icon: Palette,
        title: "Tools & Platforms",
        color: "from-yellow-500 to-orange-500",
        skills: ["Git/GitHub", "VS Code", "Jupyter", "Postman", "Figma", "Linux", "CI/CD"]
    }
];

const Skills = () => {
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
                            Technical <span className="text-gradient">Skills</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            A comprehensive overview of my technical expertise and tools I work with
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-hover"
                            >
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                <div className="relative">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <category.icon className="text-white" size={24} />
                                    </div>

                                    <h3 className="text-xl font-semibold mb-4">{category.title}</h3>

                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-16 text-center"
                    >
                        <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                            <p className="text-sm text-muted-foreground mb-2">Always Learning</p>
                            <p className="text-lg font-semibold">Continuously expanding my skillset with emerging technologies</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            <Footer />
        </div>
    );
};

export default Skills;
