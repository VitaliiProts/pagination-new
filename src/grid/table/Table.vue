<template>
    <el-table
            :data="data"
            highlight-current-row
            stripe
            header-cell-class-name="yaware-el-table__header"
            cell-class-name="yaware-el-table__sell"
    >
        <el-table-column v-if="$slots.expand" type="expand">
            <template slot-scope="row">
                <slot name="expand"></slot>
            </template>
        </el-table-column>

        <el-table-column
                v-for="column in columns"
                :key="column.prop"
                v-bind="column"
        >
            <template slot-scope="{ row }">
                <slot v-if="$scopedSlots[`${column.prop}-column-template`]"
                      :name="`${column.prop}-column-template`"
                      :row="row"
                >
                </slot>
                <span v-else>
                        {{ row[column.prop] }}
                    </span>
            </template>
        </el-table-column>
    </el-table>
</template>
<script src="./index.js"></script>
<style src="./index.scss" lang="scss"></style>
