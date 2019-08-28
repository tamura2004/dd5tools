<template lang="pug">
  dd-form(title="編集" @click="save")
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
    const monster = this.monster(this.id);
    if (monster === undefined) {
      this.$router.push("/monsters/new");
    } else {
      this.edit(this.monster(this.id));
    }
  },
  computed: {
    ...mapGetters("monsters", ["monster"]),
  },
  methods: {
    ...mapActions("form/monster", ["edit"]),
    ...mapActions("monsters", ["modify"]),
    async save() {
      const { id, data } = this;
      await this.modify({ id, data });
      this.$router.push("/monsters");
    },
  },
};
</script>
