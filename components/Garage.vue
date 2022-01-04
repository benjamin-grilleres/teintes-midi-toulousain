<template>
  <div>
    <div class="encadrement" :style="`background: url(${theme.contour})`">
      <div class="garage2" :style="'background:' + theme.porteEtGarage"></div>
    </div>
  </div>
</template>
<script setup>
  const theme = inject('theme')
</script>
<style scoped lang="postcss">
  .encadrement {
    @apply flex items-center justify-center h-full;
  }
  .garage2 {
    width: 80%;
    height: 100%;
    margin-top: 15%;
  }
</style>