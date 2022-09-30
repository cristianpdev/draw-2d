<template>
  <canvas id="viewport"></canvas>
</template>

<script>
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
    drawPolyline(x, y) {
    this.vueCanvas.beginPath();
    this.vueCanvas.moveTo(10, 100);
    this.vueCanvas.lineTo(100,100);
    this.vueCanvas.lineTo(100,130);
    this.vueCanvas.lineTo(10,130);
    // Retângulo
    // this.vueCanvas.closePath();
    this.vueCanvas.stroke();
    }
  },
  mounted() {
    var c = document.getElementById("viewport");
    var ctx = c.getContext("2d");
    this.vueCanvas = ctx; 
    this.vueCanvas.moveTo(0, 0);

    this.drawLine(150, 50);
    this.drawPolyline(10,90)
    this.drawPoint(50,90);
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