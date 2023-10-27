
import { apiSlice } from "../../../api/apiSlice";

export const requestGameCountApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
    getRequestGameCountByCode: builder.query({
      query: (code) => `/games/counts/${code}`,
      providesTags: ["requestGame"],
    }),
    getRequestGameCountPlayByCode: builder.query({
      query: (code) => `/games/counts/play/${code}`,
      providesTags: ["requestGame"],
    }),
    createRequestGameCount: builder.mutation({
      query: (gameCount) => ({
        url: "games/counts",
        method: "POST",
        body: gameCount,
      }),
      invalidatesTags: ["requestGame"],
    }),
    updateRequestGameCount: builder.mutation({
      query: ({ uuid, ...gameCount}) => ({
        url: `/games/counts/${uuid}`,
        method: "PUT",
        body: gameCount,
      }),
      invalidatesTags: ["requestGame"],
    }),
    getRequestAllGameCountByCode: builder.query({
      query: (code) => `/games/table/${code}`,
      keepUnusedDataFor: 5,
      providesTags: ["requestGame"],
    }),
  })
})

export const {
  useGetRequestGameCountPlayByCodeQuery,
  useGetRequestAllGameCountByCodeQuery,
  useGetRequestGameCountByCodeQuery,
  useCreateRequestGameCountMutation,
  useUpdateRequestGameCountMutation,
} = requestGameCountApiSlice;