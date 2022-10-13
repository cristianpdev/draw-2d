<script setup>
import Viewport from './components/Viewport.vue';
import ZoomControl from './components/ZoomControl.vue';
import NavControl from './components/NavControl.vue';
import Select from './components/Select.vue';
import DataSelect from './components/DataSelect.vue';
</script>

<template>
  <div class="grid grid-cols-2 ">
    <main class="md:container md:mx-auto px-4 py-8">
      <Select />
      <DataSelect />
    </main>
    <aside class="grid grid-cols-1 md:mx-auto py-8">
      <Viewport />
      <div id="buttons">
        <NavControl />
        <ZoomControl />
      </div>
    </aside>
  </div>
</template>

<style >
#buttons {
  padding-top: 20px;
  margin: auto;
}
</style>

