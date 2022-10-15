<template>
  <div class="grid grid-cols-1" v-if="dataselect.data.length > 0">
    <h2 class="text-white font-mono font-bold">Lista de objetos</h2>
    <ul>
      <li v-for="(item, index) in this.dataselect.data" :key="index" :id="`id-${index}`">
        <div class="flex flex-auto -mx-3 mb-2 border-solid border-2 border-sky-500 rounded px-2 py-2 bg-white">
          <div class="flex w-full justify-center items-center">
            <b>{{item.type.toUpperCase()}}:</b> - Nome: {{item.name}} - <div v-if="dataselect.data[position]" ><p v-for="n in dataselect.data[position].numberOfLines" :key="n">({{`x${n}`}}: {{item[`x${n}`]}} - {{`y${n}`}}: {{item[`y${n}`]}})</p></div>
          </div>

          <div class="flex flex-row w-full justify-center m-auto">
            <button type="button" @click="updateValue(item.position)" :id="`edit${item.position}`"
              class="flex justify-center items-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              Editar
            </button>
            <button type="button" @click="deleteValue(index)"
              class=" flex justify-center items-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              Excluir
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div v-if="this.isEditable">
    <div class="mb-4 border-solid border-2 border-sky-500 rounded px-2 py-2 bg-white">
      <div class="flex flex-wrap -mx-3 mb-6" v-for="n in dataselect.data[position].numberOfLines" :key="n">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0" v-for="(item, index) in inputs.data" :key="index">
          <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" :for="`${item.inputId}-${n}`">
            {{item.labelText}}
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            :id="`${item.inputId}-${n}`" type="number" :value="item.value">
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
      numberOfLines: [],
    };
  },
  methods: {
    dataselectIsEmpty() {
      console.log(this.dataselect.data)
    },
    updateValue(position) {
      if (this.isEditable === false) {
        this.isEditable = true;
        this.position = position;
      }
    },
    deleteValue(index) {
      this.dataselect.data.splice(index, 1);
      emiter.emit('clear-canvas', this.dataselect.data);
    },
    saveCoordinates() {
      for (let i = 1; i <= this.dataselect.data[this.position].numberOfLines; i++) {
        this.dataselect.data[this.position][`x${i}`] = document.getElementById(`X-${i}`).value;
        this.dataselect.data[this.position][`y${i}`] = document.getElementById(`Y-${i}`).value;
      }
      emiter.emit('draw', this.dataselect.data[this.position]);
      const editButton = document.getElementById(`edit${this.position}`);
      editButton.remove();
      this.isEditable = false;
    },
  },
  mounted() {
    emiter.on("add-object", value => {
      this.dataselect.data.push({ name: value[1], type: value[0], isPolygn: value[2], numberOfLines: value[3], position: this.dataselect.data.length });
      this.numberOfLines.push({numberOfLines: value[3]})
    });
  },
}
</script>

<style>

</style>