import YPagination from './pagination/Pagination.vue';

export default {
    data() {
        return {
            itemPerPage: 10,
            currentPage: 1,
        };
    },
    props: {
        columns: {
            type: Array,
            required: true,
        },
        data: {
            type: Array,
            required: true,
        },
    },
    components: { YPagination },
};
