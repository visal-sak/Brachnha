import { apiSlice } from "../../api/apiSlice";

export const requestRoleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRequestRoles: builder.query({
      query: () => `/roles?page=1&limit=10`,
      keepUnusedDataFor: 5,
      providesTags: ["requestRole"],
    }),
  }),
});

export const {
  useGetRequestRolesQuery,
} = requestRoleApiSlice;
