
import { apiSlice } from "../../api/apiSlice";
import { createSelector } from "reselect";

export const requestAdminApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      getRequestAllAdmins: builder.query({
        query: () => `/admins`,
        keepUnusedDataFor: 5,
        providesTags: ["requestAdmin"],
      }),
      getRequestAllUsers: builder.query({
        query: () => `/admins/users`,
        keepUnusedDataFor: 5,
        providesTags: ["requestUser"],
      }),
    getRequestAdminByUuid: builder.query({
      query: (uuid) => `/admins/${uuid}`,
      providesTags: ["requestAdmin"],
    }),
    createRequestAdmin: builder.mutation({
      query: (user) => ({
        url: "/admins",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["requestAdmin"],
    }),
    createRequestAdminRole: builder.mutation({
      query: (admin) => ({
        url: "/admins/admin",
        method: "POST",
        body: admin,
      }),
      invalidatesTags: ["requestAdmin"],
    }),
    updateRequestAdmin: builder.mutation({
      query: ({ uuid, ...admin }) => ({
        url: `/admins/${uuid}`,
        method: "PUT",
        body: admin,
      }),
      invalidatesTags: ["requestAdmin"],
    }),
    deleteRequestAdmin: builder.mutation({
      query: (uuid) => ({
        url: `/admins/${uuid}`,
        method: "DELETE",
      }),
      invalidatesTags: ["requestAdmin"],
    }),
    deleteRequestIsDisable: builder.mutation({
      query: ({ uuid, disable }) => ({
        url: `/admins/disable/${uuid}`,
        method: "PUT",
        body: { disable },
      }),
      invalidatesTags: ["requestAdmin"],
    }),
  })
})

export const {
  useDeleteRequestIsDisableMutation,
  useGetRequestAllAdminsQuery,
  useGetRequestAllUsersQuery,
  useDeleteRequestAdminMutation,
  useGetRequestAdminByUuidQuery,
  useCreateRequestAdminMutation,
  useCreateRequestAdminRoleMutation,
  useUpdateRequestAdminMutation,
} = requestAdminApiSlice;

