<template lang="pug">
  h1 player/_id
    v-tabs
      v-tab(to="weapons") weapons
      v-tab(to="memo") memo
      v-tab(to="feats") feats
      v-tab(to="spells") spells
    nuxt-child
</template>
