<template>
  <div>
    <div class="encadrement" :style="`background: url(${theme.contour})`">
      <div class="fenetre" :style="'border-color:' + theme.fenetres">
        <div class="volet-gauche" :style="`border-color:${theme.volets};background:${theme.volets}`"></div>
        <div class="volet-droit" :style="`border-color:${theme.volets};background:${theme.volets}`"></div>
      </div>
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
  .fenetre {
    @apply border-8 h-full;
    background: rgb(208 211 205);
    position: relative;
    width: 80%;
    height: 80%;
  }

  .fenetre:not(.no-volets) .volet-gauche, .fenetre:not(.no-volets) .volet-droit{
      position: absolute;
      top: 0;
      height: 100%;
      width: calc(100% / 2);
      border: 2px solid gray;
      content: '';
  }

  .fenetre:not(.no-volets) .volet-gauche {
    left: -57%;
  }

  .fenetre:not(.no-volets) .volet-droit {
    right: -57%;
  }
  
</style>