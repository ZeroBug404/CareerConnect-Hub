import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://career-connect-hub-api.vercel.app/api/v1",
    baseUrl: "http://localhost:5000/api/v1/",
  }),
  tagTypes: tagTypesList,
  endpoints: () => ({}),
});
