import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";


const JOB_URL = "/jobs";

export const jobApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        //Post
        jobs: build.query({
            query: (arg: Record<string, any>) => ({
                url: JOB_URL,
                method: "GET",
                params: arg,
            }),
            // transformResponse: (response: IJobData, meta: IMeta) => {
            //     return {
            //         jobs: response,
            //         meta,
            //     };
            // },
            providesTags: [tagTypes.jobs],
        }),
        //Get
        addJob: build.mutation({
            query: (data) => ({
                url: JOB_URL,
                method: "POST",
                data,
                contentType: "multipart/form-data",
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
    useDeleteJobMutation
} = jobApi;
