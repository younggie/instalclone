import client from "../../client";

export default {
  Query: {
    seePhotoLikedUsers: async (_, { id }) => {
      const likes = await client.like.findMany({
        where: { photoId: id },
        select: { user: true },
      });
      return likes.map((like) => like.user);
    },
  },
};
