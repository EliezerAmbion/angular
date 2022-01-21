import { CountLikes } from './count-likes';

let user1 = new CountLikes(10, true);
user1.count();
console.log(
  `Likes Count: ${user1.likesCount}. Is clicked?: ${user1.isClicked}`
);
