<template>
  <!-- 해더 ui -->
  <div class="header">
    <div class="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-cpu"
        viewBox="0 0 16 16"
      >
        <path
          d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0m-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"
        />
      </svg>
    </div>
    <div class="name">WELCOME TO MY PORTFOLIO</div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header {
  /* Rectangle 10 */

  position: absolute;
  width: 1440px;
  height: 56px;
  left: 0px;
  top: 0px;

  background: #d9d9d9;

  .icon {
    position: absolute;
    left: 9px;
    top: 3px;

    svg {
      width: 50px;
      height: 50px;
    }
  }

  .name {
    /* WELCOME TO MY PORTFOLIO */

    position: absolute;
    width: 709px;
    height: 56px;
    left: -5px;
    top: 3px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 200;
    font-size: 40px;
    line-height: 120%;
    /* or 48px */
    text-align: center;

    color: #000000;
  }
}
</style>
