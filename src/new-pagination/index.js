export default {
  data() {
    return {
        jumpPage: 1,
        currentPage: this.currentPage,
    };
  },
  props: {
    currentPage: {
      type: Number,
    },
    itemPerPage: {
      type: Number,
    },
    total: {
        type: Number,
    }
  },
  computed: {
      pageCount() {
          return this.total ? Math.ceil(this.total / this.itemPerPage) : 1;
      },
  },
  methods: {
      currentChange(val) {
        this.$emit("update:currentPage", val);
    },
      sizeChange(val) {
        this.$emit("update:itemPerPage", val);
    },
      prevPage() {
        this.currentPage--;
    },
      nextPage() {
        this.currentPage++;
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
        this.sizeChange(num);
        this.currentChange(num);
    }
  },
};
