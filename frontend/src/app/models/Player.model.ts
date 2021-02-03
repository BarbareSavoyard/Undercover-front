import { User } from './User.model';

export class Player {
  userInfo: User = new User();
  words: Array<string> = [];
  isOwner: boolean = false;
  vote: boolean = true;
  word: string = '';
  voteFor: Array<Number> = [];
  score: Number = 0;
}