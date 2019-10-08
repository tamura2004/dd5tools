<template lang="pug">
div
  dd-adventure-memo(:adventure="$adventure.data")
  dd-environment-memo.mt-2(:environment="$environment.data")
  dd-encounter-memo.mt-2(:encounter="$encounter.data")
</template>
