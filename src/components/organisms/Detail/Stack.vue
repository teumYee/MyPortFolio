<template>
  <div :class="['page__stack', { active: isActive }]">
    <div class="page__stack__container">
      <div class="stack">
        <div class="stack__text">STACK</div>
        <div class="stack__1">
          <div class="stack__1__img"></div>
          <div class="stack__1__text">STACK 1</div>
        </div>
        <div class="stack__2">
          <div class="stack__2__img"></div>
          <div class="stack__2__text">STACK 2</div>
        </div>
        <div class="stack__3">
          <div class="stack__3__img"></div>
          <div class="stack__3__text">STACK 3</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  isActive: Boolean,
});
</script>

<style lang="scss" scoped>
.page__stack {
  display: none;
}

.page__stack.active {
  display: block;
  position: absolute;
  width: 1177px;
  height: 744px;

  background: rgba(217, 217, 217, 1);
  border-radius: 10px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  // left: 72px;
  // 다른 요소보다 앞에
  z-index: 1000;
}

.page {
  &__stack {
    &__container {
      .stack {
        &__text {
          position: absolute;
          width: 204px;
          height: 77px;
          left: 486px;
          top: 44px;

          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 64px;
          line-height: 120%;
          /* identical to box height, or 77px */
          text-align: center;

          color: #000000;
        }
        .stack__1 {
          &__img {
            position: absolute;
            width: 303px;
            height: 293px;
            left: 53px;
            top: 226px;

            background: #c2c2c2;
            border-radius: 100px;
          }

          &__text {
            position: absolute;
            width: 176px;
            height: 58px;
            left: 133px;
            top: 541px;

            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 40px;
            line-height: 48px;

            color: #000000;
          }
        }
        .stack__2 {
          &__img {
            position: absolute;
            width: 303px;
            height: 293px;
            left: 436px;
            top: 226px;

            background: #c2c2c2;
            border-radius: 100px;
          }
          &__text {
            /* STACK2 */

            position: absolute;
            width: 176px;
            height: 58px;
            left: 515px;
            top: 541px;

            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 40px;
            line-height: 48px;

            color: #000000;
          }
        }
        .stack__3 {
          &__img {
            position: absolute;
            width: 303px;
            height: 293px;
            left: 819px;
            top: 226px;

            background: #c2c2c2;
            border-radius: 100px;
          }
          &__text {
            position: absolute;
            width: 176px;
            height: 58px;
            left: 899px;
            top: 541px;

            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 40px;
            line-height: 48px;

            color: #000000;
          }
        }
      }
    }
  }
}
</style>
