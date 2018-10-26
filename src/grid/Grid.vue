<template>
<section>
     <div id="app">
        <v-pagination :total='100' :current-change='changePage'></v-pagination>
     </div>
     <br>
    <div>
        <br>
        <new-pagination :total.sync="total" :currentPage.sync="currentPage" :itemPerPage.sync="itemPerPage"></new-pagination>
    </div>
</section>
</template>
<script src="./index.js"></script>
