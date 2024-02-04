<script setup>
import { changerURL } from '../../utils.js'

const props = defineProps({
    type: {
        type: String,
        default: 'Primary' 
    },
    content: String,
    icone: Boolean,
    url: String
});

const isSecondary = props.type === "Secondary";

</script>

<template>
    <div class="button-content">
        <button class="button" :class="{ 'secondary-button': isSecondary }" @click="changerURL(props.url)">{{ props.content }}</button>
    </div>
</template>

<style scoped></style>