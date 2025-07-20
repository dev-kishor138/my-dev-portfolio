import "./Skills.css"
import SectionHeader from "../global/SectionHeader";
import { Icon } from "@iconify/react/dist/iconify.js";

const Skills = () => {
    const skillsData = [
        {
            category: "Frontend",
            items: [
                { name: "React", level: "Expert", icon: "cib:react" },
                { name: "Tailwind", level: "Expert", icon: "hugeicons:tailwindcss" },
                { name: "Redux", level: "Intermediate", icon: "akar-icons:redux-fill" },
                { name: "Next.js", level: "Intermediate", icon: "teenyicons:nextjs-outline" },
                { name: "Bootstrap", level: "Expert", icon: "hugeicons:bootstrap" },
                { name: "Material UI", level: "Intermediate", icon: "mdi:material-ui" },
            ],
        },
        {
            category: "Backend",
            items: [
                { name: "Laravel", level: "Expert", icon: "mdi:laravel" },
                { name: "MongoDB", level: "Basic", icon: "simple-icons:mongodb" },
                { name: "Express", level: "Basic", icon: "simple-icons:express" },
                { name: "Firebase", level: "Basic", icon: "teenyicons:firebase-outline" },
                { name: "Node.js", level: "Basic", icon: "akar-icons:node-fill" },
                { name: "MySQL", level: "Basic", icon: "lineicons:mysql" },
                { name: "PostgreSQL", level: "Basic", icon: "simple-icons:postgresql" },
                { name: "RESTful APIs", level: "Basic", icon: "hugeicons:api" },
                { name: "Prisma", level: "Basic", icon: "simple-icons:prisma" }
            ],
        },
        {
            category: "Languages",
            items: [
                { name: "JavaScript", level: "Expert", icon: "akar-icons:javascript-fill" },
                { name: "PHP", level: "Expert", icon: "cib:php" },
                { name: "C", level: "Familiar", icon: "streamline-logos:c-language-logo-solid" },
                { name: "C++", level: "Familiar", icon: "streamline-logos:c-plus-language-logo-solid" },
                { name: "Java", level: "Familiar", icon: "cib:java" },
                { name: "Python", level: "Familiar", icon: "cib:python" },
            ],
        },
        {
            category: "Tools",
            items: [
                { name: "GitHub", level: "Expert", icon: "akar-icons:github-fill" },
                { name: "Netlify", level: "Intermediate", icon: "simple-icons:netlify" },
                { name: "VS Code", level: "Expert", icon: "akar-icons:vscode-fill" },
                { name: "Vercel", level: "Intermediate", icon: "simple-icons:vercel" },
                { name: "Git", level: "Expert", icon: "cib:git" },
                { name: "XAMPP", level: "Intermediate", icon: "simple-icons:xampp" },
                { name: "Postman", level: "Intermediate", icon: "cib:postman" },
                { name: "Figma", level: "Basic", icon: "cib:figma" },
                { name: "ESLint", level: "Basic", icon: "simple-icons:eslint" },
                { name: "Vite", level: "Basic", icon: "simple-icons:vite" },
                { name: "Jira", level: "Basic", icon: "cib:jira" }
            ],
        },
    ];
    return (
        <section className="skills container section" id="skills">
            <SectionHeader title="Skills" subTitle="My Technical level" />

            <div className="skills-container grid">
                {skillsData.map((skillCategory, index) => (
                    <div key={index} className="skills-content">
                        <h3 className="skills-title">{skillCategory.category}</h3>
                        <div className="skills-box">
                            {skillCategory.items.map((skill, idx) => (
                                <div key={idx} className="skills-card">
                                    <span className="dev-icons">
                                        <Icon icon={skill.icon} />
                                    </span>
                                    <h3 className="skills-name">{skill.name}</h3>
                                    {/* <span className="skills-level">{skill.level}</span> */}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;