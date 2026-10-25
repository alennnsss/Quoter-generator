<template>
  <main>
    <div class="main-quote">
      <h2 class="main-quote__text">"{{ current.quote }}"</h2>
      <p class="main-quote__author">— {{ current.author }}</p>
    </div>

    <div class="quote-buttons">
      <button @click="nextQuote">Next quote</button>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const quotes = [
  {
    id: 1,
    quote: 'Simplicity is the ultimate sophistication.',
    author: 'Leonardo da Vinci'
  },
  {
    id: 2,
    quote: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius'
  },
  {
    id: 3,
    quote: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
    author: 'Amelia Earhart'
  },
  {
    id: 4,
    quote: 'Start where you are. Use what you have. Do what you can.',
    author: 'Arthur Ashe'
  }
]

const index = ref(Math.floor(Math.random() * quotes.length))
const current = computed(() => quotes[index.value])


function nextQuote() {
  let next
  do {
    next = Math.floor(Math.random() * quotes.length)
  } while (next === index.value && quotes.length > 1)
  index.value = next
}
</script>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 56px 48px;
  border: 1px solid #eaeaea;
  border-radius: 16px;
  max-width: 560px;
  margin: 0 auto;

  .main-quote {
    text-align: center;

    &__text {
      font-size: 24px;
      font-weight: 500;
      line-height: 1.5;
      color: #1a1a1a;
    }

    &__author {
      margin-top: 16px;
      font-size: 16px;
      font-style: italic;
      color: #6b6b6b;
    }
  }

  .quote-buttons {
    display: flex;
    gap: 12px;

    button {
      height: 44px;
      padding: 0 20px;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      background: #4d49fc;
      color: #fff;
      border: 1.5px solid #4d49fc;

      &:hover {
        opacity: 0.9;
      }

      &:focus-visible {
        outline: 2px solid #4d49fc;
        outline-offset: 2px;
      }
    }
  }
}
</style>