import { Plugin } from "@nuxt/types";

declare module "vue/types/vue" {
  interface Vue {
    $title(title: string): void;
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $title(title: string): void;
  }
}

const setTitle: Plugin = ({ store }, inject) => {
  inject("title",  (title: string) => store.dispatch("nav/title", title));
}

export default setTitle;
