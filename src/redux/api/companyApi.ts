import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const COMPANY_URL = "/company";

export const companyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addCompany: build.mutation({
      query: ({ data }) => ({
        url: COMPANY_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.company],
    }),
    companies: build.query({
      query: (arg: Record<string, any>) => ({
        url: COMPANY_URL,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.company],
    }),
    company: build.query({
      query: (id) => ({
        url: `${COMPANY_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.company],
    }),
    updateCompany: build.mutation({
      query: (data) => ({
        url: `${COMPANY_URL}/${data.id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.company],
    }),
    deleteCompany: build.mutation({
      query: (id) => ({
        url: `${COMPANY_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.company],
    }),
  }),
});

export const {
  useAddCompanyMutation,
  useCompaniesQuery,
  useCompanyQuery,
  useUpdateCompanyMutation,
  useDeleteCompanyMutation,
} = companyApi;
