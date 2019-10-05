export class Chart {
  constructor(init) {
    this.init = (typeof init === "object" && init !== null) ? init : [];
  }
  get state() {
    return () => ({
      values: this.init,
    });
  }
  get getters() {
    return {
      collection: state => state.values,
    };
  }
}
