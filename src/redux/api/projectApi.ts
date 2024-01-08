import { getFromLocalStorage } from "@/utils/local-storage";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PROJECT_URL = "/project";

const token = getFromLocalStorage("accessToken");
const headers = {
  Authorization: `${token}`
}

export const projectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    projects: build.query({
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
        headers: headers
      }),
      invalidatesTags: [tagTypes.project],
    }),

    // get single jobs by id
    project: build.query({
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
        headers: headers
      }),
      invalidatesTags: [tagTypes.project],
    }),

    // delete single job by id
    deleteProject: build.mutation({
      query: (id) => ({
        url: `${PROJECT_URL}/${id}`,
        method: "DELETE",
        headers: headers
      }),
      invalidatesTags: [tagTypes.project],
    }),
  }),
});

export const {
  useProjectsQuery,
  useProjectQuery,
  useAddProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation
} = projectApi;
