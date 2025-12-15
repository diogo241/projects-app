import type { Route } from './+types/index';
import { Link } from 'react-router';
import type { Project, StrapiProject, StrapiResponse } from '../models/types';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export function meta({ loaderData }: Route.MetaArgs) {
  return [{ title: `Project App | ${loaderData?.project.title}` }];
}

const API_URL = import.meta.env.VITE_API_URL;
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL; 
const TOKEN = import.meta.env.VITE_BEAR_TOKEN;

export async function loader({ request, params }: Route.LoaderArgs) {
  const res = await fetch(
    `${API_URL}/projects?filters[documentId][$eq]=${params.id}&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );
  

  if (!res.ok) throw new Response('Project not found', { status: 404 });

  const json: StrapiResponse<StrapiProject> = await res.json();

  const item = json.data[0];

  const project: Project = {
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url
      ? `${item.image.url}`
      : '/images/no-image.png',
    date: item.date,
    category: item.category,
    featured: item.featured,
  };

  return { project };
}

const ProjectDetailsPage = ({ loaderData, params }: Route.ComponentProps) => {
  const { project } = loaderData;

  return (
    <>
      <Link
        to="/projects"
        className="flex items-center text-blue-400 hover:text-blue-500 mb-6"
      >
        <FaArrowLeft className="mr-2" />
        Back to Projects
      </Link>
      <div className="grid gap-8 items-start md:grid-cols-2">
        <div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bols text-blue-400 mb-4">
            {project.title}
          </h1>
          <p className="text-gray-300 text-sm mb-4">
            {new Date(project.date).toLocaleDateString()} . {project.category}
          </p>
          <p className="text-gray-200 mb-6">{project.description}</p>
          <a
            href={project.url}
            target="_blank"
            className="flex items-center w-fit grow-0 text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded transition"
          >
            View Project
            <FaArrowRight className="ml-2 flex items-center text-sm" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsPage;
