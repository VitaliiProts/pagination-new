<template>
    <section>
        <y-toolbar
                v-if="showToolbar"
                :expanded.sync="expanded"
                :exportTypes="exportTypes"
                :columns="columns"
                :hiddenColumns.sync="hiddenColumns"
                :expandedRows.sync="scopeExpandedRows"
                :data="data"
                :columnHelper="columnHelper"
        >

        </y-toolbar>

        <el-table
                :data="data"
                :expand-row-keys="scopeExpandedRows"
                row-key="id"
                highlight-current-row
                stripe
                border
                @header-dragend="colChange"
                header-cell-class-name="y-el-table__header"
                cell-class-name="y-el-table__sell"
                ref="table"
        >
            <el-table-column v-if="$scopedSlots.expand || $slots.expand" type="expand">
                <template>
                    <slot name="expand"></slot>
                </template>
            </el-table-column>

            <el-table-column
                    v-for="column in filteredEvents"
                    :key="column.prop"
                    :prop="column.prop"
                    :label="column.label"
                    :width="column.width"
                    :resizable="column.prop === filteredEvents[filteredEvents.length - 1].prop ? false : true"
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

        <y-pagination
                :total="100"
                :currentPage.sync="currentPage"
                :itemPerPage.sync="itemPerPage"
        ></y-pagination>
    </section>
</template>
<script src="./index.js"></script>
<style src="./index.scss"></style>
