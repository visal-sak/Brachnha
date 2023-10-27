import { apiSlice } from "../../api/apiSlice";

export const requestGradeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRequestGrades: builder.query({
      query: () => `/grades`,
      keepUnusedDataFor: 5,
      providesTags: ["requestGrades"],
    }),
    getRequestGameGrades: builder.query({
      query: () => `/game-grades/grades`,
      keepUnusedDataFor: 5,
      providesTags: ["requestGrades"],
    }),
    getRequestGradeById: builder.query({
      query: (uuid) => `/grades/${uuid}`,
      providesTags: ["requestGrades"],
    }),
    createRequestGrade: builder.mutation({
      query: (grade) => ({
        url: "/grades",
        method: "POST",
        body: grade,
      }),
      invalidatesTags: ["requestGrades"],
    }),
    updateRequestGrade: builder.mutation({
      query: ({ uuid, ...grade }) => ({
        url: `/grades/${uuid}`,
        method: "PUT",
        body: grade,
      }),
      invalidatesTags: ["requestGrades"],
    }),
    deleteRequestGrade: builder.mutation({
      query: (uuid) => ({
        url: `/grades/${uuid}`,
        method: "DELETE",
      }),
      invalidatesTags: ["requestGrades"],
    }),
  }),
});

export const {
  useGetRequestGradesQuery,
  useGetRequestGameGradesQuery,
  useGetRequestGradeByIdQuery,
  useCreateRequestGradeMutation,
  useUpdateRequestGradeMutation,
  useDeleteRequestGradeMutation,
} = requestGradeApiSlice;