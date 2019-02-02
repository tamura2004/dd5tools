export class Weapon {
    constructor(
        public name: string,
        public category: string,
        public price: string,
        public damage: string,
        public type: string,
        public weight: string,
        public range: string,
        public special: string,
    ) {}

    public get description(): string {
        let msg: string = `${this.category}：${this.price}/${this.weight}：${this.damage}[${this.type}]`;
        if (this.range !== '') {
            msg += `：射程${this.range}フィート`;
        }
        if (this.special !== '') {
            msg += `：${this.special}`;
        }
        return msg;
    }

    public get rangeString(): string {
        if (this.range !== '') {
            return `射程：${this.range}フィート`;
        } else {
            return '';
        }
    }
}
