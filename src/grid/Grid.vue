<template>
    <section>
        <y-toolbar
                :expanded.sync="expanded"
                :exportTypes="exportTypes"
                :columns="columns"
                :hiddenColumns.sync="hiddenColumns"
                v-if="showToolbar"
        >

        </y-toolbar>

        <y-table :data="data"
                 :columns="columns"
                 :hiddenColumns.sync="hiddenColumns"
        >
            <template slot="expanded">
                <slot name="expand"></slot>
            </template>
            <template slot="custom-column-template">
                <el-table-column
                        v-for="column in filteredEvents"
                        :key="column.prop"
                        :prop="column.prop"
                        :label="column.label"
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
            </template>
        </y-table>

        <y-pagination
                :total="100"
                :currentPage.sync="currentPage"
                :itemPerPage.sync="itemPerPage"
        ></y-pagination>
    </section>
</template>
<script src="./index.js"></script>
<style src="./index.scss"></style>
