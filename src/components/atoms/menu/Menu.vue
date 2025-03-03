<template>
  <div class="menu">
    <div class="menu__contents">
      <router-link to="/loading" class="start">START</router-link>
      <div class="continue">CONTINUE</div>
      <div class="shutdown">SHUTDOWN</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.menu {
  &__contents {
    position: absolute;
    width: 338px;
    height: 281px;
    left: calc(50% - 338px / 2);
    top: 640px;

    background: #d9d9d9;
    border-radius: 10px;

    .start {
      /* START */

      position: absolute;
      width: 159px;
      height: 58px;
      left: calc(50% - 159px / 2);
      top: 20px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 120%;
      text-align: center;

      color: #ffffff;
    }
    .continue {
      /* CONTINUE */

      position: absolute;
      width: 255px;
      height: 58px;
      left: calc(50% - 255px / 2);
      top: 110px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 120%;
      text-align: center;

      color: #ffffff;

      filter: blur(2px);
    }
    .shutdown {
      /* SHUTDOWN */

      position: absolute;
      width: 291px;
      height: 58px;
      left: calc(50% - 291px / 2);
      top: 200px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 120%;
      text-align: center;

      color: #ffffff;

      filter: blur(2px);
    }
  }
}
</style>
