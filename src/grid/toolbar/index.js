export default {
  data() {
    return {
      show: this.expanded,
      checked: [],
    };
  },
  props: {
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
