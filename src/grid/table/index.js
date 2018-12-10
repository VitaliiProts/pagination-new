export default {
  props: {
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    hiddenColumns: {
      type: Array
    }
  }
};
