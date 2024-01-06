import { getFromLocalStorage } from "@/utils/local-storage";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const EVENTS_URL = "/events";

const token = getFromLocalStorage("accessToken");
const headers = {
  Authorization: `${token}`
}

export const eventApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getEvents: build.query({
      query: () => ({
        url: `${EVENTS_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.event],
    }),

    // post
    addEvent: build.mutation({
      query: (data) => ({
        url: EVENTS_URL,
        method: "POST",
        body: data,
        headers: headers
      }),
      invalidatesTags: [tagTypes.event],
    }),

    // get single jobs by id
    getSingleEvent: build.query({
      query: (id) => ({
        url: `${EVENTS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.event],
    }),

    // update single jobs by id
    updateEvent: build.mutation({
      query: (data) => ({
        url: `${EVENTS_URL}/${data.id}`,
        method: "PATCH",
        data: data,
        headers: headers
      }),
      invalidatesTags: [tagTypes.event],
    }),

    // delete single job by id
    deleteEvent: build.mutation({
      query: (id) => ({
        url: `${EVENTS_URL}/${id}`,
        method: "DELETE",
        headers: headers
      }),
      invalidatesTags: [tagTypes.event],
    }),
  }),
});

export const {
    useGetEventsQuery,
    useAddEventMutation,
    useGetSingleEventQuery,
    useUpdateEventMutation,
    useDeleteEventMutation,
} = eventApi;
