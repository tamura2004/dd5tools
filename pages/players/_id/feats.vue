<template lang="pug">
  h5 {{ title }}
</template>

<script>
export default {
  asyncData(context) {
    const title = context.route.params;
    return { title }
  }
}
</script>
