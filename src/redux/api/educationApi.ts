import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const EDUCATION_URL = "/education";

export const educationApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        //Get
        education: build.query({
            query: (arg: Record<string, any>) => ({
                url: EDUCATION_URL,
                method: "GET",
                params: arg,
            }),
            providesTags: [tagTypes.education],
        }),
        //Post
        addEducation: build.mutation({
            query: (data) => ({
                url: EDUCATION_URL,
                method: "POST",
                body: data,
            }),
            invalidatesTags: [tagTypes.education],
        }),

        // update
        updateEducation: build.mutation({
            query: (data) => ({
                url: `${EDUCATION_URL}/${data.id}`,
                method: "PATCH",
                data: data.body,
            }),
            invalidatesTags: [tagTypes.education],
        }),
        // delete
        deleteEducation: build.mutation({
            query: (id) => ({
                url: `${EDUCATION_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [tagTypes.education],
        }),
    }),
});

export const {
    useEducationQuery,
    useAddEducationMutation,
    useUpdateEducationMutation,
    useDeleteEducationMutation,
} = educationApi;
