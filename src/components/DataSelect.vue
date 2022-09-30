<template>
  <label for="countries_multiple" class="bg-white text-sm font-medium text-gray-900 dark:text-gray-400">Select an
    option</label>
  <select multiple id="countries_multiple"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option class="bg-white" selected>Choose countries</option>
    <option class="bg-white" value="US">United States</option>
    <option class="bg-white" value="FR">France</option>
    <option class="bg-white" value="DE">Germany</option>
    <option class="bg-white" value="CA">Canada</option>
  </select>
</template>

<script>
export default {
name: 'DataSelect'
}
</script>

<style>

</style>