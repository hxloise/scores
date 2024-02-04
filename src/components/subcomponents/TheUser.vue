<script setup>
import { setLeader, isLeader } from "../../utils.js"
import { ref, onMounted, onUpdated } from 'vue';

const props = defineProps({
    _id: String,
    name: String,
    scores: Array,
});

const leader = ref(false)

onMounted(() => {
    setLeader()
    leader.value = isLeader(props._id)
});

onUpdated(() => {
    setLeader()
    leader.value = isLeader(props._id)
});

//get the total result of score
function getResult() {
    return props.scores.reduce((total, score) => total + (score || 0), 0);
}

</script>

<template>
    <div id="user-card" class="row">
        <div class="row">
            <p class="user-score">{{ name }}</p>
            <p v-for="(score, i) in scores" class="user-score" :class="`result`">
                {{ score }}
            </p>
        </div>
        <div>
            <p class="total-score" :class="{ leaderP: leader }">{{ getResult() }}</p>

        </div>
    </div>
    <div :class="`separator user-${props._id}`">
        <hr :class="{ leader: leader }">
        <hr class="secondary-hr" :class="{ leader: leader }">
    </div>
</template>

<style scoped>
.result {
    margin-right: 1rem;
    color: var(--vt-c-gray);
}

#user-card {
    justify-content: space-between;
}

.user-score {
    margin-right: 1rem;
}

.total-score {
    font-size: 2rem;
    color: var(--vt-c-gray);
}

.leaderP {
    color: var(--vt-c-violet);
}

.leader {
    border: .2rem solid var(--vt-c-violet);
}
</style>