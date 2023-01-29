import { QueryResolvers } from "@Generated/graphql";
import { getAllPosts } from "@Query/getAllPosts";
import { getPostDetail } from "@Query/getPostDetail";
import { getUser } from "@Query/getUser";

export const Query: QueryResolvers = {
  getAllPosts,
  getUser,
  getPostDetail,
};
