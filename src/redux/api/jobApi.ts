import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";


const JOB_URL = "/jobs";

export const jobApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
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

        addJob: build.mutation({
            query: (data) => ({
                url: JOB_URL,
                method: "POST",
                data,
                contentType: "multipart/form-data",
            }),
            invalidatesTags: [tagTypes.jobs],
        }),
    }),
});

export const {
    useJobsQuery,
    useAddJobMutation
} = jobApi;
