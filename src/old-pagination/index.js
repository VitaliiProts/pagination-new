export default {
    props: {
        pageSize: {
            type: Number,
            default: 10
        },
        total: Number,
        current: {
            type: Number,
            default: 1
        },
        pageSizes: {
            type: Array,
            default () {
                return [10, 20, 30, 40, 50, 100];
            }
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
        prevIgnored() {
            return this.pageCount > this.maxPages && this.currentPage >= this.maxPages - 1;
        },
        nextIgnored() {
            return this.pageCount > this.maxPages && this.currentPage <= this.pageCount - (this.maxPages - 4);
        }
    },
    data() {
        return {
            currentPage: '',
            jumpPage: 1,
            maxPages: 7
        }
    },
    created() {
        this.currentPage = this.current;
    },
    watch: {
        currentPage(val) {
            if (this.currentChange) {
                this.currentChange(val);
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