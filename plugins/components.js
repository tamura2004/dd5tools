import Vue from "vue";
import ddMenuButton from "~/components/ui/dd-menu-button.vue";
import ddDrawer from "~/components/layouts/dd-drawer";
import ddSearchButton from "~/components/layouts/dd-search-button";
import ddBackButton from "~/components/layouts/dd-back-button";
import ddNewButton from "~/components/layouts/dd-new-button";
import ddAppBarExtension from "~/components/layouts/dd-app-bar-extension";
import ddTenkey from "~/components/ui/dd-tenkey";
import ddMonsterCard from "~/components/layouts/dd-monster-card";
import ddEncounterCard from "~/components/layouts/dd-encounter-card";

import ddEnvironmentCard from "~/components/layouts/dd-environment-card";
Vue.component("dd-environment-card", ddEnvironmentCard);

Vue.component("dd-menu-button", ddMenuButton);
Vue.component("dd-drawer", ddDrawer);
Vue.component("dd-search-button", ddSearchButton);
Vue.component("dd-back-button", ddBackButton);
Vue.component("dd-new-button", ddNewButton);
Vue.component("dd-app-bar-extension", ddAppBarExtension);
Vue.component("dd-tenkey", ddTenkey);
Vue.component("dd-monster-card", ddMonsterCard);
Vue.component("dd-encounter-card", ddEncounterCard);
