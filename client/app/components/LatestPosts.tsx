import type { PostMeta } from '~/routes/models/types';
import PostCard from './PostCard';

type LatestPostsProps = {
  featPosts: PostMeta[];
  limit: number;
};

const LatestPosts = ({ featPosts, limit = 3 }: LatestPostsProps) => {
  const latestPosts = featPosts.sort(
    (a: PostMeta, b: PostMeta) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const posts = latestPosts.slice(0, limit);

  return (
    <section className="max-w-6xl mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6 text-white">Latest Posts</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
