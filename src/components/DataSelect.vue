<template>
  <div class="grid grid-cols-3 gap-2" v-for="(item, index) in dataselect.data" :key="index" :id="`id${item.position}`">
    <div class="text-white w-full md:w-1/3 px-1 mb-3 md:mb-0 col-span-3">
      <b>{{item.type.toUpperCase()}}:</b>
      <br>Nome: {{item.name}} - (x: {{item.x}} - y: {{item.y}})
    </div>
    <input id="position" type="hidden" :value="index">
    <div class="grid grid-cols-2 inline">
      <button type="button" @click="updateValue(item.position)" :id="`edit${item.position}`"
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Editar
      </button>
      <button type="button" @click="deleteValue(index)"
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
        Excluir
      </button>
    </div>
  </div>
  <div v-if="this.isEditable">
    <div class="mb-4 border-solid border-2 border-sky-500 rounded px-2 py-2 bg-white">
      <div class="flex items-center mb-4" v-if="dataselect.data[position].type === `polilinha`">
        <input id="polygn" type="checkbox" v-model="checked"
          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="polygn-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Polígono</label>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0" v-for="(item, index) in inputs.data" :key="index">
          <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" :for="item.inputId">
            {{item.labelText}}
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            :id="`${item.inputId}`" type="number" :value="item.value">
        </div>
      </div>
      <div class="w-full md:w-1/3">
        <button type="button" @click="saveCoordinates()"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Desenhar</button>
      </div>
    </div>
  </div>
</template>

<script>
import emiter from '../main';
import { inputs } from '../constants';

export default {
  name: "DataSelect",
  props: ['labelText', 'inputId',],
  data() {
    return {
      dataselect: {
        "data": []
      },
      data: {},
      isEditable: false,
      position: null,
      inputs,
      checked: false,
    };
  },
  methods: {
    updateValue(position) {
      if (this.isEditable === false) {
        this.isEditable = true;
        this.position = position;
      }
    },
    deleteValue(index) {
      const element = document.getElementById(`id${index}`);
      element.remove();
      this.dataselect.data.splice(index, 1);
    },
    saveCoordinates() {
      this.dataselect.data[this.position].x = document.getElementById('X').value;
      this.dataselect.data[this.position].y = document.getElementById('Y').value;
      this.dataselect.data[this.position].isPolygn = this.checked;
      emiter.emit('draw', this.dataselect.data[this.position]);
      const editButton = document.getElementById(`edit${this.position}`);
      editButton.remove();

      this.isEditable = false;
    },
  },
  mounted() {
    emiter.on("add-object", value => {
      this.dataselect.data.push({ name: value[1], type: value[0], isPolygn: this.checked, x: 0, y: 0, position: this.dataselect.data.length });
    });
  },
}
</script>

<style>

</style>