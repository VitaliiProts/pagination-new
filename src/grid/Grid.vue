<template>
    <section>
        <y-table
                :data="data"
                :columns="columns"
                :name="name"
                :hiddenColumns="hiddenColumns"
        >

        </y-table>
        <y-pagination
                :total="100"
                :currentPage.sync="currentPage"
                :itemPerPage.sync="itemPerPage"
        >

        </y-pagination>
    </section>
</template>
<script src="./index.js"></script>
<style src="./index.scss"></style>
