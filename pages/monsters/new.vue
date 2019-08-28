<template lang="pug">
  dd-form(title="新規登録" @click="save")
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ddForm from "~/components/pages/monster/dd-form.vue";

export default {
  components: {
    ddForm,
  },
  created() {
    this.clear();
  },
  computed: mapGetters("form/monster", ["data"]),
  methods: {
    ...mapActions("form/monster", ["clear"]),
    ...mapActions("monsters", ["add"]),
    async save() {
      await this.add(this.data);
      this.$router.push("/monsters");
    },
  },
};
</script>
