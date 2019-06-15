export default class Guild {
    public static collectionName: string = 'guilds';

    public static form() {
        return {
            name: '',
            description: '',
            exp: 0,
        };
    }

    public name: string = '';
    public description: string = '';
    public exp: number = 0;

    constructor(init: Partial<Guild>) {
        Object.assign(this, init);
    }
}
