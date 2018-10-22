import OldPagination from './old-pagination/OldPagination.vue';
import VGrid from './grid/Grid.vue';
export default{
    data() {
      return {
        tableData: [
          {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          },
        ],
        pageNo: 1,
        pageSize: 10,
      }
    },
    methods:{
      handleSizeChange(val) {
        this.pageSize = val;
      },
      handleCurrentChange(val) {
        this.pageNo = val;
      }
    },
    filters:{
      pagination(array, pageNo, pageSize){
        let offset = (pageNo - 1) * pageSize;
        let data = (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
        return data;
      }
    },
    components: { OldPagination, VGrid }
}
