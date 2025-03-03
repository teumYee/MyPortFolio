<template>
  <!-- <RouterView /> -->

  <div class="page">
    <HEADER />
    <div class="page__content">
      <div class="comment">WHO AM I?</div>
      <div class="page__content__detail">
        <div class="profile" @click="toggleProfile">
          <div class="profile__comment">PROFILE</div>
          <PROFILE :isActive="isProfileActive" />
        </div>
        <div class="stack" @click="toggleStack">
          <div class="stack__comment">STACK</div>
          <STACK :isActive="isStackActive" />
        </div>
        <div class="project" @click="toggleProject">
          <div class="project__comment">PROJECT</div>
          <PROJECT :isActive="isProjectActive" />
        </div>
      </div>
      <div class="page__dialogbox">
        <div class="page__dialogbox__comment">저를 소개합니다!</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HEADER from "@components/organisms/common/Window_Header.vue";
import PROFILE from "@components/organisms/Detail/Profile.vue";
import STACK from "@components/organisms/Detail/Stack.vue";
import PROJECT from "@components/organisms/Detail/Project.vue";

import { ref } from "vue";
import { defineProps } from "vue";

const isProfileActive = ref(false);
const isStackActive = ref(false);
const isProjectActive = ref(false);

function toggleProfile() {
  isProfileActive.value = !isProfileActive.value;
}
function toggleStack() {
  isStackActive.value = !isStackActive.value;
}
function toggleProject() {
  isProjectActive.value = !isProjectActive.value;
}

const props = defineProps({
  isActive: Boolean,
});
</script>

<style lang="scss" scoped>
.page {
  /* home */

  position: relative;
  width: 1440px;
  height: 1024px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &__content {
    .comment {
      /* WHO AM I? */

      position: absolute;
      width: 532px;
      height: 115px;
      left: 453px;
      top: 87px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      // 폰트 사이즈 수정
      font-size: 88px;
      line-height: 120%;
      /* or 115px */
      text-align: center;

      color: #000000;
    }

    &__detail {
      .profile,
      .stack,
      .project {
        position: absolute;
        width: 341.38px;
        height: 472px;
        background: #c2c2c2;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        &__comment {
          font-family: "Inter";
          font-style: normal;
          font-weight: 200;
          font-size: 64px;
          line-height: 120%;
          text-align: center;
          color: #000000;
        }
      }
      .profile {
        left: 59px;
        top: 225px;
        cursor: pointer;
        &__comment {
          width: 294px;
        }
      }
      .stack {
        left: 549.81px;
        top: 225px;
        cursor: pointer;
        &__comment {
          width: 223px;
        }
      }
      .project {
        left: 1040.62px;
        top: 225px;
        cursor: pointer;
        &__comment {
          width: 357px;
        }
      }
    }
  }

  &__dialogbox {
    position: absolute;
    width: 1348px;
    height: 234px;
    left: 50px;
    top: 747px;

    background: #d9d9d9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;

    &__comment {
      position: absolute;
      width: 448px;
      height: 77px;
      left: calc(50% - 448px / 2);
      top: calc(50% - 77px / 2);

      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 56px;
      line-height: 120%;
      text-align: center;

      color: #000000;
    }
  }
}
</style>
