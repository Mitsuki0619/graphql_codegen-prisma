import { QueryResolvers } from "@/src/generated/graphql";

export const getUser: QueryResolvers["getUser"] = (
  _parent,
  { authorId },
  ctx
) => {
  return ctx.prisma.user.findUnique({
    where: {
      id: authorId,
    },
    include: {
      posts: true
    }
  });
};
