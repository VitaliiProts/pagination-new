import YPagination from './pagination/Pagination.vue';
import YToolbar from './toolbar/Toolbar.vue';
import YTable from './table/Table.vue';

import { save, load, remove } from './src/local-storage';

export default {
  data() {
    return {
      itemPerPage: 10,
      currentPage: 1,
      expanded: false,
      hiddenColumns: [],
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    showToolbar: {
      type: Boolean,
    },
    columns: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    exportTypes: {
      type: Array,
      default: () => [{ item: 'csv', icon: 'csv' }, { item: 'xls', icon: 'xls' }],
    },
  },
  computed: {
    filteredEvents() {
      return this.columns.filter(column => {
        const filterHiddenColumns = !this.hiddenColumns.includes(column.prop);
        return filterHiddenColumns;
      });
    },
  },
  mounted() {
    const hiddenColumns = load(`grid-${this.name}-col-visible`);
    this.hiddenColumns = hiddenColumns;
    remove(`grid-${this.name}-col-visible`);
  },
  watch: {
    hiddenColumns() {
      save(`grid-${this.name}-col-visible`, this.hiddenColumns);
    },
  },
  components: { YPagination, YToolbar, YTable },
};
