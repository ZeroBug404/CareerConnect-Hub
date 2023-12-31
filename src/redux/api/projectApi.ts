import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PROJECT_URL = "/project";

export const projectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProjects: build.query({
      query: () => ({
        url: `${PROJECT_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.project],
    }),

    // post
    addProject: build.mutation({
      query: (data) => ({
        url: PROJECT_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.project],
    }),

    // get single jobs by id
    getSingleProject: build.query({
      query: (id) => ({
        url: `${PROJECT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.project],
    }),

    // update single jobs by id
    updateProject: build.mutation({
      query: (data) => ({
        url: `${PROJECT_URL}/${data.id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.project],
    }),

    // delete single job by id
    deleteProject: build.mutation({
      query: (id) => ({
        url: `${PROJECT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.project],
    }),
  }),
});

export const {
  useAddProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
  useGetSingleProjectQuery,
  useGetProjectsQuery,
} = projectApi;
