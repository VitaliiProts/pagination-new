export default {
  data() {
    return {
      show: this.expanded,
      checked: [],
      showButtonExpand: true,
      scopeExpandedRows: this.expandedRows,
    };
  },
  props: {
    expandedRows: {
      type: Array,
    },
    exportTypes: {
      type: Array,
      default: [
        { item: 'csv', icon: 'csv' },
        { item: 'pdf', icon: 'pdf' },
        { item: 'xls', icon: 'xls' },
      ],
    },
    columns: {
      type: Array,
    },
    data: {
      type: Array,
    },
    hiddenColumns: {
      type: Array,
    },
    expanded: {
      type: Boolean,
    },
  },
  methods: {
    clickExpand() {
      this.showButtonExpand = false;
      for (let i = 0; i < this.data.length; i++) {
        this.expandedRows.push(this.data[i].id);
      }
    },
    clickCollapse() {
      this.showButtonExpand = true;
      this.$emit('update:expandedRows', (this.scopeExpandedRows = []));
    },
    expand() {
      this.$emit('update:expanded', (this.show = !this.show));
    },
  },
  watch: {
    checked() {
      this.$emit('update:hiddenColumns', this.checked);
    },
    hiddenColumns() {
      this.checked = this.hiddenColumns;
    },
  },
};
