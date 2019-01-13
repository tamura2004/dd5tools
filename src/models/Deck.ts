export default class Deck<T> extends Array<T> {
    public sample(): T {
        return this[Math.floor(Math.random() * this.length)];
    }
}
