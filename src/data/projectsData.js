const projects = [
  {
    title: "My Portfolio",
    image: "/assets/Projects/images/My Portfolio.png",
    description: "This is a personal portfolio built using React and custom CSS, created to showcase the projects I've worked on, the skills I've gained, and the milestones I've achieved along the way. It reflects not just my technical growth as a developer, but also my passion for building meaningful and well-crafted user experiences.",
    techStack: [
      { name: "React", icon: "/icons/React.svg" },
      { name: "CSS", icon: "/icons/CSS.svg" },
      { name: "Vite", icon: "/icons/Vite.svg" },
      { name: "Blender", icon: "/icons/Blender.svg" },
      { name: "Three.js", icon: "/icons/Three.svg" },
      { name: "Node.js", icon: "/icons/Node.svg" },
      { name: "Express.js", icon: "/icons/Express.svg" }
]
,
    github: "https://github.com/HithaHarish/Portfolio",
  },
  {
    title: "GenAI based Data Quality Summariser",
    image: "/assets/Projects/images/DQS.jpeg",
    description: "Developed a GenAI-based Data Quality Summarizer delivering explainable quality scores for individual datasets, an integrated data quality score and actionable insights generated using a local LLM (Mistral using Ollama) with privacy-first governance achieved using metadata-only approach.",
    techStack: [
      { name:"Ollama", icon: "/icons/Ollama.svg" },
      { name: "Mistral", icon: "/icons/Mistral.svg" },
      { name: "Python", icon: "/icons/Python.svg" },
      { name: "Pandas", icon: "/icons/Pandas.svg" },
      { name: "Pandera", icon: "/icons/Pandera.svg" },
      { name: "Streamlit", icon: "/icons/Streamlit.svg" }
    ],
    github: "https://github.com/HithaHarish/VISA-AI-Hackathon",
  },
  {
    title: "AI validated Multilayered Fraud Review Detection",
    image: "/assets/Projects/images/FraudReviewDetection.png",
    description: "Achieved an accuracy >85% in building a multi-layered fraud review detection system implemented using XG Boost for classification, with analysis across textual (NLP via sentiment & embeddings), behavioral (customer and product patterns), and temporal features to predict genuine, suspicious, or fraudulent reviews. Integrated a local LLM (Phi3 via Ollama) to generate structured, evidence-based explanations aligned with top contributing features.",
    techStack: [
      { name:"Ollama", icon: "/icons/Ollama.svg" },
      { name: "Phi3", icon: "/icons/Phi3.svg" },
      { name: "Python", icon: "/icons/Python.svg" },
      { name: "Pandas", icon: "/icons/Pandas.svg" },
      { name: "XGBoost", icon: "/icons/XGBoost.svg" },
      { name : "TF-IDF Vectoriser", icon: "/icons/TFTDF.svg" },
      { name: "Streamlit", icon: "/icons/Streamlit.svg" }
    ],
    github: "https://github.com/HithaHarish/FraudReviewDetection",
  },


];

export default projects;
