import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/graphql/schema/schema.graphql",
  generates: {
    "src/generated/graphql.ts": {
      config: {
        contextType: "@/context#Context",
        mapperTypeSuffix: "Model",
        mappers: {
          Post: "@prisma/client/index#Post",
          User: "@prisma/client/index#User"
        }
      },
      plugins: ["typescript", "typescript-resolvers"],
    }
  }
};

export default config;
