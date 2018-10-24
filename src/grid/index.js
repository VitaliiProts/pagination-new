import VPagination from '../old-pagination/OldPagination.vue';
import NewPagination from '../new-pagination/NewPagination.vue';

export default {
    data() {
        return {
            itemPerPage: 2,
        };
    },
  props: {
      data: {
          type: Array,
          required: true,
      },
      currentPage: {
          type: Number,
      }
  },
  methods: {
    changePage(val) {
        console.log(`current page is:${val}`);
      },
  },
    components: { VPagination, NewPagination },
};
