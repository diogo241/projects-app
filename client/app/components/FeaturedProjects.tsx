import type React from 'react';
import type { Project } from '~/routes/models/types';
import ProjectCard from './ProjectCard';

type FeaturedProjectsProps = {
  featProjects: Project[];
  limit: number;
};

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  featProjects,
  limit = 2,
}) => {
  const projects = featProjects.slice(0, limit);
  return (
    <section>
      <h2 className="text-2xl font-bold mt-12 mb-8 text-left">
        Featured Projects
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default FeaturedProjects;
