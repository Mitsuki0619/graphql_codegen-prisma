import { MutationResolvers } from "@Generated/graphql";

export const createUser: MutationResolvers["createUser"] = (
  _parent,
  { email, name },
  ctx
) => {
  return ctx.prisma.user.create({
    data: {
      email,
      name,
    },
  });
};
