<template>
    <section class="yaware-grid-toolbar">

        <section class="yaware-grid-toolbar__block">
            <slot name="main-buttons">
                <section class="yaware-grid-toolbar__block yaware-grid-toolbar__block--service">
                    <button class="yaware-grid-toolbar__button yaware-grid-toolbar__button--refresh" title="Refresh"></button>
                    <section>
                        <button v-if="$slots['expanded-toolbar'] || $scopedSlots['expanded-toolbar']"
                                @click="expand"
                                class="yaware-grid-toolbar__button yaware-grid-toolbar__button--filters"
                                title="Filters"
                        >
                            {{ 'Filters' }}
                        </button>
                        <section v-else >
                            <el-popover
                                    popper-class="test"
                                    ref="popover"
                                    placement="right"
                                    width="300"
                                    trigger="click">
                                <h1>{{ 'TEST' }}</h1>
                            </el-popover>

                            <button class=" yaware-grid-toolbar__button" v-popover:popover>
                                <i class="fa fa-columns" aria-hidden="true"></i>
                        </button></section>
                    </section>
                    <button class="yaware-grid-toolbar__button yaware-grid-toolbar__button--clear-filters"
                            title="Clear Filters">
                    </button>
                </section>
            </slot>
            <section class="yaware-grid-toolbar__block">
                <slot name="custom-buttons"></slot>
            </section>
            <section class="yaware-grid-toolbar__block yaware-grid-toolbar__block--export">
                <slot name="export-types">
                    <button v-for="exports in exportTypes"
                            :class="['yaware-grid-toolbar__button', `yaware-grid-toolbar__button--${exports.icon}`]"
                    >
                        {{ 'Export to ' + exports.item }}
                    </button>
                </slot>
            </section>
        </section>

        <section v-if="expanded" class="yaware-grid-toolbar__expanded">
            <slot name="expanded-toolbar"></slot>
        </section>
    </section>
</template>
<script src="./index.js"></script>
<style src="./index.scss" lang="scss"></style>
