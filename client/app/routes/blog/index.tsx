import type { Route } from './+types/index';
import type { PostMeta, StrapiPost, StrapiResponse } from '../models/types';
import PostCard from '~/components/PostCard';
import { useState, useEffect } from 'react';
import Pagination from '~/components/Pagination';
import SearchFilter from '~/components/SearchFilter';

const API_URL = import.meta.env.VITE_API_URL;
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
const TOKEN = import.meta.env.VITE_BEAR_TOKEN;

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Project App | Welcome' }];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
  const res = await fetch(`${API_URL}/posts?populate=*`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  if (!res.ok) throw new Error('Failed to fetch data');
  const json: StrapiResponse<StrapiPost> = await res.json();
  const posts: PostMeta[] = json.data.map((item) => {
    return {
      id: item.id,
      documentId: item.documentId,
      title: item.title,
      slug: item.slug,
      excerpt: item.excerpt,
      date: item.date,
      image: item.image?.url
        ? `${item.image.url}`
        : '/images/no-image.png',
    };
  });

  return { posts: posts };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const { posts } = loaderData;

  posts.sort(
    (a: PostMeta, b: PostMeta) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('');

  const queryPosts =
    filter === ''
      ? posts
      : posts.filter(
          (post) =>
            post.title.toLowerCase().includes(filter.toLowerCase()) ||
            post.title.toLowerCase().includes(filter.toLowerCase())
        );

  const blogPostsPerPage: number = 3;
  const indexLastItem: number = currentPage * blogPostsPerPage;
  const indexFirstItem: number = indexLastItem - blogPostsPerPage;
  const totalPages: number = Math.ceil(queryPosts.length - blogPostsPerPage);
  const currentPosts: PostMeta[] = queryPosts.slice(
    indexFirstItem,
    indexLastItem
  );

  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-900 rounded">
      <h2 className="text-3xl text-white font-bold mb-8">Blog</h2>
      <SearchFilter searchQuery={filter} onSearchChange={setFilter} />
      <div className="space-y-8">
        {currentPosts.length === 0 ? (
          <p className="text-gray-400">No posts found</p>
        ) : (
          currentPosts.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      ></Pagination>
    </div>
  );
};

export default BlogPage;
