require("dotenv").config();
import express from "express";
import logger from "morgan";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";
import { getUser, protectResolver } from "./users/users.utils";

const PORT = process.env.PORT;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    return {
      // user id 와 protectResolver 함수를 return
      loggedInUser: await getUser(req.headers.token),
      protectResolver,
    };
  },
});

const app = express();
//app.use(logger("tiny"));
app.use("/static", express.static("uploads"));

server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
  console.log(`🦜 Server is running on http://localhost:${PORT} 👀`);
});
