import { baseApi } from "./baseApi";


const job_URL = "/jobs";

export const jobApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        addJobWithFormData: build.mutation({
            query: (data) => ({
                url: job_URL,
                method: "POST",
                data,
                contentType: "multipart/form-data",
            }),
            //   invalidatesTags: [tagTypes.job],
        }),

        // jobs: build.query({
        //   query: (arg: Record<string, any>) => {
        //     return {
        //       url: job_URL,
        //       method: "GET",
        //       params: arg,
        //     };
        //   },
        //   transformResponse: (response: Ijob[], meta: IMeta) => {
        //     return {
        //       jobs: response,
        //       meta,
        //     };
        //   },
        //   providesTags: [tagTypes.job],
        // }),

        // job: build.query({
        //   query: (id: string | string[] | undefined) => ({
        //     url: `${job_URL}/${id}`,
        //     method: "GET",
        //   }),
        //   providesTags: [tagTypes.job],
        // }),

        // updateJob: build.mutation({
        //   query: (data) => ({
        //     url: `${job_URL}/${data.id}`,
        //     method: "PATCH",
        //     data: data.body,
        //   }),
        //   invalidatesTags: [tagTypes.job],
        // }),

        // deleteJob: build.mutation({
        //   query: (id) => ({
        //     url: `${job_URL}/${id}`,
        //     method: "DELETE",
        //   }),
        //   invalidatesTags: [tagTypes.job],
        // }),
    }),
});

export const {
    useAddJobWithFormDataMutation
} = jobApi;
