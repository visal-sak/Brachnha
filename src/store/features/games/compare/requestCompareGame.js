
import { apiSlice } from "../../../api/apiSlice";

export const requestGameCompareApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
    getRequestGameCompareByCode: builder.query({
      query: (code) => `/games/compares/${code}`,
      providesTags: ["requestGame"],
    }),
    getRequestGameComparePlayByCode: builder.query({
      query: (code) => `/games/compares/play/${code}`,
      providesTags: ["requestGame"],
    }),
    createRequestGameCompare: builder.mutation({
      query: (gameCompare) => ({
        url: "games/compares",
        method: "POST",
        body: gameCompare,
      }),
      invalidatesTags: ["requestGame"],
    }),
    updateRequestGameCompare: builder.mutation({
      query: ({ uuid, ...gameCompare}) => ({
        url: `/games/compares/${uuid}`,
        method: "PUT",
        body: gameCompare,
      }),
      invalidatesTags: ["requestGame"],
    }),
    getRequestAllGameCompareByCode: builder.query({
      query: (code) => `/games/table/${code}`,
      keepUnusedDataFor: 5,
      providesTags: ["requestGame"],
    }),
  })
})

export const {
  useGetRequestGameComparePlayByCodeQuery,
  useGetRequestGameCompareByCodeQuery,
  useGetRequestAllGameCompareByCodeQuery,
  useCreateRequestGameCompareMutation,
  useUpdateRequestGameCompareMutation,
} = requestGameCompareApiSlice;