<template>
  <div class="mb-4 border-solid border-2 border-sky-500 rounded px-2 py-2 bg-white">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0" v-for="item in inputs.data">
        <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" :for="item.inputId">
          {{item.labelText}}
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          :id="inputId" type="number" :value="item.value">
      </div>
    </div>
    <div class="w-full md:w-1/3">
      <button type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Salvar</button>
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