<template>
  <!-- <RouterView /> -->
  <div class="page">
    <HEADER />
    <div class="page__content">
      <div class="comment">
        세상을 다양하게 구현하고 싶은<br />
        개발자의 페이지입니다.
      </div>
      < class="loading__bar">
      <div class="loading__bar__comment">Loading...</div>
      <div class="loading__bar__point1"></div>
      <div class="loading__bar__point2"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
// import { RouterView } from "vue-router";
import HEADER from "@components/organisms/common/Window_Header.vue";

const router = useRouter();
onMounted(() => {
  setTimeout(() => {
    router.push("./home");
  }, 3000);
});
</script>

<style lang="scss" scoped>
.page {
  /* loading */
  position: relative;
  width: 1440px;
  height: 1024px;

  background: url(../assets/images/Loading_bg.png);

  &__content {
    .comment {
      /* 세상을 다양하게 구현하고 싶은 개발자의 페이지입니다. */

      position: absolute;
      width: 813px;
      height: 177px;
      left: 313px;
      top: 424px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 56px;
      line-height: 120%;
      /* or 77px */
      text-align: center;

      color: #000000;
    }
    .loading__bar {
      &__comment {
        /* Loading... */

        position: absolute;
        width: 813px;
        height: 177px;
        left: 313px;
        top: 766px;
        // 폰트 크기 수정.
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 56px;
        line-height: 120%;
        /* or 77px */
        text-align: center;

        color: #222222;
      }
      &__point1 {
        position: absolute;
        width: 1064px;
        height: 56px;
        left: calc(50% - 1064px / 2 + 2px);
        top: calc(50% - 56px / 2 + 370px);

        background: #d9d9d9;
        border-radius: 50px;
      }
      &__point2 {
        position: absolute;
        width: 560px;
        height: 56px;
        left: calc(50% - 560px / 2 - 250px);
        top: calc(50% - 56px / 2 + 370px);

        background: #c2c2c2;
        border-radius: 50px;
      }
    }
  }
}
</style>
