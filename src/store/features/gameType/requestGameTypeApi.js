
import { apiSlice } from "../../api/apiSlice";

export const requestGameTypeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRequestGameTypes: builder.query({
      query: () => `/game-types`,
      keepUnusedDataFor: 5,
      providesTags: ["requestGameType"],
    }),
    getRequestGameTypeById: builder.query({
      query: (uuid) => `/game-types/${uuid}`,
      providesTags: ["requestGameType"],
    }),
    getRequestGameTypeByRoute: builder.query({
      query: (route) => `/game-types/routes/${route}`,
      providesTags: ["requestGameType"],
    }),
    createRequestGameType: builder.mutation({
      query: (gametype) => ({
        url: "/game-types",
        method: "POST",
        body: gametype,
      }),
      invalidatesTags: ["requestGameType"],
    }),
    updateRequestGameType: builder.mutation({
      query: ({ uuid, ...gametype }) => ({
        url: `/game-types/${uuid}`,
        method: "PUT",
        body: gametype,
      }),
      invalidatesTags: ["requestGameType"],
    }),
    deleteRequestGameType: builder.mutation({
      query: (uuid) => ({
        url: `/game-types/${uuid}`,
        method: "DELETE",
      }),
      invalidatesTags: ["requestGameType"],
    }),
  }),
});

export const {
  useGetRequestGameTypesQuery,
  useGetRequestGameTypeByIdQuery,
  useGetRequestGameTypeByRouteQuery,
  useCreateRequestGameTypeMutation,
  useUpdateRequestGameTypeMutation,
  useDeleteRequestGameTypeMutation,
} = requestGameTypeApiSlice;