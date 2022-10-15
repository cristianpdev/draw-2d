<template>
  <div>
    <div class="flex flex-auto -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          ref="nameInput" type="text" placeholder="Nome do objeto">
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <div class="relative">
          <select id="large" v-model="selected" v-on:change="changeStatusButtonAdd()"
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option class="bg-white" v-for="item in select.data" :key="item.value" :value="item.value">{{item.type}}
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
        <button type="button" :disabled="disableButton" @click="clickAddButton()"
          class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Adicionar
        </button>
      </div>
    </div>
    <div class="grid grid-cols-1" v-if="selected === `polilinha`">
      <div class="flex items-center mb-4">
        <input id="polygn" type="checkbox" v-model="checked"
          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="polygn-checkbox" class="ml-2 text-sm font-medium text-white dark:text-gray-300">Polígono</label>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="numberOfLines">
            Número de Linhas
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="numberOfLines`" type="number" v-model="numberOfLines" min="1">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { select } from '../constants';
import emiter from '../main';

export default {
  name: 'Select',
  data() {
    return {
      select: select,
      selected: '',
      disableButton: true,
      checked: false,
      numberOfLines: 1,
    }
  },
  methods: {
    changeStatusButtonAdd() {
      this.disableButton = false;
    },
    clickAddButton() {
      if (this.$refs.nameInput.value !== '' && this.selected !== '') {
        emiter.emit('add-object', [this.selected, this.$refs.nameInput.value, this.checked, this.numberOfLines]);
        this.$refs.nameInput.value = '';
        this.selected = '';
        this.numberOfLines = 1;
      } else {
        Swal.fire({
          title: 'Campos obrigatórios!',
          text: 'Insira um nome para o objeto e selecione o tipo',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    },
  },
  mounted() { }
}
</script>

<style>

</style>