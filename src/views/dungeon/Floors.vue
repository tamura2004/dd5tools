<template lang="pug">
  v-content
    ListHeader(title="階層" add="floorForm/new")
    v-list(two-line)
      template(v-for="(floor, key) in floors")
        template(v-if="floor.dungeonId === dungeonId")
          v-list-tile(:key="key")
            v-list-tile-action(@click="$router.push(`floorForm/${key}`)")
              v-btn(flat fab small icon)
                v-icon edit
            v-list-tile-content
              v-list-tile-title {{ floor.level }}.{{ floor.name }}
              v-list-tile-sub-title {{ floor.description }}
            v-list-tile-action(@click="$router.push(`floor/${key}`)")
              v-btn(flat fab small icon)
                v-icon arrow_forward_ios
          v-divider
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import Dungeon from '@/models/Dungeon.vue';
  import Floor from '@/models/Floor.vue';
  import ListHeader from '@/components/ListHeader.vue';

  @Component({
    components: {
      ListHeader,
    },
  })
  export default class DungeonFloors extends Vue {
    @Prop() private dungeonId!: string;

    private get dungeon(): Dungeon | undefined {
      return this.$store.state.dungeons[this.dungeonId];
    }
    private get floors(): { [key: string]: Floor } {
      return this.$store.state.floors;
    }
  }
</script>

<style lang="stylus" scoped>
</style>
