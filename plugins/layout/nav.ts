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
    store.dispatch("nav/title", config.title);
    store.dispatch("nav/search", config.search);
    store.dispatch("nav/extension", config.extension);
    store.dispatch("nav/add", config.add);
    store.dispatch("nav/query", config.query);
    store.dispatch("nav/path", config.path);
    store.dispatch("nav/items", config.items);
    store.dispatch("nav/pages", config.pages);
    store.dispatch("nav/page", config.page);
    store.dispatch("nav/drawer", config.drawer);
  });
};

export default setNav;
