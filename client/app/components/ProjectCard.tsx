import { Link } from 'react-router';
import type { Project } from '~/routes/models/types';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      className="flex flex-col w-full h-full transform transition duration-300 hover:scale-[1.02]"
      to={`/projects/${project.documentId}`}
    >
      <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-sm transition hover:shadow-md flex flex-col w-full h-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full object-cover h-40"
        />
        <div className="p-5 flex flex-col flex-1 justify-between">
          <div>
            <h3 className="text-3xl font-semibold text-blue-400 mb-1 ">
              {project.title}
            </h3>
            <p className="text-sm text-gray-300 mb-2">{project.description}</p>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-400 mt-2">
            <span>{project.category}</span>
            <span>{project.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
