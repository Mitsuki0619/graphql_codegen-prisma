import { QueryResolvers } from "@Generated/graphql";

export const getAllPosts: QueryResolvers["getAllPosts"] = async (
  _parent,
  _args,
  ctx
) => {
  return ctx.prisma.post.findMany({
    include: {
      author: true,
    },
  });
};
