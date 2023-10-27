import { apiSlice } from "../../api/apiSlice";

export const requestSubjectApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRequestSubjects: builder.query({
      query: () => `/subjects`,
      keepUnusedDataFor: 5,
      providesTags: ["requestSubjects"],
    }),
    getRequestSubjectById: builder.query({
      query: (uuid) => `/subjects/${uuid}`,
      providesTags: ["requestSubjects"],
    }),
    getRequestSubjectClientByRoute: builder.query({
      query: (route) => `/subjects/client/${route}`,
      providesTags: ["requestSubjects"],
    }),
    createRequestSubject: builder.mutation({
      query: (subject) => ({
        url: "/subjects",
        method: "POST",
        body: subject,
      }),
      invalidatesTags: ["requestSubjects"],
    }),
    updateRequestSubject: builder.mutation({
      query: ({ uuid, ...subject }) => ({
        url: `/subjects/${uuid}`,
        method: "PUT",
        body: subject,
      }),
      invalidatesTags: ["requestSubjects"],
    }),
    deleteRequestSubject: builder.mutation({
      query: (uuid) => ({
        url: `/subjects/${uuid}`,
        method: "DELETE",
      }),
      invalidatesTags: ["requestSubjects"],
    }),
  }),
});

export const {
  useGetRequestSubjectsQuery,
  useGetRequestSubjectByIdQuery,
  useGetRequestSubjectClientByRouteQuery,
  useCreateRequestSubjectMutation,
  useUpdateRequestSubjectMutation,
  useDeleteRequestSubjectMutation,
} = requestSubjectApiSlice;