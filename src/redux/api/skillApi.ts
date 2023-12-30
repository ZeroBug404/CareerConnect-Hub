import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const SKILL_URL = "/skill";

export const skillApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // post
    addSkill: build.mutation({
      query: (data) => ({
        url: SKILL_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.portfolio],
    }),

    // get single jobs by id
    skill: build.query({
      query: (id) => ({
        url: `${SKILL_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.portfolio],
    }),

    // update single jobs by id
    updateSkill: build.mutation({
      query: (data) => ({
        url: `${SKILL_URL}/${data.id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.portfolio],
    }),

    // delete single job by id
    deleteSkill: build.mutation({
      query: (id) => ({
        url: `${SKILL_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.portfolio],
    }),
  }),
});

export const {} = skillApi;
