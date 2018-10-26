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
      selected: 1,
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
    changeSelected(val) {
      this.selected = val;
      this.$emit('update:itemPerPage', val);
    },
  },
  computed: {
    pageCount() {
      return this.total ? Math.ceil(this.total / this.itemPerPage) : 1;
    },
  },
};
