export default {
  props: {
    total: {
      type: Number,
    }
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      jumpPage: 1,
    }
  },
  methods: {
    currentChangePrev(val) {
      this.$emit('update:currentPage', val);
      if (this.prevAvaliable) {
        this.currentPage--;
      }
    },
    currentChangeNext(val) {
      this.$emit('update:currentPage', val);
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
  }
};
