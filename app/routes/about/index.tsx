import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Projects App | About' },
  ];
}

const AboutPage = () => {
  return <h1 className="text-3xl font-bold text-white mb-2">Diogo</h1>;
};

export default AboutPage;