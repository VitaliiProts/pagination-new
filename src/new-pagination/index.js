export default {
  props: {
    total: {
      type: Number
    },
    currentPage: {
      type: Number,
    }
  },
  data() {
    return {
      pageSize: 10,
      jumpPage: 1
    };
  },
  methods: {
    currentChangePrev() {
      const val = this.currentPage - 1;
      this.$emit("update:currentPage", val >= 1 ? val : 1);
    },
    currentChangeNext() {
      const val = this.currentPage + 1;
      this.$emit("update:currentPage", val <= this.pageCount ? val : this.pageCount);
    },
    jumpToPage(num) {
      if (num > this.pageCount) {
        num = this.pageCount;
      }
      if (num < 1) {
        num = 1;
      }
      this.jumpPage = num;
      this.$emit("update:currentPage", parseInt(num));
    }
  },
  computed: {
    pageCount() {
      return this.total ? Math.ceil(this.total / this.pageSize) : 1;
    },
  }
};
