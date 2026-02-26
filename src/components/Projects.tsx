import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import aidangon from "./ai.png";
import dsavisual from "./dsavisualizer.png";
import biddingImage from "./auction.jpeg";

const Projects = () => {
  const projects = [
    //project details start from here ......
    {
      title: "Online-Bidding Platform",
      description: "Full-stack online bidding website to list a product and place a bid with admin dashboard",
      technologies: ["HTML", "TAILWINDCSS", "JAVASCRIPT", "PHP", "MYSQL"],
      image: biddingImage,
      codeUrl: "https://github.com/Shreya2456/auction-system",
      liveUrl: "https://youtu.be/5k1buKATBYo",
    },
    {
      title: "AI Dungeon Master",
      description: "AI Dungeon Master is an intelligent, real-time storytelling engine that generates dynamic RPG adventures, characters, and quests based on player choices.",
      technologies: ["HTML", "TAILWINDCSS", "JAVASCRIPT","Google Gemini API"],
      image: aidangon,
      codeUrl: "https://github.com/Ram9219/AI-Dungeon-Master",
      liveUrl: "https://shreya-ai.vercel.app/",
    },
    // {
    //   title: "Efficient page replacement algorithms",
    //   description: "A project exploring various page replacement algorithms for operating systems.",
    //   technologies: ["JavaScript", "HTML", "TailwindCSS", "Chart.js"],
    //   image:  biddingImage,
    //   codeUrl: "https://github.com/Ram9219/OperatingSystem",
    //   liveUrl: "https://operating-system-chi.vercel.app/",
    // },
    {
      title: "DSA_Visualization Tool",
      description: "A web tool  which visualize all the data structures in one website.",
      technologies: ["JavaScript", "HTML", "TAILWINDCSS"],
      image:dsavisual,
      codeUrl: "https://github.com/Shreya2456/DSA_Visualization",
      liveUrl: "https://shreyadsa.vercel.app/",
    },
    // {
    //   title: "Automated Attendance System (Ongoing)",
    //   description:
    //     "Low-cost automated attendance system for rural schools — teachers can take attendance manually or by capturing a single photo of the entire class.",
    //   technologies: ["REACT", "FACERECOGNITION", "Flask"],
    //   image: ongoingImg,
    //   codeUrl: "",
    //   liveUrl: "",
    //   status: "Ongoing",
    // },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden glass-effect group hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {project.status && (
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.codeUrl ? (
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" className="flex-1" disabled>
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}

                  {project.liveUrl ? (
                    <Button asChild size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  ) : (
                    <Button size="sm" className="flex-1 bg-primary/60" disabled>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
