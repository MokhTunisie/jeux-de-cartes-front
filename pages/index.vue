<template>
  <div class="container">
    <h1>Jeu de Cartes</h1>
    <button @click="fetchCards">Tirer une main</button>
    <button @click="sortCards" v-if="cards.length">Trier la main</button>

    <Palm v-if="cards.length" :cards="cards" :title="title" />
  </div>
</template>

<script>

import Palm from "@/components/Palm.vue";
import CardService from "@/services/CardService";

export default {
  components: {
    Palm
  },
  data() {
    return {
      cards: [],
      title: "Cartes Tirées"
    };
  },
  methods: {
    async fetchCards() {
      try {
        this.cards = await CardService.getRandomPalm();
        this.title = "Cartes Tirées"
      } catch (error) {
        console.error("Erreur lors de la récupération des cartes", error);
      }
    },
    async sortCards() {
      try {
        this.cards = await CardService.sortPalm(this.cards);
        this.title = "Cartes Triées"
      } catch (error) {
        console.error("Erreur lors du tri des cartes", error);
      }
    }
  }
};
</script>

<style>
.container {
  text-align: center;
}
button {
  margin: 10px;
  padding: 10px;
  cursor: pointer;
}
</style>
