import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Project App | Welcome' }];
}

export default function Home() {
  const now = new Date().toISOString();
  if (typeof window === 'undefined') {
    console.log('Server render at: ', now);
    console.log('Client at: ', now);
  }
  return <section>My app</section>;
}
