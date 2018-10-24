<template>
    <section>
       <span>{{ `Current page: ${currentPage}` }}</span>
       <button>First page</button>
       <button @click="currentChangePrev()">Prev</button>
       <input type="text" ref="input" v-model='jumpPage' @keyup.enter="jumpToPage(jumpPage)">
       <button @click="currentChangeNext()">Next</button>
       <button>Last Page</button>
       <span>{{ `Total: ${total}` }}</span>
    </section>
</template>
<script src='./index.js'></script>
<style src='./index.scss' lang="scss"></style>
