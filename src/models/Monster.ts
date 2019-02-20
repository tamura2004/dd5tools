import MonsterInfo from '@/models/MonsterInfo';
import { MountOptions } from '@vue/test-utils';

export default class Monster {
    public name?: string;
    public size?: string;
    public type?: string;
    public alignment?: string;
    public ac?: number;
    public maxHp?: number;
    public mv?: string;
    public ability: number[] = [];
    public exp?: number;
    public attributes: string[] = [];
    public actions: string[] = [];
    public specials: string[] = [];

    public hp?: number;
    public initiative?: number;
    public gold?: number;

    constructor(info: MonsterInfo, template?: MonsterInfo) {
        Object.assign(this, info);
    }
}