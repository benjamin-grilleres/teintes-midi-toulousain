<template>
  <div class="display-select">
    <div 
      v-for="(option,key) in options" 
      :key="key" 
      class="option"
      :class="{
        'active': modelValue === option[props.propValue]
      }" 
      @click="setOption(option)">
      <slot :option="option"></slot>
    </div>
  </div>
</template>
<style scoped lang="postcss">
  .display-select {
    @apply flex flex-wrap mt-3;
  }
  .display-select .option {
    @apply py-2 px-3 mx-4 border-2 border-gray-700 mb-2;
  }
  .display-select .option.active {
    @apply bg-gray-200; 
  }
</style>
<script setup>
  const props = defineProps({
    options: Array,
    modelValue: String,
    propValue: String
  })
  const emit = defineEmits()
  const setOption = (option) => {
    emit('update:modelValue', option[props.propValue])
  }
  
</script>