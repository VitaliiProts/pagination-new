import YPagination from './pagination/Pagination.vue';
import YToolbar from './toolbar/Toolbar.vue';

import { save, load } from './local-storage';

export default {
  data() {
    return {
      itemPerPage: 10,
      currentPage: 1,
      expanded: false,
      hiddenColumns: [],
      scopeExpandedRows: this.expandedRows,
      columnHelper: null,      
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
    colChange(newWidth, oldWidth, column) {
      const property = column.property;
      setTimeout(() => {
        const applyTableColWidths = [];
        const applyTableColGroup = this.$refs.table.$el.getElementsByTagName('colgroup')[0];
        const applyTableCol = applyTableColGroup.getElementsByTagName('col');

        this.filteredEvents.forEach((items, i) => {
          const item = items;
          if (property === item.prop) {
            if (this.$scopedSlots.expand || this.$slots.expand) {
              item.width =
                property === this.columns[this.columns.length - 1].prop
                  ? null
                  : applyTableCol[i + 1].width;
                } else {
                  item.width = applyTableCol[i].width;
                }
            }
            applyTableColWidths.push(item.width);
        });

        save(`grid-${this.name}-col-size`, applyTableColWidths);
      }, 100);
    },
  },
  computed: {
    filteredEvents() {
      return this.columns.filter(column => !this.hiddenColumns.includes(column.prop));
    },
  },
  mounted() {
    const hiddenColumns = load(`grid-${this.name}-col-visible`);
    const tableColSize = load(`grid-${this.name}-col-size`);
    this.hiddenColumns = hiddenColumns;
    for (let i = 0; i < this.filteredEvents.length; i++) {
      this.filteredEvents[i].width = tableColSize[i];
    }
  },
  watch: {
    hiddenColumns() {
      this.colChange(null, null, this.hiddenColumns);
      save(`grid-${this.name}-col-visible`, this.hiddenColumns);
    },
  },
  components: { YPagination, YToolbar },
};
