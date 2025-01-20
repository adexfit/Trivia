import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const questionApi = createApi({
  reducerPath: "questions",
  baseQuery: fetchBaseQuery({ baseUrl: "https://opentdb.com" }),
  endpoints: (builder) => ({
    getAllQuestions: builder.query({
      query: () => "/api.php?amount=3&category=21",
    }),
  }),
});

export const { useGetAllQuestionsQuery } = questionApi;
