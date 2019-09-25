/**
 * write("banks", data) -> dispatch("banks/add", data)
 * write("banks", { id, data }) -> dispatch("banks/modify", { id, data })
 */

export default ({ store }, inject) => {
  inject("write", (name, data) => {
    store.dispatch(`${name}/write`, data);
  });
};
