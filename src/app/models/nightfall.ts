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
