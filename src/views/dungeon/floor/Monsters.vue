<template lang="pug">
    ListHeader(title="モンスター" add="#")
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import ListHeader from '@/components/ListHeader.vue';
  import Floor from '@/models/Floor.vue';

  @Component({
    components: {
      ListHeader,
    },
  })
  export default class DungeonFloorMonsters extends Vue {
    @Prop() private id!: string;

    private get floor(): Floor | undefined {
      return this.$store.state.floors[this.id];
    }
  }
</script>

<style lang="stylus" scoped>
</style>
