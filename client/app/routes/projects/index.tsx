import type { Route } from './+types/index';
import type { Project, StrapiProject, StrapiResponse } from '../models/types';
import ProjectCard from '~/components/ProjectCard';
import { useState } from 'react';
import Pagination from '~/components/Pagination';
import Filters from '~/components/Filters';
import { AnimatePresence, motion } from 'framer-motion';

const API_URL = import.meta.env.VITE_API_URL;
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
const TOKEN = import.meta.env.VITE_BEAR_TOKEN;

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Project App | Projects' }];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${API_URL}/projects?populate=*`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  const json: StrapiResponse<StrapiProject> = await res.json();
  const projects = json.data.map((item) => {
    return {
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
  });


  return { projects };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData as { projects: Project[] };
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setCategory] = useState('All');

  const categories = [
    'All',
    ...new Set(projects.map((project) => project.category)),
  ];
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const projectPerPage = 4;

  //Get items
  const indexLastItem = currentPage * projectPerPage;
  const indexFirstItem = indexLastItem - projectPerPage;
  // Calculate projects per page
  const totalPages = Math.ceil(filteredProjects.length / projectPerPage);
  const currentProjects = filteredProjects.slice(indexFirstItem, indexLastItem);

  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Projects
      </h2>
      <Filters
        selectedFilter={selectedCategory}
        filters={categories}
        onFilterSetPage={setCurrentPage}
        onFilterSetCategory={setCategory}
      />
      <AnimatePresence mode="wait">
        <motion.div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {currentProjects.map((project) => (
            <motion.div key={project.id} layout>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </section>
  );
};

export default ProjectsPage;
