export type Project = {
  id: string;
  documentId: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  featured: boolean;
};

export type Post = {
  id: string;
  documentId: string;
  title: string;
  body: string;
  image: string;
  excerpt: string;
  date: string;
};

export type PostMeta = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
};

export type StrapiResponse<T> = {
  data: T[];
};

export type StrapiProject = {
  id: string;
  documentId: string;
  title: string;
  description: string;
  image?: {
    url?: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
  url?: string;
  date: string;
  category: string;
  featured: boolean;
};

export type StrapiPost = {
  id: string;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  image?: {
    name?: string;
    url?: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
  date: string;
};
