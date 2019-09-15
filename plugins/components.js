import Vue from "vue";
import ddMenuButton from "~/components/ui/dd-menu-button.vue";
import ddDrawer from "~/components/layouts/dd-drawer";
import ddSearchButton from "~/components/layouts/dd-search-button";
import ddBackButton from "~/components/layouts/dd-back-button";
import ddNewButton from "~/components/layouts/dd-new-button";
import ddAppBarExtension from "~/components/layouts/dd-app-bar-extension";

Vue.component("dd-menu-button", ddMenuButton);
Vue.component("dd-drawer", ddDrawer);
Vue.component("dd-search-button", ddSearchButton);
Vue.component("dd-back-button", ddBackButton);
Vue.component("dd-new-button", ddNewButton);
Vue.component("dd-app-bar-extension", ddAppBarExtension);
