<template>
    <div class="flex flex-auto -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-city" type="text" placeholder="Nome">
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <div class="relative">
          <select id="large"
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option class="bg-white" selected>Tipo</option>
            <option class="bg-white" v-for="item, index in select.data" :key="index" :value="item.value">{{item.type}}
            </option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <button type="button"
          class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Adicionar
        </button>
      </div>
    </div>
</template>

<script>
import { select } from '../constants';

export default {
  name: 'Select',
  data() {
    return {
      select: select
    }
  },
  mounted() {
  }
}
</script>

<style>

</style>