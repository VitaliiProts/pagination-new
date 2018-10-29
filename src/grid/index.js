import VPagination from '../old-pagination/OldPagination.vue';
import NewPagination from '../new-pagination/NewPagination.vue';

export default {
    data() {
        return {
            itemPerPage: 10,
            currentPage: 1,
            total: this.data.length,
        };
    },
  props: {
      data: {
          type: Array,
          required: true,
      },
  },
  methods: {
    changePage(val) {
        console.log(`current page is:${val}`);
      },
  },
    components: { VPagination, NewPagination },
};
