import { MutationResolvers } from "@Generated/graphql";

export const createPost: MutationResolvers["createPost"] = (
  _parent,
  { title, content, authorId },
  ctx
) => {
  return ctx.prisma.post.create({
    data: {
      title,
      content,
      authorId,
    },
  });
};
