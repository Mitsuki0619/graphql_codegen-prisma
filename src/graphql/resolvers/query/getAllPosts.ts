import { QueryResolvers } from "@/src/generated/graphql";

export const getAllPosts: QueryResolvers["getAllPosts"] = async (
  _parent,
  _args,
  ctx
) => {
  return ctx.prisma.post.findMany({
    include: {
      author: true
    }
  });
};
