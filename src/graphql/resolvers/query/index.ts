import { QueryResolvers } from "../../../generated/graphql";

export const Query: QueryResolvers = {
  /**
   * 全ポスト取得
   */
  allPosts: async(_parent, _args, ctx) => {
    return ctx.prisma.post.findMany();
  },
};
