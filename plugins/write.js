/**
 * write("banks", data) -> dispatch("banks/add", data)
 * write("banks", { id, data }) -> dispatch("banks/modify", { id, data })
 */

export default ({ store }, inject) => {
  inject("write", (name, data) => {
    const id = data.id || data._id;
    if (id) {
      store.dispatch(`${name}/modify`, { id, data });
    } else {
      store.dispatch(`${name}/add`, data);
    }
  });
};
