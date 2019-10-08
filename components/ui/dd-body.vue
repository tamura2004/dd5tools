<template lang="pug">
  div(:class="$vuetify.breakpoint.smAndUp ? 'headline' : 'body-2'")
    slot
</template>
