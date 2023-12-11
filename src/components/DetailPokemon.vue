<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    detail: { type: Object, required: true, }
})

const { name, weight, height, types } = props.detail;

const nameTypes = ref([])
    types.forEach(pokemon => {
       nameTypes.value.push(pokemon.type.name)
    });

const items = ref([
    { key: "Name", value: name },
    { key: "Weight", value: weight },
    { key: "Height", value: height },
    { key: "Types", value: nameTypes.value.toString() },
])

</script>
<template>
    <div class="item-container">
        <div class="item" v-for="(item, i) in items" :key=i>
            <b>{{ item.key }}:</b>
            <p>{{ item.value }}</p>
        </div>
    </div>
</template>
<style scoped>
.item {
    width: 80%;
    display: flex;
    padding: 10px 20px;
    gap: 10px;
    border-bottom: 1px solid #E8E8E8;
}

.item:first-child {
    font-weight: 700;
}

.item-container {
    display: grid;
    place-items: center;
}
</style>