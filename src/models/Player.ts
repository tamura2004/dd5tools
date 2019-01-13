import { ADVANCEMENT, RACE_ABILITY } from '@/data/DATA';

function modify(ability: number): number {
    return Math.floor((ability - 10) / 2);
}

export class Player {
    public _id: {$oid: string} = {$oid: ''};
    public name?: string = undefined;
    public characterName?: string = undefined;
    public klass?: string = undefined;
    public level?: number = undefined;
    public background?: string = undefined;
    public race?: string = undefined;
    public alignment?: string = undefined;
    public exp?: number = undefined;
    public baseAbility: number[] = [];
    public skills: string[] = [];
    public weapon: string[] = [];
    public armor?: string = undefined;
    public memo?: string;

    constructor(init: Partial<Player>) {
        Object.assign(this, init);
    }

    // public get level(): number | undefined {
    //     if (typeof this.exp !== 'undefined') {
    //         return ADVANCEMENT.lookupOver(this.exp);
    //     }
    // }

    public get ability(): string[] | undefined {
        if (typeof this.race !== 'undefined') {
            const abilityBonus = RACE_ABILITY.get(this.race);
            if (typeof abilityBonus !== 'undefined') {
                return abilityBonus.map((a, i) => {
                    const val = a + this.baseAbility[i];
                    if (val >= 10) {
                        return `${val}(+${modify(val)})`;
                    } else {
                        return `${val}(${modify(val)})`;
                    }
                });
            }
        }
    }

    public rollAbility(): void {
        this.baseAbility = [];
        for (let i = 0; i < 6; i++) {
            this.baseAbility.push(Math.floor(Math.random() * 16 + 3));
        }
    }
}
