import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const JOB_RESPONSIBILITY_URL = "/responsibility";

export const jobResponsibilityApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        //Get
        responsibilities: build.query({
            query: (arg: Record<string, any>) => ({
                url: JOB_RESPONSIBILITY_URL,
                method: "GET",
                params: arg,
            }),
            providesTags: [tagTypes.jobResponsibility],
        }),
        //Post
        addResponsibility: build.mutation({
            query: (data) => ({
                url: JOB_RESPONSIBILITY_URL,
                method: "POST",
                body: data,
            }),
            invalidatesTags: [tagTypes.jobResponsibility],
        }),
        // get single id
        responsibility: build.query({
            query: (id) => ({
                url: `${JOB_RESPONSIBILITY_URL}/${id}`,
                method: "GET",
            }),
            providesTags: [tagTypes.jobResponsibility],
        }),
        // update
        updateResponsibility: build.mutation({
            query: (data) => ({
                url: `${JOB_RESPONSIBILITY_URL}/${data.id}`,
                method: "PATCH",
                data: data.body,
            }),
            invalidatesTags: [tagTypes.jobResponsibility],
        }),
        // delete
        deleteResponsibility: build.mutation({
            query: (id) => ({
                url: `${JOB_RESPONSIBILITY_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [tagTypes.jobResponsibility],
        }),
    }),
});

export const {
    useResponsibilitiesQuery,
    useResponsibilityQuery,
    useAddResponsibilityMutation,
    useUpdateResponsibilityMutation,
    useDeleteResponsibilityMutation,
} = jobResponsibilityApi;
