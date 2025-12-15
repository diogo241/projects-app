import { Outlet } from 'react-router';
import type { Route } from '../about/+types';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Project App' }];
}

const MainLayout = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 my-16">
        <Outlet />
      </section>
    </>
  );
};

export default MainLayout;
