<template>
  <div class="mb-4">
    <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0" v-for="item in inputs.data">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" :for="item.inputId">
        {{item.labelText}}
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" :id="inputId" type="number" :value="item.value">
    </div>
  </div>
  <div class="w-full md:w-1/3">
    <button type="button"
      class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
      Inserir
    </button>
  </div>
  </div>
</template>

<script>
import { inputs } from '../constants';

export default {
  name: 'Inputs',
  props: ['labelText', 'inputId'],
  data() {
    return {
      inputs
    }
  }
}
</script>

<style>

</style>