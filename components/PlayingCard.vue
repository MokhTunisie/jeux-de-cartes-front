<template>
  <Card class="playing-card" :class="cardColor">
    <template #content>
        <span class="card-symbol top-left">
          <i style="font-size: 1rem">{{ suitIcon }}</i>
        </span>

        <span class="card-value">{{ card.value }}</span>

        <span class="card-symbol bottom-right">
          <i style="font-size: 1rem">{{ suitIcon }}</i>
        </span>
    </template>
  </Card>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  computed: {
    cardColor() {
      return this.card.color === "Coeur" || this.card.color === "Carreaux" ? "red" : "black";
    },
    suitIcon() {
      const icons = {
        "Coeur": "♥",
        "Carreaux": "♦",
        "Pique": "♠",
        "Trefle": "♣"
      };
      return icons[this.card.color] || "";
    }
  }
};
</script>

<style scoped>
.playing-card {
  width: 120px;
  height: 170px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  background-color: white;
  position: relative;
  margin: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
}

.card-value {
  font-size: 28px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card-symbol {
  position: absolute;
  font-size: 20px;
}

.top-left {
  top: 10px;
  left: 10px;
}

.bottom-right {
  bottom: 10px;
  right: 10px;
  transform: rotate(180deg);
}

.red {
  color: red;
}

.black {
  color: black;
}
</style>
