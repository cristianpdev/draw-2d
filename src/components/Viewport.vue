<template>
  <canvas id="viewport"></canvas>
</template>

<script>
import emiter from '../main';

export default {
  name: 'Viewport',
  data() {
    return {
      vueCanvas: null,
    }
  },
  methods: {
    drawPoint(x, y) {
      this.vueCanvas.strokeRect(x, y, 1, 1);
    },
    drawLine(x, y) {
      this.vueCanvas.beginPath();

      this.vueCanvas.moveTo(0, 0);

      this.vueCanvas.lineTo(x, y);

      this.vueCanvas.stroke();
    },
    drawPolyline(value) {
      this.vueCanvas.beginPath();
      for (let i = 1; i <= value.numberOfLines; i++) {
        if (i === 1) this.vueCanvas.moveTo(value[`x${i}`], value[`y${i}`]);
        else this.vueCanvas.lineTo(value[`x${i}`], value[`y${i}`]);
      }
      if (value.isPolygn) {
        this.vueCanvas.closePath();
      }
      this.vueCanvas.stroke();
    },
    draw(value) {
      if (value.type === 'ponto') {
        this.drawPoint(value[`x1`], value[`y1`]);
      }
      else if (value.type === 'linha') {
        this.drawLine(value[`x1`], value[`x1`]);
      }
      else if (value.type === 'polilinha') {
        this.drawPolyline(value);
      }
    }
  },
  mounted() {
    var c = document.getElementById("viewport");
    var ctx = c.getContext("2d");
    this.vueCanvas = ctx;
    this.vueCanvas.moveTo(0, 0);
    emiter.on('draw', value => {
      this.draw(value);
    });

    emiter.on('clear-canvas', value => {
      this.vueCanvas.clearRect(0, 0, 600, 400);
      for (let i = 0; i < value.length; i++) {
        this.draw(value[i]);
      }
    });


  },
}
</script>

<style>
#viewport {
  width: 600px;
  height: 400px;
  background-color: rgb(241, 241, 241);
  color: black;
}
</style>