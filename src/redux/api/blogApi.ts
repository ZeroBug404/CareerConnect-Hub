import { getFromLocalStorage } from "@/utils/local-storage";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BLOG_URL = "/blogs";

const token = getFromLocalStorage("accessToken");
const headers = {
  Authorization: `${token}`
}

export const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //Get
    blogs: build.query({
      query: (arg: Record<string, any>) => ({
        url: BLOG_URL,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.blog],
    }),
    //Post
    addBlog: build.mutation({
      query: (data) => ({
        url: BLOG_URL,
        method: "POST",
        body: data,
        headers: headers
      }),
      invalidatesTags: [tagTypes.blog],
    }),
    // get single blog by id
    blog: build.query({
      query: (id) => ({
        url: `${BLOG_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),

    // update single blog by id
    updateBlog: build.mutation({
      query: (data) => ({
        url: `${BLOG_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
        headers: headers
      }),
      invalidatesTags: [tagTypes.blog],
    }),
    // delete single Blog by id
    deleteBlog: build.mutation({
      query: (id) => ({
        url: `${BLOG_URL}/${id}`,
        method: "DELETE",
        headers: headers
      }),
      invalidatesTags: [tagTypes.blog],
    }),
  }),
});

export const {
  useBlogsQuery,
  useAddBlogMutation,
  useBlogQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
