<template>
  <div>
    <NuxtLayout name="header"></NuxtLayout>
    <slot />
  </div>
</template>
<style scoped lang="scss">
.header {
  height: 80px;
  background-color: #000000;
}
</style>