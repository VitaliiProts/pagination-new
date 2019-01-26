<template>
    <el-table
            :data="data"
            highlight-current-row
            stripe
            border
            header-cell-class-name="y-el-table__header"
            cell-class-name="y-el-table__sell"
            ref="table"
    >
        <el-table-column v-if="$slots.expanded" type="expand">
            <template slot-scope="row">
                <slot name="expanded"></slot>
            </template>
        </el-table-column>

        <slot name="custom-column-template"></slot>
    </el-table>
</template>
<script src="./index.js"></script>
<style src="./index.scss" scoped></style>