import YPagination from "./pagination/Pagination.vue";
import YTable from "./table/Table.vue";

export default {
  data() {
    return {
      itemPerPage: 10,
      currentPage: 1,
      hiddenColumns: []
    };
  },
  props: {
    hiddenColumns: {
      type: Array,
      required: false
    },
    name: {
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  },
  components: { YPagination, YTable }
};
