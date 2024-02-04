<script setup>
import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance();

const closeModal = () => {
  instance.emit('modalClosed');
};
</script>

<template>
  <div class="modal">
    <div id="modal-content">
      <img src="../../assets/icons/octopus.png">
      <h3>KommentKonFé ?</h3><p><br>Pour modifier un score, il suffit d’appuyer sur la personne de votre choix dans la vue résultats !
      </p>
      <button @click="closeModal" class="button">Fermer</button>
    </div>

  </div>
</template>

<style scoped>
.modal {
  display: flex;
  justify-content: center;

  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 70vh;

  margin: 0;
  padding: 2rem;
  z-index: 50;

  border-radius: 2rem 2rem 0 0;

  background-color: var(--vt-c-violet);
  color: var(--vt-c-white);
}

#modal-content{
  width: 100%;
  text-align: center;
}

img{
  position: relative;
  top: -5rem;
}
</style>
