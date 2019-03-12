interface Named {
  name: string;
}

type Filter<T> = (t: T) => boolean;

export default class Item {
  public static from<T extends Named>(map: Map<string, T>, filter?: Filter<T>): Item[] {
    const items = [];
    for (const [key, value] of map) {
      if (filter === undefined || filter(value)) {
        items.push(new this({ id: key, name: value.name }));
      }
    }
    return items;
  }

  public id!: string;
  public name!: string;

  constructor(init: Required<Item>) {
    Object.assign(this, init);
  }
}
