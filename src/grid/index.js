import VPagination from '../old-pagination/OldPagination.vue';

export default {
  props: {
      columns: {
          type: Array,
          required: true,
      },
      data: {
          type: Array,
          required: true,
      },
      itemPerPage: {
          type: Number,
      },
      currentPage: {
          type: Number,
      },
  },
  methods: {
    changePage(val) {
        console.log(`current page is:${val}`);
      },
      handleSizeChange(val) {
          this.$emit('update:itemPerPage', val);
      },
      handleCurrentChange(val) {
          this.$emit('update:currentPage', val);
      },
  },
  components: { VPagination },
};
