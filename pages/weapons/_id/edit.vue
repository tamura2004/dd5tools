<template lang="pug">
  dd-form(title="武器データ編集" @click="save")
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
    const weapon = this.weapon(this.id);
    if (weapon === undefined) {
      this.$router.push("/weapons/new");
    } else {
      this.edit(this.weapon(this.id));
    }
  },
  computed: {
    ...mapGetters("weapons", ["weapon"]),
    ...mapGetters("form/weapon", ["data"]),
  },
  methods: {
    ...mapActions("form/weapon", ["edit"]),
    ...mapActions("weapons", ["modify"]),
    async save() {
      const { id, data } = this;
      await this.modify({ id, data });
      this.$router.push("/weapons");
    },
  },
};
</script>
