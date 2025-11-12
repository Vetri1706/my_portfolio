export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "C++"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Streamlit"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Firebase", "GitHub Actions"],
  },
  {
    category: "Game Tools",
    items: ["Unreal Engine 5", "Blender"],
  },
  {
    category: "Others",
    items: ["Figma", "VS Code", "Postman"],
  },
];
