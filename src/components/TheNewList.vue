<script setup>
import TheButton from '../components/subcomponents/TheButton.vue'
import usersData from '../content/users.json'
import { ref } from 'vue'
import TheModal from '../components/subcomponents/TheModal.vue'

const users = ref(usersData);
const newUser = ref({ name: '' });
const selectedUsers = ref([]);
const isModalVisible = ref(false);

/*
  User's list
*/

const addUser = () => {
  if (newUser.value.name) {
    //auto _id and empty tab
    users.value.push({
      _id: (users.value.length).toString(),
      name: newUser.value.name,
      score: [],
      selected: false,
    });
    newUser.value = { name: '' };
  }
};

const toggleUserSelection = (index) => {
  users.value[index].selected = !users.value[index].selected;
};

const removeSelectedUsers = () => {
  const selectedIndexes = users.value.reduce((indexes, user, index) => {
    if (user.selected) {
      indexes.push(index);
    }
    return indexes;
  }, []);

  for (let i = selectedIndexes.length - 1; i >= 0; i--) {
    users.value.splice(selectedIndexes[i], 1);
  }

  // Auto relaod _id and empty tab
  users.value.forEach((user, index) => {
    user._id = index.toString();
  });

  selectedUsers.value = [];
};


/*
  Main event for modal
*/

const openModal = () => {
  isModalVisible.value = true;
  document.getElementById("display-content").classList.remove("hidden")
};

const closeModal = () => {
  isModalVisible.value = false;
  document.getElementById("display-content").classList.add("hidden")
};
</script>

<template>
  <div id="display-content" class="hidden"></div>
  <div class="main-padding">
    <the-button class="section" :type="'Secondary'" :content="'Retour'" :icone="true" :url="'/#'" />
    <!-- Main content section -->
    <div class="section">
      <h1>Ajouter</h1>
      <div id="input">
        <input type="text" v-model="newUser.name" id="newUserName" name="newUserName">
        <button class="secondary-button adding" @click="addUser">+</button>
      </div>
    </div>
    <div class="separator">
      <hr>
      <hr class="secondary-hr">
    </div>
    <div>
      <!-- Delete section -->
      <h1>Supprimer</h1>
      <p class="small-text">Sélectionner les personnes que vous souhaitez enlever de la liste.</p>
    </div>
    <div id="delete-user">
      <div class="delete-user section" v-for="(user, i) in users" :key="i" @click="() => toggleUserSelection(i)" :style="{
        backgroundColor: user.selected ? '#2E2F33' : '#F6F2ED',
        color: user.selected ? '#FFFFFF' : '#000000'
      }">
        <p>{{ user.name }}</p>
      </div>
    </div>
    <!-- Buttons end section -->
    <div class="fixed-bottom section">
      <button class="button" @click="removeSelectedUsers">Supprimer</button>
      <the-button :content="'Terminer'" :icone="false" :url="'/#'" />
      <div class="center small-text">
        <p @click="openModal" :style="{ textDecoration: 'underline', marginTop: '1rem', cursor: 'pointer' }">Modifier un score ?</p>
      </div>
    </div>
  </div>
  <!-- Modal section -->
  <the-modal v-if="isModalVisible" @modalClosed="closeModal" />
</template>

<style scoped>
#display-content {
  background-color: black;
  opacity: 40%;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
}

#input {
  display: flex;
  flex-direction: row;
}

input {
  border: none;
  border-radius: 2rem 0 0 2rem;
  width: 100%;
  height: 8vh;

  padding: 2rem;
}

input:focus {
  outline: none;
}

.adding {
  width: max-content;
  border-radius: 0 2rem 2rem 0;
  padding: 0 2rem 0 2rem;
  color: var(--vt-c-white-soft);
  background-color: var(--vt-c-black);
}

#delete-user {
  display: flex;
  flex-direction: row;

  margin-top: 1rem;
}

.delete-user {
  border: .1rem solid var(--vt-c-white);
  border-radius: 2rem;

  margin-right: 2rem;
  padding: 1rem;

  cursor: pointer;
}
</style>
