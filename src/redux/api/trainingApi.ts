import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const TRAINING_URL = "/training";

export const trainingApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        //Get
        training: build.query({
            query: (arg: Record<string, any>) => ({
                url: TRAINING_URL,
                method: "GET",
                params: arg,
            }),
            providesTags: [tagTypes.training],
        }),
        //Post
        addTraining: build.mutation({
            query: (data) => ({
                url: TRAINING_URL,
                method: "POST",
                body: data,
            }),
            invalidatesTags: [tagTypes.training],
        }),

        // update
        updateTraining: build.mutation({
            query: (data) => ({
                url: `${TRAINING_URL}/${data.id}`,
                method: "PATCH",
                data: data.body,
            }),
            invalidatesTags: [tagTypes.training],
        }),
        // delete single training by id
        deleteTraining: build.mutation({
            query: (id) => ({
                url: `${TRAINING_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [tagTypes.training],
        }),
    }),
});

export const {
    useTrainingQuery,
    useAddTrainingMutation,
    useUpdateTrainingMutation,
    useDeleteTrainingMutation,
} = trainingApi;
