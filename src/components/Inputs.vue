<template>
  <div class="mb-4">
    <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
        X
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="x" type="number" value="0">
    </div>
    <div class="w-full md:w-1/3 px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
        Y
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="y" type="number" value="0">
    </div>
  </div>
  <div class="w-full md:w-1/3">
    <button type="button"
      class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
      Inserir
    </button>
    <button type="button"
      class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
      Salvar
    </button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Inputs',
  props: ['labelText', 'inputId'],

}
</script>

<style>

</style>