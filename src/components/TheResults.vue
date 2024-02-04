<script setup>
import TheUser from '../components/subcomponents/TheUser.vue'
import TheButton from '../components/subcomponents/TheButton.vue'
import users from '../content/users.json'


</script>

<template>
    <div id="results-content" class="main-padding">
        <h1>Résultats</h1>
        <div v-for="(user, i) in users" :key="i" :id="`user0${i + 1}`">
            <the-user :_id="user._id" :name="user.name" :scores="user.score"/>
        </div>
    </div>
    <the-button class="main-padding" :content="'Modifier la liste'" :icone="false" :url="'/#/new'"/>
</template>

<style scoped></style>