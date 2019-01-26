<template>
    <section class="y-grid-toolbar">

        <section class="y-grid-toolbar__block">
            <slot name="main-buttons">
                <section class="y-grid-toolbar__block y-grid-toolbar__block--service">
                    <button class="y-grid-toolbar__button y-grid-toolbar__button--refresh" title="Refresh"></button>
                    <section>
                        <button v-if="$slots['expanded-toolbar'] || $scopedSlots['expanded-toolbar']"
                                @click="expand"
                                class="y-grid-toolbar__button y-grid-toolbar__button--filters"
                                title="Filters"
                        >
                            {{ 'Filters' }}
                        </button>
                        <section v-else>
                            <el-popover
                                ref="popover"
                                placement="right"
                                width="240"
                                trigger="click"
                            >
                                <b>{{ 'Hide columns:' }}</b>
                              <div class="y-grid-toolbar__checkbox-group">
                                <el-checkbox-group v-model="checked">
                                    <el-checkbox v-for="column in columns" :label="column.prop" :key="column.prop">
                                        {{ column.label }}
                                    </el-checkbox>
                                </el-checkbox-group>
                              </div>
                            </el-popover>

                            <button class=" y-grid-toolbar__button" v-popover:popover>
                                <i class="fa fa-columns"></i>
                            </button>
                        </section>
                    </section>
                    <button class="y-grid-toolbar__button y-grid-toolbar__button--clear-filters"
                            title="Clear Filters">
                    </button>
                    <transition name="fade" mode="out-in">
                        <button v-if="this.showButtonExpand" @click="clickExpand" key="expand" class="y-grid-toolbar__button">{{ 'Expand' }}</button>
                        <button v-else @click="clickCollapse" key="collapse" class="y-grid-toolbar__button">{{ 'Collapse' }}</button>
                    </transition>
                </section>
            </slot>
            <section class="y-grid-toolbar__block">
                <slot name="custom-buttons"></slot>
            </section>
            <section class="y-grid-toolbar__block y-grid-toolbar__block--export">
                <slot name="export-types">
                    <button v-for="exports in exportTypes"
                            :key="exports.item"
                            :class="['y-grid-toolbar__button', `y-grid-toolbar__button--${exports.icon}`]"
                    >
                        {{ 'Export to ' + exports.item }}
                    </button>
                </slot>
            </section>
        </section>

        <section v-if="expanded" class="y-grid-toolbar__expanded">
            <slot name="expanded-toolbar"></slot>
        </section>
    </section>
</template>
<script src="./index.js"></script>
<style src="./index.scss" lang="scss"></style>
