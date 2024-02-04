<script setup>

const props = defineProps({
    name: String,
    scores: Array,
});

//get the total result of score
function getResult() {
    return props.scores.reduce((total, score) => total + (score || 0), 0);
}

</script>

<template>
    <div id="user-card" class="column">
        <h2>{{ name }}</h2>
        <div class="row">
            <div v-for="(score, i) in scores" :class="`result`">
                {{ score }}
            </div>
            <div>
                <p> {{ getResult() }} </p>
            </div>
        </div>
    </div>
    <div class="separator">
        <hr>
        <hr class="secondary-hr">
    </div>
</template>

<style scoped>
.result {
    margin-right: 1rem;
    color: var(--vt-c-gray);
}

</style>