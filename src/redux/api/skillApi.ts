import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const SKILL_URL = "/skill";

export const skillApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
      //Get
      skills: build.query({
          query: (arg: Record<string, any>) => ({
              url: SKILL_URL,
              method: "GET",
              params: arg,
          }),
          providesTags: [tagTypes.skill],
      }),
      //Post
      addSkill: build.mutation({
          query: (data) => ({
              url: SKILL_URL,
              method: "POST",
              body: data,
          }),
          invalidatesTags: [tagTypes.skill],
      }),
      // get single id
      skill: build.query({
          query: (id) => ({
              url: `${SKILL_URL}/${id}`,
              method: "GET",
          }),
          providesTags: [tagTypes.skill],
      }),
      // update
      updateSkill: build.mutation({
          query: (data) => ({
              url: `${SKILL_URL}/${data.id}`,
              method: "PATCH",
              data: data.body,
          }),
          invalidatesTags: [tagTypes.skill],
      }),
      // delete single skill by id
      deleteSkill: build.mutation({
          query: (id) => ({
              url: `${SKILL_URL}/${id}`,
              method: "DELETE",
          }),
          invalidatesTags: [tagTypes.skill],
      }),
  }),
});

export const { 
  useSkillsQuery,
  useSkillQuery,
  useAddSkillMutation,
  useUpdateSkillMutation,
  useDeleteSkillMutation
} = skillApi;
