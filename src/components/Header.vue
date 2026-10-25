<template>
    <header>
        <div class="header-title">
            <h1 class="header-title__blue">Quote</h1> <h1 class="header-title__black">Generator</h1>
        </div>
        <nav class="header-nav">
            <div class="header-nav-links">
                <router-link to="/login">
                    <h3>Sign in</h3>
                </router-link>
                <router-link to="/about">
                    <h3>About Us</h3>
                </router-link>  
                <router-link to="/quote">    
                    <h3>Add quote</h3>
                </router-link>    
            </div>
        </nav>
        <button>
            <img src="../assets/menu.png" alt="Menu image" class="menu-img">
        </button>
    </header>
</template>

<script setup>

</script>

<style scoped lang="scss">
header {
    display: flex;
    justify-content: space-between;
    padding: 32px;

    .header-title {
      display: flex;
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
    .header-nav-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
      margin-top: 11px;
      cursor: pointer;
    }
}
button {
    display: none;
}
a {
    text-decoration: none;
    cursor: pointer;
}
@media screen and (max-width: 768px) {
    button {
        display: flex;
        border: none;
        background-color: white;
        margin-top: 9px;
        cursor: pointer;
    }
    .menu-img {
        width: 30px;
        height: 30px;
    }
    .header-nav {
        display: none;
    }
}
</style>