import './destiny-public-milestone';
import { DestinyPublicMilestone } from './destiny-public-milestone';

export class Nightfall {
  name: string;
  desc: string;
  tiers: number[];
  modifiers: NameDesc[];
  challenges: NameDesc[];
  image: string;
}

export class NameDesc {
  name: string;
  desc: string;

  constructor(name: string, desc: string) {
      this.name = name;
      this.desc = desc;
  }
}

export interface BungieResponse {
  Response: DestinyPublicMilestone[];
  ErrorCode: number;
  ThrottleSeconds: number;
  ErrorStatus: string;
  Message: string;
  MessageData: string;
}
