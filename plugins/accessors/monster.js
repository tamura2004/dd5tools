import { accessors } from "~/store/form/monster";

export default ({ store }, inject) => {
  inject("monster", accessors("form/monster", store));
};
