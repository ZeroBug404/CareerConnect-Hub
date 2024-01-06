import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const WORK_EXP_URL = "/experience";

export const workExperienceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //Get
    workExperiences: build.query({
      query: (arg: Record<string, any>) => ({
        url: WORK_EXP_URL,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.workExperience],
    }),
    //Post
    addWorkExperience: build.mutation({
      query: (data) => ({
        url: WORK_EXP_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.workExperience],
    }),
    // get single id
    workExperience: build.query({
      query: (id) => ({
        url: `${WORK_EXP_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.workExperience],
    }),
    // update
    updateWorkExperience: build.mutation({
      query: (data) => ({
        url: `${WORK_EXP_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.workExperience],
    }),
    // delete
    deleteWorkExperience: build.mutation({
      query: (id) => ({
        url: `${WORK_EXP_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.workExperience],
    }),
  }),
});

export const {
  useWorkExperiencesQuery,
  useWorkExperienceQuery,
  useAddWorkExperienceMutation,
  useUpdateWorkExperienceMutation,
  useDeleteWorkExperienceMutation
} = workExperienceApi;
