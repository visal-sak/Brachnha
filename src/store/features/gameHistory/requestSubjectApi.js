import { apiSlice } from "../../api/apiSlice";
export const requestGameHistoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRequestGameHistorys: builder.query({
      query: () => `/games_histories`,
      keepUnusedDataFor: 5,
      providesTags: ["requestGameHistory"],
    }),
    getRequestScore: builder.query({
      query: () => `/games_histories/top-score`,
      keepUnusedDataFor: 5,
      providesTags: ["requestGameHistory"],
    }),
    getRequestGameHistoryById: builder.query({
      query: (uuid) => `/games_histories/${uuid}`,
      providesTags: ["requestGameHistory"],
    }),
    getRequestGameHistoryUserPlayById: builder.query({
      query: (uuid) => `/games_histories/user-play/${uuid}`,
      providesTags: ["requestGameHistory"],
    }),
    createRequestGameHistory: builder.mutation({
      query: (gameHistory) => ({
        url: "/games_histories",
        method: "POST",
        body: gameHistory,
      }),
      invalidatesTags: ["requestGameHistory"],
    }),
    deleteRequestGameHistory: builder.mutation({
      query: (uuid) => ({
        url: `/games_histories/${uuid}`,
        method: "DELETE",
      }),
      invalidatesTags: ["requestGameHistory"],
    }),
  }),
});

export const {
  useGetRequestGameHistorysQuery,
  useGetRequestScoreQuery,
  useGetRequestGameHistoryByIdQuery,
  useGetRequestGameHistoryUserPlayByIdQuery,
  useCreateRequestGameHistoryMutation,
  useDeleteRequestGameHistoryMutation,
} = requestGameHistoryApiSlice;