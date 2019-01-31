import YPagination from './pagination/Pagination.vue';
import YToolbar from './toolbar/Toolbar.vue';

import { save, load, remove } from './local-storage';
import Columns from './src/column-helper';

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
    colChange() {
      // 1. Викликаємо метод хелпера (recalculateWidth) і він актуалізує дані про ширини в tableColumns
      // 2. Сетимо tableColumns в даному компоненті
      
      setTimeout(() => {
        this.columnHelper.resizeColumn(this.filteredEvents ,this.$slots, this.$scopedSlots);

        // const applyTableColWidths = [];
        // const applyTableColGroup = this.$refs.table.$el.getElementsByTagName('colgroup')[0];
        // const applyTableCol = applyTableColGroup.getElementsByTagName('col');

        // let index = this.$slots.expand || this.$scopedSlots.expand ? 1 : 0;
        // for (index; index < applyTableCol.length - 1; index++) {
        //   applyTableColWidths.push(applyTableCol[index].width);
        // }
        // save(`grid-${this.name}-col-size`, applyTableColWidths);
      }, 100);
    },
  },
  computed: {
    filteredEvents() {
      if (!this.columnHelper) {
        this.columnHelper = new Columns(this.$refs.table, this.name, this.columns);
      }
        return this.columnHelper.getVisibleColumns();
    },
  },
  mounted() {
    // 1. Створюємо хелпер, в конструкторі хелпера достаємо дані з локал сторейджа про приховані колонки та про ширини колонок
    //    та формуємо список колонок  tableColumns
    // 2. Сетимо tableColumns в даному компоненті


    this.columnHelper = new Columns(this.$refs.table, this.name, this.columns);
    // const hiddenColumns = load(`grid-${this.name}-col-visible`);
    this.columnHelper.setColWidth();
    // this.columnHelper.setColWidth();
    // const tableWidth = load(`grid-${this.name}-col-size`);
    // this.hiddenColumns = hiddenColumns;
    // for (let i = 0; i < this.columns.length; i++) {
    //   this.columns[i].width = tableWidth[i];
    // }
    // remove(`grid-${this.name}-col-visible`);
  },
  watch: {
    hiddenColumns() {      
      // 1. Передати в хелпер нові приховані колонки (updateHiddenColumns).
      //    В цей момент хелпер перекалькулює внутрішню змінну tableColumns
      // 2. Засетити змінну таблеКолумнс в даному гріді на значення повернуте з хелпера




      // this.columnHelper.showHideColumn(this.hiddenColumns);
      // console.log(`GRID ${this.filteredEvents}`);

      // console.log(this.filteredEvents);
      // const arr = [];
      // const calculateWidthTable = Math.round((this.$refs.table.$el.clientWidth - 50)  / this.filteredEvents.length);
      // for (let i = 0; i < this.filteredEvents.length; i++) {
      //   arr.push(calculateWidthTable);
      // }

      // for (let i = 0; i < this.columns.length; i++) {
      //   this.columns[i].width = calculateWidthTable;
      // }

      // save(`grid-${this.name}-col-size`, arr);
      // save(`grid-${this.name}-col-visible`, this.hiddenColumns);
    },
  },
  components: { YPagination, YToolbar },
};
