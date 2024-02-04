<script setup>
import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance();

const closeModal = () => {
  instance.emit('modalClosed');
};
</script>

<template>
  <div class="modal">
    <div></div>
    <div>
      <p>Aaaaaah ! <br> Pour modifier un score, il suffit d’appuyer sur la personne de votre choix dans la vue résultats !
      </p>
      <button @click="closeModal" class="button">Fermer</button>
    </div>

  </div>
</template>

<style scoped>
.modal {
  display: flex;
  justify-content: center;

  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 80vh;

  margin: 0;
  padding: 2rem;
  z-index: 50;

  background-color: var(--vt-c-violet);
  color: var(--vt-c-white);
}
</style>
