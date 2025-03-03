<template>
  <div :class="['page__profile', { active: isActive }]">
    <div class="page__profile__container">
      <div class="page__profile__text">PROFILE</div>
      <div class="stat">
        <div class="stat__img"></div>
        <div class="stat__detail">인적사항</div>
        <div class="comment">
          <div class="comment__text">Comment</div>
          <div class="comment__bar"></div>
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
.page__profile {
  display: none;
}

.page__profile.active {
  display: block;
  position: absolute;
  width: 1177px;
  height: 744px;

  background: rgba(217, 217, 217, 1);
  border-radius: 10px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  left: 72px;
  // 다른 요소보다 앞에
  z-index: 1000;
  .page {
    &__profile {
      &__container {
        position: relative;
      }
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
    }
  }

  .stat {
    position: relative;
    &__img {
      position: absolute;
      width: 303px;
      height: 293px;
      left: 78px;
      top: 173px;

      background: #c2c2c2;
      border-radius: 100px;
    }
    &__detail {
      position: absolute;
      width: 160px;
      height: 288px;
      left: 414px;
      top: 173px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 300;
      font-size: 40px;
      line-height: 120%;
      /* or 48px */
      text-align: center;

      color: #000000;
    }
    .comment {
      &__text {
        /* Commend(후에 업데이트 예정) */

        position: absolute;
        width: 548px;
        height: 48px;
        left: 94px;
        top: 569px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 120%;
        /* identical to box height, or 48px */
        text-align: center;

        color: #000000;
      }

      &__bar {
        position: absolute;
        width: 1000px;
        height: 149px;
        left: 78px;
        top: 543px;

        background: #c2c2c2;
      }
    }
  }
}
</style>
