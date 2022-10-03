<template>
  <div class="grid grid-cols-3 gap-2" v-for="(item, index) in dataselect.data" :key="index" :id="`id${index}`">
    <div class="text-white w-full md:w-1/3 px-1 mb-3 md:mb-0 col-span-3">
      Nome: {{item.name}} - (x: {{item.x}} - y: {{item.y}})
    </div>
    <div class="grid grid-cols-2 inline">
      <button type="button" @click="updateValue()"
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Editar
      </button>
      <button type="button"
      @click="deleteValue(index)"
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
        Excluir
      </button>
    </div>
  </div>
  <div v-if="this.isEditable && this.dataselect.data.lenght !== 0">
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
      },
      isEditable: false,
    };
  },
  methods: {
    updateValue() {
      if (this.isEditable === false) this.isEditable = true;
      else this.isEditable = false;
    },
    deleteValue(index){
      const element = document.getElementById(`id${index}`);
      element.remove();
      this.dataselect.data.splice(index, 1);
    }
  },
  mounted() {
    emiter.on("add-object", (value) => {
      this.dataselect.data.push({ name: value[1], type: value[0], x: 0, y: 0 });
    });
  },
}
</script>

<style>

</style>