import { MutationResolvers } from "@/src/generated/graphql";
import { createPost } from "./createPost";
import { createUser } from "./createUser";


export const Mutation: MutationResolvers = {
  createPost,
  createUser
};
