
import { apiSlice } from "../../../api/apiSlice";

export const requestGameMultipleChoiceApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
    getRequestGameMultipleChoiceByCode: builder.query({
      query: (code) => `/games/multiple-choices/${code}`,
      providesTags: ["requestGame"],
    }),
    getRequestGameMultipleChoicePlayByCode: builder.query({
      query: (code) => `/games/multiple-choices/play/${code}`,
      providesTags: ["requestGame"],
    }),
    createRequestGameMultipleChoice: builder.mutation({
      query: (gameMultipleChoice) => ({
        url: "games/multiple-choices",
        method: "POST",
        body: gameMultipleChoice,
      }),
      invalidatesTags: ["requestGame"],
    }),
    updateRequestGameMultipleChoice: builder.mutation({
      query: ({ uuid, ...gameMultipleChoice}) => ({
        url: `/games/multiple-choices/${uuid}`,
        method: "PUT",
        body: gameMultipleChoice,
      }),
      invalidatesTags: ["requestGame"],
    }),
    getRequestAllGameMultipleChoiceByCode: builder.query({
      query: (code) => `/games/table/${code}`,
      keepUnusedDataFor: 5,
      providesTags: ["requestGame"],
    }),
  })
})

export const {
  useGetRequestGameMultipleChoicePlayByCodeQuery,
  useGetRequestGameMultipleChoiceByCodeQuery,
  useGetRequestAllGameMultipleChoiceByCodeQuery,
  useCreateRequestGameMultipleChoiceMutation,
  useUpdateRequestGameMultipleChoiceMutation,
} = requestGameMultipleChoiceApiSlice;