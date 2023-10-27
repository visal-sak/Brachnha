
import { apiSlice } from "../../../api/apiSlice";

export const requestGameDragDropApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
    getRequestGameDragDropByCode: builder.query({
      query: (code) => `/games/dragdrops/${code}`,
      providesTags: ["requestGame"],
    }),
    getRequestGameDragDropPlayByCode: builder.query({
      query: (code) => `/games/dragdrops/play/${code}`,
      providesTags: ["requestGame"],
    }),
    createRequestGameDragDrop: builder.mutation({
      query: (gameDragDrop) => ({
        url: "games/dragdrops",
        method: "POST",
        body: gameDragDrop,
      }),
      invalidatesTags: ["requestGame"],
    }),
    updateRequestGameDragDrop: builder.mutation({
      query: ({ uuid, ...gameDragDrop }) => ({
        url: `/games/dragdrops/${uuid}`,
        method: "PUT",
        body: gameDragDrop,
      }),
      invalidatesTags: ["requestGame"],
    }),
    getRequestAllGameDragDropByCode: builder.query({
      query: (code) => `/games/table/${code}`,
      keepUnusedDataFor: 5,
      providesTags: ["requestGame"],
    }),
  })
})

export const {
  useGetRequestGameDragDropPlayByCodeQuery,
  useGetRequestGameDragDropByCodeQuery,
  useGetRequestAllGameDragDropByCodeQuery,
  useCreateRequestGameDragDropMutation,
  useUpdateRequestGameDragDropMutation,
} = requestGameDragDropApiSlice;