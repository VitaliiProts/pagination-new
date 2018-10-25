<template>
    <section class="pagination">
        <!-- SELECT -->
        <select @change="onChangeSelected" v-model="selected" class="pagination-select">
            <option v-for="option in options" :value="option.value">
                {{ option.value }}
            </option>
        </select>
        <!-- ARROW GOING TO PAGE 1 -->
        <button @click="onClickFirstPage" :disabled="isInFirstPage" class="pagination-button">{{ '<<' }}</button>
        <button @click="currentChangePrev" :disabled="isInFirstPage" class="pagination-button">{{ '<' }}</button>
        <span class="pagination-text">{{ 'page' }}</span>
        <!-- INPUT -->
        <section class="pagination-input-container">
            <input type="text" v-model='jumpPage' @keyup.enter="jumpToPage(jumpPage)" style="text-align: center">
            <span>{{ `from ${pageCount}` }}</span>
        </section>
        <!-- ARROW GOING TO LAST PAGE -->
        <button @click="currentChangeNext" :disabled="isInLastPage" class="pagination-button">{{ '>' }}</button>
        <button @click="onClickLastPage" :disabled="isInLastPage" class="pagination-button">{{ '>>' }}</button>
        <span class="pagination-text">{{ `Show ${currentPage} - ${this.options.value} from ${total}` }}</span>
    </section>
</template>
<script src="./index.js"></script>
<style src="./index.scss" lang="scss" scoped></style>