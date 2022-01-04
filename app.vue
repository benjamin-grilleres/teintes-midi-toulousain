<template>
  <div class="flex flex-col justify-center items-center h-screen border border-black mx-auto" style="width: 95%;">
    <div style="width: 85%">
      <img src="/tuiles/rouge-vieilli.png" class="toit w-full object-cover mx-auto" />
      <div class="maison border border-black w-full flex overflow-hidden" :style="`background: url(${theme.enduit})`">
        <Fenetre class="fenetre-cuisine"></Fenetre>
        <Porte class="porte-entree"></Porte>
        <Fenetre class="fenetre-sdb no-volets"></Fenetre>
        <Fenetre class="fenetre-chbr"></Fenetre>
        <Garage class="garage"></Garage>
      </div>    
    </div >
    <div style="width: 85%" class="mt-16">
      
      <div class="enduit-principal mb-8">
        <label class="mr-8"><b>Couleur enduit principal</b></label>
        <display-select 
        v-model="theme.enduit" 
        :options="listeEnduits" 
        prop-value="src">
        <template v-slot:default="{ option }">
          <div class="flex items-center">
            <img :src="option.src" class="w-12 mr-2" />
            {{ option.ref }}
          </div>
        </template>
      </display-select >
      </div>
      <div class="enduit-secondaire mb-8">
        <label class="mr-8"><b>Couleur enduit secondaire</b></label>
        <display-select 
          v-model="theme.contour" 
          :options="listeEnduits" 
          prop-value="src">
          <template v-slot:default="{ option }">
            <div class="flex items-center">
              <img :src="option.src" class="w-12 mr-2" />
              {{ option.ref }}
            </div>
          </template>
        </display-select >
      </div>
      <div class="couleur-fenetres mb-8">
        <label class="mr-8"><b>Couleur fenêtres</b></label>
        <display-select 
          v-model="theme.fenetres" 
          :options="couleursFenetres" 
          prop-value="value">
          <template v-slot:default="{ option }">
            <div class="flex items-center">
              <div :style="`background: ${option.value}`" class="w-10 h-10 mr-2" />
              {{ option.ref }}
            </div>
          </template>
        </display-select >
      </div>
      <div class="couleur-volets mb-8">
        <label class="mr-8"><b>Couleur volets</b></label>
        <display-select 
          v-model="theme.volets" 
          :options="couleursVolets" 
          prop-value="value">
          <template v-slot:default="{ option }">
            <div class="flex items-center">
              <div :style="`background: ${option.value}`" class="w-10 h-10 mr-2" />
              {{ option.ref }}
            </div>
          </template>
        </display-select >
      </div>
      <div class="couleur-garage">
        <label class="mr-8"><b>Couleur porte/garage</b></label>
        <display-select 
          v-model="theme.porteEtGarage" 
          :options="couleursGarage" 
          prop-value="value">
          <template v-slot:default="{ option }">
            <div class="flex items-center">
              <div :style="`background: ${option.value}`" class="w-10 h-10 mr-2" />
              {{ option.ref }}
            </div>
          </template>
        </display-select>
      </div>
    </div >
  </div >
</template>

<script setup>
  import '@/assets/css/main.css'

  const theme = ref({
    porteEtGarage: '#b7a88c',
    fenetres: '',
    volets: '#cbc4b1',
    enduit: '/enduits/1030-Y15R.png',
    contour: '/enduits/2030-Y10R.png'
  })

  const listeEnduits = getEnduits()
  const listeCouleurs = getCouleurs()
  const couleursVolets = listeCouleurs.filter( couleur => couleur.type.includes('volets'))
  const couleursFenetres = listeCouleurs.filter( couleur => couleur.type.includes('fenetres'))
  const couleursGarage = listeCouleurs.filter( couleur => couleur.type.includes('garage'))

  const changeCouleurEnduitPrincipal = (e) => {
    theme.value.enduit = e.target.value
  }
  const changeCouleurEnduitSecondaire = (e) => {
    theme.value.contour = e.target.value
  }
  const changeCouleurFenetres = (e) => {
    theme.value.fenetres = e.target.value
  }
  const changeCouleurVolets = (e) => {
    theme.value.volets = e.target.value
  }
  const changeCouleurGarage = (e) => {
    theme.value.porteEtGarage = e.target.value
  }

  provide('theme', theme)
</script >

<style scoped lang="postcss">
  .toit {
    height: 200px;
    transform: skew(-15deg);
  }
  .maison {
    height: 400px;
    margin-left: -27px;
    padding-top: 50px;
  }
  
  .fenetre-cuisine {
    width: 120px;
    height: 180px;
    margin-left: 150px;
  }

  .porte-entree {
    height: 100%;
    width: 200px;
    margin-left: 200px;
  }

  .fenetre-sdb {
    width: 100px;
    height: 140px;
    margin-left: 120px;
  }

  .fenetre-chbr {
    width: 140px;
    height: 200px;
    margin-left: 200px;
  }

  .garage {
    width: 450px;
    height: 100%;
    margin-left: 160px;
  }

</style>
