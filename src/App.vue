<script setup>
import Viewport from './components/Viewport.vue';
import ZoomControl from './components/ZoomControl.vue';
import NavControl from './components/NavControl.vue';
import Inputs from './components/Inputs.vue';
import Select from './components/Select.vue';
import DataSelect from './components/DataSelect.vue';
</script>

<template>
  <div class="grid grid-cols-2 ">
    <main class="md:container md:mx-auto px-4 py-8">
      <Select />
      <Inputs />
      <DataSelect  />
      <div id="buttons">
        <div class="flex justify-start">
          <NavControl />
        </div>
        <div class="flex justify-start">
          <ZoomControl />
        </div>
      </div>
    </main>
    <aside class="md:mx-auto py-8">
      <Viewport />
    </aside>
  </div>
</template>

<style >
#buttons {
  padding-top: 20px;
}
</style>

