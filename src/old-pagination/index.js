export default {
    props: {
        pageSize: {
            type: Number,
            default: 10
        },
        total: Number,
        pageSizes: {
            type: Array,
            default() {
                return [10, 20, 50, 100];
            }
        },
        layOut: {
            type: String,
            default: 'prev,pager,next,jumper,total'
        },
        sizeChange: Function,
        currentChange: Function
    },
    computed: {
        pageCount() {
            return this.total ? Math.ceil(this.total / this.pageSize) : 1;
        },
        prevAvaliable() {
            return this.currentPage > 1;
        },
        nextAvaliable() {
            return this.currentPage < this.pageCount;
        },
    },
    data() {
        return {
            currentPage: '',
            jumpPage: 1,
            maxPages: 7
        }
    },
    watch: {
        currentPage(val) {
            if (this.currentChange) {
                this.currentChange(val);
                console.log('TEST CURRENT PAGE' + val);
            }
        },
        sizeChange(val) {
            if (this.sizeChange) {
                this.sizeChange(val);
            }
        }
    },
    methods: {
        prevPage() {
            if (this.prevAvaliable) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.nextAvaliable) {
                this.currentPage++;
            }
        },
        changePage(num) {
            this.currentPage = num;
        },
        jumpToPage(num) {
            if (num > this.pageCount) {
                num = this.pageCount;
            }
            if (num < 1) {
                num = 1;
            }
            this.jumpPage = num;
            this.changePage(num);
        },
    }
}