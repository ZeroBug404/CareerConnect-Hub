import { getBaseUrl } from "@/helpers/config/env.config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl(),
  }),
  // tagTypes: ["user", "reviews"],
  endpoints: () => ({}),
});
