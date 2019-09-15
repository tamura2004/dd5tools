<template lang="pug">
  v-tabs(background-color="transparent")
    v-tab(v-for="item in $nav.items" :key="item.text" @click="$nav.query = item.value") {{ item.text }}
</template>
