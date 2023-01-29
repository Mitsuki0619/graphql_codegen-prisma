import { QueryResolvers } from "../../../generated/graphql";
import { getAllPosts } from "./getAllPosts";
import { getPostDetail } from "./getPostDetail";
import { getUser } from "./getUser";

export const Query: QueryResolvers = {
  getAllPosts,
  getUser,
  getPostDetail
};
