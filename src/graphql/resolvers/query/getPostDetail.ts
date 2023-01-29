import { QueryResolvers } from "@/src/generated/graphql";

export const getPostDetail: QueryResolvers["getPostDetail"] = (
  _parent,
  { postId },
  ctx
) => {
  return ctx.prisma.post.findUnique({
    where: {
      id: postId,
    },
    include: {
      author: true
    }
  });
};
