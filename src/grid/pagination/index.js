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
          selectedValue: 10,
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
          const val = this.currentPage - 1;
          this.$emit('update:currentPage', val >= 1 ? val : 1);
      },
      currentChangeNext() {
          const val = this.currentPage + 1;
          this.$emit('update:currentPage', val <= this.pageCount ? val : this.pageCount);
      },
      onClickFirstPage() {
          this.$emit('update:currentPage', 1);
      },
      onClickLastPage() {
          this.$emit('update:currentPage', this.pageCount);
      },
      jumpToPage() {
          if (this.jumpPage > this.pageCount) {
              this.jumpPage = this.pageCount;
          }
          this.$emit('update:currentPage', parseInt(this.jumpPage, 10));
      },
      changeSelected(val) {
          this.selectedValue = val;
          this.$emit('update:itemPerPage', val);
      },
      filterInput(e) {
          const charCode = e.charCode;
          if (charCode !== 43 && charCode > 31 && (charCode < 48 || charCode > 57)) {
              e.preventDefault();
          }
      },
  },
  computed: {
      pageCount() {
          return this.total ? Math.ceil(this.total / this.itemPerPage) : 1;
      },
  },
  watch: {
      currentPage(val) {
          this.jumpPage = val;
      },
  },
};
