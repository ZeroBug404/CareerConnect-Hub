import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const USER_URL = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get single blog by id
    userProfile: build.query({
      query: (authToken) => ({
        url: `${USER_URL}/my-profile`,
        method: "GET",
        headers: {
          Authorization: authToken,
          // Add other headers if needed
        }
      }),
      providesTags: [tagTypes.users],
    }),
  }),
});

export const { useUserProfileQuery } = userApi;
