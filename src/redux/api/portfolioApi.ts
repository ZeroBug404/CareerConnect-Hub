import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PORTFOLIO_URL = "/portfolio";

export const portfolioApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get
    portfolios: build.query({
        query: () => ({
          url: `${PORTFOLIO_URL}`,
          method: "GET",
        }),
        providesTags: [tagTypes.portfolio],
      }),

    // post
    addPortfolio: build.mutation({
      query: (data) => ({
        url: PORTFOLIO_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.portfolio],
    }),

    // get single jobs by id
    portfolio: build.query({
      query: (id) => ({
        url: `${PORTFOLIO_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.portfolio],
    }),

    // update single jobs by id
    updatePortfolio: build.mutation({
      query: (data) => ({
        url: `${PORTFOLIO_URL}/${data.id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.portfolio],
    }),

    // delete single job by id
    deletePortfolio: build.mutation({
      query: (id) => ({
        url: `${PORTFOLIO_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.portfolio],
    }),
  }),
});

export const {
  usePortfoliosQuery,
  useAddPortfolioMutation,
  useDeletePortfolioMutation,
  usePortfolioQuery,
  useUpdatePortfolioMutation,
} = portfolioApi;
