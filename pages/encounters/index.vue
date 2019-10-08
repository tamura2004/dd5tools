<template lang="pug">
  v-row
    v-col(:cols="4" v-for="encounter of $read('encounters')" :key="encounter.id")
      dd-encounter-memo(:encounter="encounter")
</template>