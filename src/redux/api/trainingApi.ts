import { getFromLocalStorage } from "@/utils/local-storage";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const TRAINING_URL = "/training";

const token = getFromLocalStorage("accessToken");
const headers = {
  Authorization: `${token}`
}

export const trainingApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        //Get
        trainings: build.query({
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
                headers: headers
            }),
            invalidatesTags: [tagTypes.training],
        }),
        // get single id
        training: build.query({
            query: (id) => ({
                url: `${TRAINING_URL}/${id}`,
                method: "GET",
            }),
            providesTags: [tagTypes.training],
        }),
        // update
        updateTraining: build.mutation({
            query: (data) => ({
                url: `${TRAINING_URL}/${data.id}`,
                method: "PATCH",
                data: data.body,
                headers: headers
            }),
            invalidatesTags: [tagTypes.training],
        }),
        // delete single training by id
        deleteTraining: build.mutation({
            query: (id) => ({
                url: `${TRAINING_URL}/${id}`,
                method: "DELETE",
                headers: headers
            }),
            invalidatesTags: [tagTypes.training],
        }),
    }),
});

export const {
    useTrainingsQuery,
    useTrainingQuery,
    useAddTrainingMutation,
    useUpdateTrainingMutation,
    useDeleteTrainingMutation,
} = trainingApi;
