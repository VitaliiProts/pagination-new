import YPagination from './pagination/Pagination.vue';
import YToolbar from './toolbar/Toolbar.vue';

import { save, load, remove } from './local-storage';

export default {
  data() {
    return {
      itemPerPage: 10,
      currentPage: 1,
      expanded: false,
      hiddenColumns: [],
      scopeExpandedRows: this.expandedRows,
    };
  },
  props: {
    expandedRows: {
      type: Array,
      default: () => [],
    },
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
  methods: {
    colChange(newWidth, oldWidth, column, event) {
      setTimeout(() => {
        console.log(newWidth, oldWidth, column, event)

        const applyTableColWidths = [];
        const applyTableColGroup = this.$refs.table.$el.getElementsByTagName('colgroup')[0];
        const applyTableCol = applyTableColGroup.getElementsByTagName('col');

        let index = this.$slots.expand || this.$scopedSlots.expand ? 1 : 0;
        for (index; index < applyTableCol.length - 1; index++) {
          applyTableColWidths.push(applyTableCol[index].width);
        }
        save(`grid-${this.name}-col-size`, applyTableColWidths);
      }, 100);
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
    const tableWidth = load(`grid-${this.name}-col-size`);
    this.hiddenColumns = hiddenColumns;
    for (let i = 0; i < this.columns.length; i++) {
      this.columns[i].width = tableWidth[i];
    }
    remove(`grid-${this.name}-col-visible`);
  },
  watch: {
    hiddenColumns() {
      const arr = [];
      const calculateWidthTable = Math.round((this.$refs.table.$el.clientWidth - 50)  / this.filteredEvents.length);
      for (let i = 0; i < this.filteredEvents.length; i++) {
        arr.push(calculateWidthTable);
      }

      for (let i = 0; i < this.columns.length; i++) {
        this.columns[i].width = calculateWidthTable;
      }

      save(`grid-${this.name}-col-size`, arr);
      save(`grid-${this.name}-col-visible`, this.hiddenColumns);
    },
  },
  components: { YPagination, YToolbar },
};
