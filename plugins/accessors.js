import { accessors as session } from "~/store/session";
import { accessors as nav } from "~/store/nav";
import { accessors as monster } from "~/store/form/monster";
import { accessors as weapon } from "~/store/form/weapon";

export default ({ store }, inject) => {
  inject("session", session("session", store));
  inject("nav", nav("nav", store));
  inject("monster", monster("form/monster", store));
  inject("weapon", weapon("form/weapon", store));
};
