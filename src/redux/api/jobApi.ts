import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";


const JOB_URL = "/jobs";

export const jobApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        //Get
        jobs: build.query({
            query: (arg: Record<string, any>) => ({
                url: JOB_URL,
                method: "GET",
                params: arg,
            }),
            providesTags: [tagTypes.jobs],
        }),
        // post
        addJob: build.mutation({
            query: (data) => ({
                url: JOB_URL,
                method: "POST",
                data,
            }),
            invalidatesTags: [tagTypes.jobs],
        }),
        // get single jobs by id
        job: build.query({
            query: (id) => ({
                url: `${JOB_URL}/${id}`,
                method: "GET",
            }),
            providesTags: [tagTypes.jobs],
        }),

        // update single jobs by id
        updateJob: build.mutation({
            query: (data) => ({
                url: `${JOB_URL}/${data.id}`,
                method: "PATCH",
                data: data.body,
            }),
            invalidatesTags: [tagTypes.jobs],
        }),
        // delete single job by id
        deleteJob: build.mutation({
            query: (id) => ({
                url: `${JOB_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [tagTypes.jobs],
        }),
    }),
});

export const {
    useJobsQuery,
    useAddJobMutation,
    useJobQuery,
    useUpdateJobMutation,
    useDeleteJobMutation,
} = jobApi;
