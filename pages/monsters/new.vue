<template lang="pug">
  dd-form(title="新規登録" @click="save")
</template>

<script>
import ddForm from "~/components/pages/monster/dd-form.vue";

export default {
  components: {
    ddForm,
  },
  created() {
    this.$monster.data = null;
  },
  methods: {
    save() {
      this.$write("monsters", this.$monster.data);
      this.$router.push("/monsters");
    },
  },
};
</script>
