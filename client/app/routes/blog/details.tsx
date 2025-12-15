import ReactMarkdown from 'react-markdown';
import type { Route } from './+types';
import type {
  Post,
  PostMeta,
  StrapiPost,
  StrapiResponse,
} from '../models/types';
import { Link } from 'react-router';

const API_URL = import.meta.env.VITE_API_URL;
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
const TOKEN = import.meta.env.VITE_BEAR_TOKEN;

export async function loader({ request, params }: Route.ClientLoaderArgs) {
  const { slug } = params;
  const res = await fetch(
    `${API_URL}/posts?filters[slug][$eq]=${slug}&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );

  if (!res.ok) throw new Response('Post not found', { status: 404 });

  const json: StrapiResponse<StrapiPost> = await res.json();

  const item = json.data[0];

  const post: Post = {
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    excerpt: item.excerpt,
    image: item.image?.url
      ? `${item.image.url}`
      : '/images/no-image.png',
    date: item.date,
    body: item.body,
  };

  return {
    post: post,
  };
}

type BlogPostDetailsPage = {
  loaderData: {
    post: Post;
  };
};

const BlogDetailsPage = ({ loaderData }: BlogPostDetailsPage) => {
  const { post } = loaderData;
  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-900 rounded">
      <h2 className="text-3xl text-blue-500 font-bold mb-8">{post.title}</h2>
      <p className="text-sm text-gray-400 mb-2">
        {new Date(post.date).toDateString()}
      </p>
      <img
        src={post.image}
        alt={post.title}
        className="w-full object-cover h-40"
      />
      <div className="prose prose-invert max-w-none mb-12">
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </div>
      <p className="text-sm text-gray-400 mb-2">{post.excerpt}</p>
      <Link
        to={`/blog`}
        className="inline-block bg-blue-600 rounded-lg py-2 px-4 mt-8"
      >
        Back to Posts
      </Link>
    </div>
  );
};

export default BlogDetailsPage;
