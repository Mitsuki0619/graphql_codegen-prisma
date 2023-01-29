import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/graphql/schema/schema.graphql",
  generates: {
    "src/generated/graphql.ts": {
      config: {
        mapperTypeSuffix: "Model",
        contextType: "@/context#Context",
        mappers: {
          Post: "@prisma/client/index#Post",
          User: "@prisma/client/index#User"
        }
      },
      plugins: ["typescript", "typescript-resolvers"],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
