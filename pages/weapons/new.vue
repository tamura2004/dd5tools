<template lang="pug">
  dd-form(title="武器データ登録" @click="save")
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ddForm from "~/components/pages/weapon/dd-form.vue";

export default {
  components: {
    ddForm,
  },
  created() {
    this.clear();
  },
  computed: mapGetters("form/weapon", ["data"]),
  methods: {
    ...mapActions("form/weapon", ["clear"]),
    ...mapActions("weapons", ["add"]),
    async save() {
      await this.add(this.data);
      this.$router.push("/weapons");
    },
  },
};
</script>
