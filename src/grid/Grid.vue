<template>
<section>
     <div id="app">
        <v-pagination :total='100' :current-change='changePage'></v-pagination>
     </div>
     <br>
    <div>
        <br>
        <new-pagination :total.sync="data.length" :itemPerPage.sync='itemPerPage' :currentPage.sync='currentPage'></new-pagination>
    </div>
</section>
</template>
<script src="./index.js"></script>
