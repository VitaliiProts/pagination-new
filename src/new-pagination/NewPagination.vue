<template>
    <section>
        <span>{{ 'total - ' + total }}</span>
        <span>{{ 'Current page - ' + currentPage }}</span>
        <button @click="prevPage">Prev</button>
        <button @click="nextPage">Next</button>
        <input type="text" v-model="jumpPage" @keyup.enter="jumpToPage(jumpPage)">
    </section>
</template>
<script src='./index.js'></script>
<style src='./index.scss'></style>
