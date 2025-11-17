import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Project App | Projects' }];
}

const ProjectsPage = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Projects
      </h2>
    </section>
  );
};

export default ProjectsPage;
