<template>
    <section class="yaware-grid-toolbar">

        <section class="yaware-grid-toolbar__block">
            <slot name="main-buttons">
                <section class="yaware-grid-toolbar__block yaware-grid-toolbar__block--service">
                    <button class="yaware-grid-toolbar__button yaware-grid-toolbar__button--refresh" title="Refresh"></button>
                    <section>
                        <slot v-if="$slots['expand-toolbar-button']" name="expand-toolbar-button"></slot>
                        <button v-else @click="changeFilters" class="yaware-grid-toolbar__button yaware-grid-toolbar__button--filters" title="Filters">{{ 'Filters' }}</button>
                    </section>
                    <button class="yaware-grid-toolbar__button yaware-grid-toolbar__button--clear-filters" title="Clear Filters"></button>
                    <button class="yaware-grid-toolbar__button yaware-grid-toolbar__button--collapse-expand-all" title="Expand">{{ 'Expand' }}</button>
                </section>
            </slot>
            <section class="yaware-grid-toolbar__block yaware-grid-toolbar__block--button">
                <button class="yaware-grid-toolbar__button yaware-grid-toolbar__button--add-project" title="Add New Project">{{ 'Add New Project' }}</button>
                <button class="yaware-grid-toolbar__button yaware-grid-toolbar__button--add-task" title="Add New Task">{{ 'Add New Task' }}</button>
            </section>
            <section class="yaware-grid-toolbar__block yaware-grid-toolbar__block--export yaware-grid-toolbar__button--csv">
                <button v-for="exports in exportTypes"
                        v-if="exports !== []"
                        class="yaware-grid-toolbar__button"
                >
                    {{ `Export to ${exports}` }}
                </button>
            </section>
            <section class="yaware-grid-toolbar__block--export"></section>
        </section>

        <slot name="expanded-toolbar"></slot>
    </section>
</template>
<script src="./index.js"></script>
<style src="./index.scss" lang="scss"></style>