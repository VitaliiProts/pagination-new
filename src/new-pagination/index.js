export default {
  props: {
    total: {
      type: Number,
    },
    itemPerPage: {
      type: Number,
    },
    currentPage: {
      type: Number,
    },
  },
  data() {
    return {
      selected: 10,
      jumpPage: 1,
      options: [
        {
          value: 1,
          text: '1',
        },
        {
          value: 2,
          text: '2',
        },
        {
          value: 3,
          text: '3',
        },
        {
          value: 100,
          text: '100',
        },
      ],
    };
  },
  methods: {
    currentChangePrev() {
      const val = this.currentPage - 1;
      this.$emit('update:currentPage', val >= 1 ? val : 1);
      return this.jumpPage > 1 ? this.jumpPage-- : 1;
    },
    currentChangeNext() {
      const val = this.currentPage + 1;
      this.$emit('update:currentPage', val <= this.pageCount ? val : this.pageCount);
      return this.jumpPage < this.pageCount ? this.jumpPage++ : this.pageCount;
    },
    onClickFirstPage() {
      this.$emit('update:currentPage', 1);
      this.jumpPage = 1;
    },
    onClickLastPage() {
      this.$emit('update:currentPage', this.total);
      this.jumpPage = this.total;
    },
    jumpToPage(val) {
      let num = val;
      if (num > this.pageCount) {
        num = this.pageCount;
      }
      if (num < 1) {
        num = 1;
      }
      this.jumpPage = num;
      this.$emit('update:currentPage', parseInt(num, 10));
    },
    onChangeSelected(e) {
      if (e.target.value === '1') {
        this.$emit('update:itemPerPage', 1);
      } else if (e.target.value === '2') {
        this.$emit('update:itemPerPage', 2);
      } else if (e.target.value === '3') {
        this.$emit('update:itemPerPage', 3);
      }
    },
  },
  computed: {
    pageCount() {
      return this.total ? Math.ceil(this.total / this.itemPerPage) : 1;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.total;
    },
  },
};
