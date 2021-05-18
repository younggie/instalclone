import { gql } from "apollo-server";

export default gql`
  type Query {
    seePhotoLikedUsers(id: Int!): [User]
  }
`;
