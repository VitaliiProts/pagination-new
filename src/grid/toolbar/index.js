export default {
  props: {
      expanded: {
          type: Boolean,
      },
      exportTypes: {
          type: Array,
          default: () => ['csv', 'pdf', 'xls'],
      },
      items: {
          type: [Object, Array],
      },
  },
  data() {
      return {};
  },
  methods: {
      changeFilters() {
          this.$emit('update:expanded', this.expanded !== true);
          console.log('CLICK');
      },
  },
};
