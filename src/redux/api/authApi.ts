import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `auth/login`,
        method: "POST",
        body: loginData,
      }),
    }),
    userSignup: build.mutation({
      query: (signupData) => ({
        url: `users/signup`,
        method: "POST",
        body: signupData,
      }),
    }),
  }),
});

export const { useUserLoginMutation, useUserSignupMutation } = authApi;
