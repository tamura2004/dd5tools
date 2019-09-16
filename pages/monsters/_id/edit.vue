<template lang="pug">
  dd-form(title="編集" @click="save")
</template>

<script>
import ddForm from "~/components/pages/monster/dd-form.vue";

export default {
  components: {
    ddForm,
  },
  asyncData({ params }) {
    const id = params.id;
    return { id };
  },
  created() {
    this.$monster.data = this.$read("monsters", this.id);
  },
  methods: {
    save() {
      this.$write("monsters", this.$monster);
      this.$router.push("/monsters");
    },
  },
};
</script>
