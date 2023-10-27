import { apiSlice } from "../../../store/api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/auth/me",
      keepUnusedDataFor: 5, // keep unused data in cache for 5 seconds
      providesTags: ["User"], // provideTags are used for updating cache
    }),
    getRequestUserGoogleByEmail: builder.query({
      query: (email) => `/auth/google-get-me/${email}`,
      providesTags: ["requestUser"],
    }),
    getRequestUserByUuid: builder.query({
      query: (uuid) => `/users/${uuid}`,
      providesTags: ["requestUser"],
    }),
    updateRequestUser: builder.mutation({
      query: ({ uuid, ...user}) => ({
        url: `/users/${uuid}`,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: ["requestUser"],
    }),
    createRequestWithGoogle: builder.mutation({
      query: (google) => ({
        url: "/auth/google",
        method: "POST",
        body: google,
      }),
      invalidatesTags: ["requestGoogle"],
    }),
    createRequestSendMail: builder.mutation({
      query: (mail) => ({
        url: "/auth/send-mail",
        method: "POST",
        body: mail,
      }),
      invalidatesTags: ["requestMail"],
    }),
    updateRequestForgotPassword: builder.mutation({
      query: ({ uuid, ...password}) => ({
        url: `/auth/forgot-password/${uuid}`,
        method: "PUT",
        body: password,
      }),
      invalidatesTags: ["requestPassword"],
    }),
    createRequestRegisterUser: builder.mutation({
      query: (user) => ({
        url: "/auth/register",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["requestUserRegister"],
    }),
  }),
});

// auto generated hooks for getUser query (GET)
export const {
  useGetRequestUserGoogleByEmailQuery,
  useGetRequestUserByUuidQuery,
  useUpdateRequestUserMutation,
  useUpdateRequestForgotPasswordMutation,
  useGetUserQuery,
  useCreateRequestRegisterUserMutation,
  useCreateRequestSendMailMutation,
  useCreateRequestWithGoogleMutation,
} = userApiSlice;
