import { useQuery } from "@tanstack/react-query";
import { getBlogPosts } from "./request";

export const useGetBlogPost = () => {
  return useQuery({
    queryKey: ["GET_BLOGS"],
    queryFn: getBlogPosts,
  });
};
