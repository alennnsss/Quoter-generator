<template>
  <header>
    <div class="header-title">
      <h1 class="header-title__blue">Quote</h1>
      <h1 class="header-title__black">Generator</h1>
    </div>

    <div class="header-right">
      <button class="menu-btn" aria-label="Открыть меню" @click="menuOpen = !menuOpen">
        <img src="../assets/menu.png" alt="" class="menu-img">
      </button>

      <nav class="header-nav" :class="{ open: menuOpen }">
        <router-link to="/register" @click="menuOpen = false"><h3>Register</h3></router-link>
        <router-link to="/about" @click="menuOpen = false"><h3>About Us</h3></router-link>
        <router-link to="/quote" @click="menuOpen = false"><h3>Add quote</h3></router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 32px;

  .header-title {
    display: flex;
    gap: 8px;

    &__blue {
      font-weight: 800;
      font-size: 32px;
      color: #4d49fc;
    }

    &__black {
      font-weight: 900;
      font-size: 32px;
      color: #000;
    }
  }

  .header-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .menu-btn {
    display: none;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
  }

  .menu-img {
    width: 30px;
    height: 30px;
  }

  .header-nav {
    display: flex;
    gap: 8px;
    margin-top: 11px;

    a {
      color: #1a1a1a;
      text-decoration: none;
      cursor: pointer;

      &:hover,
      &.router-link-active {
        color: #4d49fc;
      }
    }

    h3 {
      margin: 0;
      font-weight: 500;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 20px 16px;

    .menu-btn {
      display: flex;
    }

    .header-nav {
      display: none;
      margin-top: 12px;

      &.open {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 16px;
        background-color: #000;
        border-radius: 8px;

        a,
        a:hover,
        a.router-link-active {
          color: #fff;
        }
      }
    }
  }
}
</style>