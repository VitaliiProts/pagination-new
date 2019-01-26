import YPagination from './pagination/Pagination.vue';
import YToolbar from './toolbar/Toolbar.vue';

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
  methods: {
    colChange() {
      setTimeout(() => {
        const applyTableColWidths = [];
        const applyTableColGroup = this.$refs.table.$el.getElementsByTagName('colgroup')[0];
        const applyTableCol = applyTableColGroup.getElementsByTagName('col');

        let index = this.$slots.expand || this.$scopedSlots.expand ? 1 : 0;
        for (index; index < applyTableCol.length; index++) {
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
      save(`grid-${this.name}-col-visible`, this.hiddenColumns);
    },
  },
  components: { YPagination, YToolbar },
};
