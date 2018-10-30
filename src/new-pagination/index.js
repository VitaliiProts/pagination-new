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
      ippOptions: [
        {
          value: 10,
          text: '10',
        },
        {
          value: 20,
          text: '50',
        },
        {
          value: 50,
          text: '50',
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
      this.$emit('update:currentPage', this.currentPage - 1);
      return this.jumpPage > 1 ? this.jumpPage-- : 1;
    },
    currentChangeNext() {
      this.$emit('update:currentPage', this.currentPage + 1);
      return this.jumpPage < this.pageCount ? this.jumpPage++ : this.pageCount;
    },
    onClickFirstPage() {
      this.$emit('update:currentPage', 1);
      this.jumpPage = 1;
    },
    onClickLastPage() {
      this.$emit('update:currentPage', this.pageCount);
      this.jumpPage = this.total;
    },
    jumpToPage(val) {
      let num = val;
      if (num > this.pageCount) {
        num = this.pageCount;
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
  watch: {
    jumpPage(val) {
      let a = /^[0-9]*$/;
      if (val.match(a)) {
        return true;
      }
      this.jumpPage = '';
    }
  },
};
