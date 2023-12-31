import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const EDUCATION_URL = "/education";

export const educationApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        //Get
        educations: build.query({
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

        // get single id
        education: build.query({
            query: (id) => ({
                url: `${EDUCATION_URL}/${id}`,
                method: "GET",
            }),
            providesTags: [tagTypes.education],
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
    useEducationsQuery,
    useEducationQuery,
    useAddEducationMutation,
    useUpdateEducationMutation,
    useDeleteEducationMutation,
} = educationApi;
