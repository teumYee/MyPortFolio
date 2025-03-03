<template>
  <RouterView />
  <div class="page">
    <!-- 헤더 : WindowHeader -->
    <HEADER />
    <div class="page__container">
      <div class="page__container__contents">
        <div class="title">WELCOME TO MY PORTFOLIO</div>
      </div>
      <div class="menu">
        <!-- 메뉴 -->
        <MENU />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import HEADER from "@components/organisms/common/Window_Header.vue";
import MENU from "@/components/atoms/menu/Menu.vue";
</script>

<style lang="scss" scoped>
.page {
  /* intro */

  position: relative;
  width: 1440px;
  height: 1024px;

  background-color: $color-black-900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &__container {
    &__contents {
    }
    .title {
      /* WELCOME TO MY PORTFOLIO */
      position: absolute;
      width: 945px;
      height: 77px;
      left: calc(50% - 945px / 2 - 0.5px);
      top: calc(50% - 77px / 2 - 224.5px);

      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 64px;
      line-height: 120%;
      /* identical to box height, or 77px */
      text-align: center;

      color: #ffffff;

      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
