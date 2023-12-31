import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const SKILL_URL = "/skill";

export const skillApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get single skills by id
    getSkills: build.query({
      query: () => ({
        url: `${SKILL_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.portfolio],
    }),

    // post
    addSkill: build.mutation({
      query: (data) => ({
        url: SKILL_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.portfolio],
    }),

    // get single skills by id
    skill: build.query({
      query: (id) => ({
        url: `${SKILL_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.portfolio],
    }),

    // update single skills by id
    updateSkill: build.mutation({
      query: (data) => ({
        url: `${SKILL_URL}/${data.id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.portfolio],
    }),

    // delete single skills by id
    deleteSkill: build.mutation({
      query: (id) => ({
        url: `${SKILL_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.portfolio],
    }),
  }),
});

export const {useAddSkillMutation, useDeleteSkillMutation, useUpdateSkillMutation, useSkillQuery, useGetSkillsQuery} = skillApi;
