<template lang="pug">
  dd-form(title="武器データ編集" @click="save")
</template>

<script>
import ddForm from "~/components/pages/weapon/dd-form.vue";

export default {
  components: {
    ddForm,
  },
  asyncData({ params }) {
    const id = params.id;
    return { id };
  },
  created() {
    this.$weapon.data = this.$read("weapons", this.id);
  },
  methods: {
    save() {
      this.$write("weapons", this.$weapon);
      this.$router.push("/weapons");
    },
  },
};
</script>
