import { ref } from 'vue'

const couleurs = [
  {
    ref: 'Gamme des ocres jaunes - 1010 Y',
    value: '#ffe5ad',
    type: ['fenetres']
  },
  {
    ref: 'Gamme des ocres jaunes - 2005 Y10R',
    value: '#cbc4b1',
    type: ['fenetres', 'volets']
  },
  {
    ref: 'Gamme des ocres jaunes - 2040 Y10R',
    value: '#e8a547',
    type: ['volets']
  },
  {
    ref: 'Gamme des ocres jaunes - 2050 Y10R',
    value: '#eb9d32',
    type: ['volets']
  },
  {
    ref: 'Gamme des ocres jaunes - 3010 Y10R',
    value: '#b7a88c',
    type: ['garage']
  },
  {
    ref: 'Gamme des ocres jaunes - 3050 Y10R',
    value: '#be7b28',
    type: ['garage']
  },
  {
    ref: 'Gamme des ocres jaunes - 6030 Y10R',
    value: '#715527',
    type: ['garage']
  },
  {
    ref: 'Gamme des bleus - 1010 R90B',
    value: '#c6d5df',
    type: ['fenetres']
  },
  {
    ref: 'Gamme des bleus - 1020 R90B',
    value: '#b0cde0',
    type: ['fenetres', 'volets']
  },
  {
    ref: 'Gamme des bleus - 2020 R90B',
    value: '#98b2c6',
    type: ['fenetres', 'volets']
  },
  {
    ref: 'Gamme des bleus - 2030 R90B',
    value: '#80a6c3',
    type: ['volets']
  },
  {
    ref: 'Gamme des bleus - 3020 R90B',
    value: '#7f98ae',
    type: ['garage']
  },
  {
    ref: 'Gamme des bleus - 3030 R90B',
    value: '#698fb0',
    type: ['garage']
  },
  {
    ref: 'Gamme des bleus - 5020 R90B',
    value: '#556e83',
    type: ['garage']
  },
  {
    ref: 'Gamme des rouges - 2502 R',
    value: '#bdb9b9',
    type: ['fenetres', 'volets']
  },
  {
    ref: 'Gamme des rouges - 3560 Y90R',
    value: '#882626',
    type: ['volets']
  },
  {
    ref: 'Gamme des rouges - 4050 Y90R',
    value: '#89312e',
    type: ['volets']
  },
  {
    ref: 'Gamme des rouges - 4550 Y90R',
    value: '#762627',
    type: ['garage']
  },
  {
    ref: 'Gamme des rouges - 5040 Y90R',
    value: '#732e2d',
    type: ['garage']
  },
  {
    ref: 'Gamme des rouges - 5040 Y90R',
    value: '#652c29',
    type: ['garage']
  }
]

const enduits = [
  {
    ref: '1005-Y20R - Beige clair',
    src: '/enduits/1005-Y20R.png'
  },
  {
    ref: '3010-Y20R - Grège',
    src: '/enduits/3010-Y20R.png'
  },
  {
    ref: '2010-Y20R - Beige',
    src: '/enduits/2010-Y20R.png'
  },
  {
    ref: '2020-Y25R - Terre',
    src: '/enduits/2020-Y25R.png'
  },
  {
    ref: '1030-Y15R - Jaune',
    src: '/enduits/1030-Y15R.png'
  },
  {
    ref: '2030-Y10R - Paille',
    src: '/enduits/2030-Y10R.png'
  }
]

const currentTheme = ref({
    porteEtGarage: '',
    fenetres: '',
    volets: '',
    enduit: '',
    contour: ''
})

export const getEnduits = () => enduits;
export const getCouleurs = () => couleurs;

export const initCurrentTheme = () => {
  return currentTheme
}


export const getColorPropOrTheme = (colorProp, colorTheme) => {
  if ( colorProp ) {
    return colorProp;
  } else {
    return currentTheme.value[colorTheme]
  }
}
