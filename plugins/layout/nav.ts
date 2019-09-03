import { Plugin } from "@nuxt/types";

interface Config {
  title: string;
  search?: boolean;
  extension?: boolean;
  add?: boolean;
  query?: string;
  path?: string;
  items?: {
    text: string,
    value: string | null,
  }[];
  pages?: number;
  page?: number;
  drawer?: boolean;
}

declare module "vue/types/vue" {
  interface Vue {
    $nav(config: Config): void;
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $nav(config: Config): void;
  }
}

const setNav: Plugin = ({ store }, inject) => {
  inject("nav", (config: Config) => {
    store.dispatch("nav/set", config);
  });
};

export default setNav;
