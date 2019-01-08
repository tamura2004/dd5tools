import { ADVANCEMENT, RACE_ABILITY } from '@/data/DATA';

export class Player {
    public name?: string = undefined;
    public characterName?: string = undefined;
    public klass?: string = undefined;
    public background?: string = undefined;
    public race?: string = undefined;
    public alignment?: string = undefined;
    public exp?: number = undefined;
    public baseAbility: number[] = [];
    public skills: string[] = [];
    public weapons: string[] = [];
    public armor?: string = undefined;

    constructor(init: Partial<Player>) {
        Object.assign(this, init);
    }

    public get level(): number | undefined {
        if (typeof this.exp !== 'undefined') {
            return ADVANCEMENT.lookupOver(this.exp);
        }
    }

    public get ability(): number[] | undefined {
        if (typeof this.race !== 'undefined') {
            const abilityBonus = RACE_ABILITY.get(this.race);
            if (typeof abilityBonus !== 'undefined') {
                return abilityBonus.map((a, i) => a + this.baseAbility[i]);
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
