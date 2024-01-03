import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const FAQ_URL = "/faq";

export const FAQApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addFAQ: build.mutation({
      query: ({ data }) => ({
        url: FAQ_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.faq],
    }),
    FAQs: build.query({
      query: (arg: Record<string, any>) => ({
        url: FAQ_URL,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.faq],
    }),
    FAQ: build.query({
      query: (id) => ({
        url: `${FAQ_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.faq],
    }),
    updateFAQ: build.mutation({
      query: (data) => ({
        url: `${FAQ_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.faq],
    }),
    deleteFAQ: build.mutation({
      query: (id) => ({
        url: `${FAQ_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.faq],
    }),
  }),
});

export const {
  useAddFAQMutation,
  useFAQsQuery,
  useFAQQuery,
  useUpdateFAQMutation,
  useDeleteFAQMutation,
} = FAQApi;
