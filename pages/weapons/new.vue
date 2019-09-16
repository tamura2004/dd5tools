<template lang="pug">
  dd-form(title="武器データ登録" @click="save")
</template>

<script>
import ddForm from "~/components/pages/weapon/dd-form.vue";

export default {
  components: {
    ddForm,
  },
  created() {
    this.$weapon.data = null;
  },
  methods: {
    save() {
      this.$write("weapons", this.$weapon.data);
      this.$router.push("/weapons");
    },
  },
};
</script>
