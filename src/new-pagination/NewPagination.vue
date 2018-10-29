<template>
    <section class="pagination">
        <select v-model="selected" @change="changeSelected(selected)" class="pagination-select">
            <option v-for="option in ippOptions" :value="option.value">
                {{ option.value }}
            </option>
        </select>
        <button @click="onClickFirstPage" :disabled="currentPage === 1" class="pagination-button">{{ '<<' }}</button>
        <button @click="currentChangePrev" :disabled="currentPage === 1" class="pagination-button">{{ '<' }}</button>
        <section class="pagination-input-container">
            <span>{{ 'page' }}</span>
            <input ref="input" class="pagination-input" type="text" v-model='jumpPage' @keyup.enter="jumpToPage(jumpPage)">
            <span>{{ `from ${pageCount}` }}</span>
        </section>
        <button @click="currentChangeNext" :disabled="currentPage === pageCount" class="pagination-button">{{ '>' }}</button>
        <button @click="onClickLastPage" :disabled="currentPage === pageCount" class="pagination-button">{{ '>>' }}</button>
        <span class="pagination-text">{{ `Show ${currentPage} - ${pageCount} from ${total}` }}</span>
    </section>
</template>
<script src="./index.js"></script>
<style src="./index.scss" lang="scss" scoped></style>