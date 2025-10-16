import React from "react";
import { Link } from "react-router-dom"; // Ak používaš React Router

const ProjectCard = () => {
  const image = "/images/sample-project.jpg"; // Cesta k tvojmu obrázku
  const title = "Sample Project";             // Názov projektu
  const link = "https://example.com";         // Kam to má presmerovať

  return (
    <Link
      to={link}
      className="group block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]"
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-semibold mt-3 text-[var(--accent-green)] text-center">
        {title}
      </h3>
    </Link>
  );
};

export default ProjectCard;
