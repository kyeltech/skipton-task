import API_ENDPOINTS from "../api.config";
import ApiClient from "../posts";
import { BlogPost } from "../type";

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  // added just to show loading state
  await new Promise((resolve) => setTimeout(resolve, 100));
  return ApiClient<BlogPost[]>(API_ENDPOINTS.POST.GETBLOGS);
};
