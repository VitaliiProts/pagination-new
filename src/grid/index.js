import YPagination from './pagination/Pagination.vue';
import YToolbar from './toolbar/Toolbar.vue';
import YTable from './table/Table.vue';

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
    const visibleColumns = localStorage.getItem(this.name);
    if (visibleColumns) {
      try {
        this.hiddenColumns = JSON.parse(visibleColumns);
      } catch (e) {
        localStorage.removeItem(this.name);
      }
    }
  },
  watch: {
    hiddenColumns() {
      const parsed = JSON.stringify(this.hiddenColumns);
      localStorage.setItem(this.name, parsed);
    },
  },
  components: { YPagination, YToolbar, YTable },
};
