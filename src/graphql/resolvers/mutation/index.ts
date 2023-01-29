import { MutationResolvers } from "@Generated/graphql";
import { createPost } from "@Mutation/createPost";
import { createUser } from "@Mutation/createUser";

export const Mutation: MutationResolvers = {
  createPost,
  createUser,
};
