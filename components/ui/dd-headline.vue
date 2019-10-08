<template lang="pug">
  span(:class="$vuetify.breakpoint.smAndUp ? 'display-1' : 'title'")
    slot
</template>
