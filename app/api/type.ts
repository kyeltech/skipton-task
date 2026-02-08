// src/api/types/blog.ts

export type BlogPostList ={
    publishedAt: string;
      id: number;
      slug: string;
      thumbnail: string;
      status: "published" | "draft";
}

export type BlogPost = {
  id: number;
  slug: string;
  url: string;
  title: string;
  content: string;
  image: string;
  thumbnail: string;
  status: "published" | "draft";
  category: string;
  publishedAt: string;
  updatedAt: string;
  userId: number;
};
