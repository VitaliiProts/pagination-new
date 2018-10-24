<template>
    <section>
       <span>{{ `Current page: ${currentPage}` }}</span>
       <button @click="currentChangePrev()">Prev</button>
       <input type="text" v-model='jumpPage' @keyup.enter="jumpToPage(jumpPage)">
       <button @click="currentChangeNext()">Next</button>
    </section>
</template>
<script src='./index.js'></script>
<style src='./index.scss' lang="scss"></style>
