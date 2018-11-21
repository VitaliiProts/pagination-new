export default {
  data() {
    return {
      show: this.expanded
    };
  },
  props: {
    exportTypes: {
      type: Array,
      default: [
        { item: "csv", icon: "csv" },
        { item: "pdf", icon: "pdf" },
        { item: "xls", icon: "xls" }
      ]
    },
    expanded: {
      type: Boolean
    }
  },
  methods: {
    expand() {
      this.$emit("update:expanded", (this.show = !this.show));
    }
  },
};
