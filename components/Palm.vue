<template>
  <div class="palm">
    <h2>{{ title }}</h2>
    <div class="card-list">
      <PlayingCard v-for="(card, index) in cards" :key="index" :card="card" />
    </div>
  </div>
</template>

<script>
import PlayingCard from "@/components/PlayingCard.vue";

export default {
  components: {
    PlayingCard
  },
  props: {
    cards: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.card-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
