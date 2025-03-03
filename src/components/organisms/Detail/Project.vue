<template>
  <div :class="['page__project', { active: isActive }]">
    <div class="page__project__text">Project</div>
    <div class="page__project__content">Anything</div>
    <div class="page__project__comment">
      <div class="comment__text">Comment</div>
      <div class="comment__bar"></div>
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
.page__project {
  display: none;
}

.page__project.active {
  display: block;
  position: absolute;
  width: 1177px;
  height: 744px;

  background: rgba(217, 217, 217, 1);
  border-radius: 10px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  // 위치 수정
  left: -910px;
  // 다른 요소보다 앞에
  z-index: 1000;
}
.page {
  &__project {
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
    &__content {
      position: absolute;
      width: 218px;
      height: 48px;
      left: 480px;
      top: 324px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 120%;
      /* identical to box height, or 48px */
      text-align: center;

      color: #000000;
    }
    &__comment {
      .comment__text {
        position: absolute;
        width: 192px;
        height: 48px;
        left: 109px;
        top: 569px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 120%;
        text-align: center;
        color: #000000;
      }

      .comment__bar {
        position: absolute;
        width: 1044px;
        height: 149px;
        left: 68px;
        top: 543px;
        background: #c2c2c2;
      }
    }
  }
}
</style>
