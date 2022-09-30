<template>
  <div class="grid grid-cols-3 gap-2" v-for="item in dataselect.data" :key="item.name">
    <div class="text-white w-full md:w-1/3 px-1 mb-3 md:mb-0 col-span-3">
      Nome: {{item.name}} - (x: {{item.x}} - y: {{item.y}})
    </div>
    <div class="grid grid-cols-2 inline">
      <button type="button"
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Editar
      </button>
      <button type="button"
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
        Excluir
      </button>
    </div>
  </div>
  <div v-if="dataselect.data.length !== 0">
    <Inputs />
  </div>
</template>

<script>
import emiter from '../main';
import Inputs from './Inputs.vue';

export default {
  name: "DataSelect",
  components: { Inputs },
  data() {
    return {
      dataselect: {
        "data": []
      }
    };
  },
  mounted() {
    emiter.on("add-object", (value) => {
      this.dataselect.data.push({ name: value[1], type: value[0], x: 0, y: 0 });
      console.log(this.dataselect.data);
    });
  },
}
</script>

<style>

</style>