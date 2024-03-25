<template>
  <div class="loading-spinner">
    <div class="lds-ellipsis">
      <div></div><div></div><div></div><div></div><div></div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@keyframes lds-ellipsis {
   0% { transform: translate(12px, 80px) scale(0); }
  25% { transform: translate(12px, 80px) scale(0); }
  50% { transform: translate(12px, 80px) scale(1); }
  75% { transform: translate(80px, 80px) scale(1); }
 100% { transform: translate(148px, 80px) scale(1); }
}
@keyframes lds-ellipsis-r {
   0% { transform: translate(148px, 80px) scale(1); }
 100% { transform: translate(148px, 80px) scale(0); }
}
@keyframes lds-ellipsis-c {
   0% { background: #e15b64; }
  25% { background: #abbd81; }
  50% { background: #f8b26a; }
  75% { background: #f47e60; }
 100% { background: #e15b64; }
}
.lds-ellipsis div {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transform: translate(80px, 80px) scale(1);
  background: #e15b64;
  animation: lds-ellipsis 4.545454545454546s infinite cubic-bezier(0, 0.5, 0.5, 1);
}
.lds-ellipsis div:nth-child(1) {
  background: #f47e60;
  transform: translate(148px, 80px) scale(1);
  animation: lds-ellipsis-r 1.1363636363636365s infinite cubic-bezier(0, 0.5, 0.5, 1), lds-ellipsis-c 4.545454545454546s infinite step-start;
}
.lds-ellipsis div:nth-child(2) { animation-delay: -1.1363636363636365s; background: #e15b64; }
.lds-ellipsis div:nth-child(3) { animation-delay: -2.272727272727273s; background: #f47e60; }
.lds-ellipsis div:nth-child(4) { animation-delay: -3.409090909090909s; background: #f8b26a; }
.lds-ellipsis div:nth-child(5) { animation-delay: -4.545454545454546s; background: #abbd81; }

.loading-spinner {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: transparent;
}
.lds-ellipsis {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
}
.lds-ellipsis div { box-sizing: content-box; }
</style>