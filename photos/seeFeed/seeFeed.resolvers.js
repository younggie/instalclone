import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
//로그인 사용자가 팔로우하고 있는 사용자들의 feed 보기
export default {
  Query: {
    seeFeed: protectedResolver((_, __, { loggedInUser }) =>
      client.photo.findMany({
        where: {
          OR: [
            {
              user: {
                followers: {
                  some: {
                    id: loggedInUser.id,
                  },
                },
              },
            },
            {
              userId: loggedInUser.id,
            },
          ],
        },
        orderBy: {
          createdAt: "desc",
        },
      })
    ),
  },
};
