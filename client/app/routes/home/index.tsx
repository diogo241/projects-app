import FeaturedProjects from '~/components/FeaturedProjects';
import type { Route } from './+types/index';
import type { Project, PostMeta, StrapiPost } from '../models/types';
import LatestPosts from '~/components/LatestPosts';
import type { Project, StrapiProject, StrapiResponse } from '../models/types';

const API_URL = import.meta.env.VITE_API_URL;
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
const TOKEN = import.meta.env.VITE_BEAR_TOKEN;

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Project App | Welcome' }];
}

export async function loader({ request }: Route.LoaderArgs): Promise<{
  featProjects: Project[];
  featPosts: PostMeta[];
}> {
  const url = new URL('/posts-meta.json', request.url);
  const [projectRes, postRes] = await Promise.all([
    fetch(`${API_URL}/projects?filters[featured][$eq]=1&populate=*`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }),
    fetch(`${API_URL}/posts?&populate=*`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }),
  ]);

  if (!projectRes.ok || !postRes.ok)
    throw new Error('Failed to fetch projects or posts');

  const [projectJson, postsJson] = await Promise.all([
    (await projectRes.json()) as StrapiResponse<StrapiProject>,
    (await postRes.json()) as StrapiResponse<StrapiPost>,
  ]);

  const projects: Project[] = projectJson.data.map((item) => {
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
  const posts: PostMeta[] = postsJson.data.map((item) => {
    return {
      id: item.id,
      documentId: item.documentId,
      title: item.title,
      slug: item.slug,
      excerpt: item.excerpt,
      date: item.date,
    };
  });

  return { featProjects: projects, featPosts: posts };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { featProjects, featPosts } = loaderData;
  return (
    <>
      <FeaturedProjects featProjects={featProjects} limit={2} />
      <LatestPosts featPosts={featPosts} limit={2} />
    </>
  );
};

export default HomePage;
