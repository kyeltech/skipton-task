import API_ENDPOINTS from "@/app/api/api.config";
import { axiosInstance } from "@/app/api/posts";
import { getBlogPosts } from "@/app/api/service/request";
import { BlogPost } from "@/app/api/type";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axiosInstance);

describe("getBlogPosts", () => {
  afterEach(() => {
    mock.reset();
  });

  it("returns blog posts when API call succeeds", async () => {
    const mockResponse: BlogPost[] = [
      {
        id: 1,
        slug: "test-post",
        title: "Test",
        content: "Test content",
        thumbnail: "test.png",
        status: "published",
        publishedAt: "01/01/2023 10:00:00",
        url: "image url",
        image: "image url",
        category: "lorem",
        updatedAt: "19/01/2023 08:25:17",
        userId: 2,
      },
    ];

    mock.onGet(API_ENDPOINTS.POST.GETBLOGS).reply(200, mockResponse);

    const result = await getBlogPosts();

    expect(result).toEqual(mockResponse);
  });

  it("throws an error when API call fails", async () => {
    mock.onGet("/posts").reply(500);
    await expect(getBlogPosts()).rejects.toThrow();
  });
});
