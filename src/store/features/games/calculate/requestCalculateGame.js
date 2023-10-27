
import { apiSlice } from "../../../api/apiSlice";

export const requestGameCalculateApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
    getRequestGameCalculateByCode: builder.query({
      query: (code) => `/games/calculates/${code}`,
      providesTags: ["requestGame"],
    }),
    getRequestGameCalculatePlayByCode: builder.query({
      query: (code) => `/games/calculates/play/${code}`,
      providesTags: ["requestGame"],
    }),
    createRequestGameCalculate: builder.mutation({
      query: (gameCalculate) => ({
        url: "games/calculates",
        method: "POST",
        body: gameCalculate,
      }),
      invalidatesTags: ["requestGame"],
    }),
    updateRequestGameCalculate: builder.mutation({
      query: ({ uuid, ...gameCalculate }) => ({
        url: `/games/calculates/${uuid}`,
        method: "PUT",
        body: gameCalculate,
      }),
      invalidatesTags: ["requestGame"],
    }),
    getRequestAllGameCalculateByCode: builder.query({
      query: (code) => `/games/table/${code}`,
      keepUnusedDataFor: 5,
      providesTags: ["requestGame"],
    }),
  })
})

export const {
  useGetRequestGameCalculatePlayByCodeQuery,
  useGetRequestGameCalculateByCodeQuery,
  useGetRequestAllGameCalculateByCodeQuery,
  useCreateRequestGameCalculateMutation,
  useUpdateRequestGameCalculateMutation,
} = requestGameCalculateApiSlice;