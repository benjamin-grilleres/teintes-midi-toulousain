<template>
  <div>
    <div class="encadrement" :style="`background: url(${theme.contour})`">
      <div class="porte" :style="'background:' + theme.porteEtGarage"></div>
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
  .porte {
    width: 70%;
    margin-top: 40%;
    @apply h-full;
  }
</style>