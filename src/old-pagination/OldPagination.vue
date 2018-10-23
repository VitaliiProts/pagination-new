<template>
    <div class='pagination'>
        <div class='total'>Total {{total}}</div>
        <ul class='pager'>
            <li :class='["arrow",{avaliable:prevAvaliable}]' @click='prevPage'>prev</li>
            <li v-show='!isHidden(num)' v-for='num in pageCount' @click='changePage(num)' :class='{active:currentPage==num}'>
                {{num}}
            </li>
            <li :class='["arrow",{avaliable:nextAvaliable}]' @click='nextPage'>next</li>
        </ul>
        <div class='jump'>
            <span>page: </span>
            <input type="number" v-model='jumpPage' @keyup.enter="jumpToPage(jumpPage)">
        </div>
    </div>
</template>
<script src='./index.js'></script>
<style lang='scss' scoped>
    .pagination {
        * {
            padding: 0;
            margin: 0;
        }
    }
    
    .total {
        padding: 5px;
        float: left;
    }
    
    .pager {
        float: left;
        list-style: none;
        overflow: hidden;
        li {
            padding: 5px;
            float: left;
            list-style: none;
            cursor: pointer;
            &.active {
                color: #66ccff;
            }
        }
    }
    
    .arrow {
        color: #ddd;
        &.avaliable {
            color: #66ccff;
        }
    }
    
    .jump {
        float: left;
        padding: 5px;
        span {
            float: left;
        }
        input {
            width: 30px;
            text-align: center;
            margin-left: 5px;
            float: left;
            border: none;
            border-bottom: 1px solid #66ccff;
        }
    }
</style>
