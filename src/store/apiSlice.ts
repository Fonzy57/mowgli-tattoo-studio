// REDUX
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// TYPING
import { Post } from "@/dto/posts.dto";

// CONSTANTS
const day = 86400; // 24H IN SECONDS
const timeBeforeRefetchingData = day;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // LOCAL API CALL
  keepUnusedDataFor: timeBeforeRefetchingData, // KEEP DATA CACHED FOR 24 H
  tagTypes: ["Post"], // DECLARES THE TYPES OF TAGS
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts", // NO ARGS NEEDED
      providesTags: (result) =>
        result
          ? result.map(({ id }: Post) => ({ type: "Post" as const, id }))
          : [],
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;
