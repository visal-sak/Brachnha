import { apiSlice } from "../../api/apiSlice";

export const requestGameApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRequestGames: builder.query({
      query: () => `/games`,
      keepUnusedDataFor: 5,
      providesTags: ["requestGame"],
    }),
    deleteRequestIsDisableGame: builder.mutation({
      query: ({ uuid, disable }) => ({
        url: `/games/public/${uuid}`,
        method: "PUT",
        body: { disable },
      }),
      invalidatesTags: ["requestGame"],
    }),
    getRequestGameByCode: builder.query({
      query: (code) => `/games/select-one/${code}`,
      providesTags: ["requestGame"],
    }),
    getRequestAllGameByCode: builder.query({
      query: (code) => `/games/table/${code}`,
      keepUnusedDataFor: 5,
      providesTags: ["requestGame"],
    }),
    deleteRequestGame: builder.mutation({
      query: (uuid) => ({
        url: `/games/${uuid}`,
        method: "DELETE",
      }),
      invalidatesTags: ["requestGame"],
    }),
    
  }),
});

export const {
  useDeleteRequestIsDisableGameMutation,
  useGetRequestGameByCodeQuery,
  useGetRequestAllGameByCodeQuery,
  useGetRequestGamesQuery,
  useDeleteRequestGameMutation,
} = requestGameApiSlice;
