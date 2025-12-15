import { Outlet } from 'react-router';
import Hero from '~/components/Hero';
import type { Route } from '../about/+types';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Project App' }];
}

const HomeLayout = () => {
  return (
    <>
      <Hero />
      <section className="max-w-6xl mx-auto px-6 my-8">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
