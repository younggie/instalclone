import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";

// 참고:  https://www.graphql-tools.com/docs/generate-schema
// import {
//     loadFilesSync,
//     makeExecutableSchema,
//     mergeResolvers,
//     mergeTypeDefs,
//   } from "graphql-tools";

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const loadedResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.js`);

export const typeDefs = mergeTypeDefs(loadedTypes);
export const resolvers = mergeResolvers(loadedResolvers);

//const schema = makeExecutableSchema({ typeDefs, resolvers });

//export default schema;
