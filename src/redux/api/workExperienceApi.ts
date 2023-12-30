import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const WORK_EXP_URL = "/workExperience";

export const workExperienceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //Get
    workExperience: build.query({
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
  useWorkExperienceQuery,
  useAddWorkExperienceMutation,
  useUpdateWorkExperienceMutation,
  useDeleteWorkExperienceMutation
} = workExperienceApi;
