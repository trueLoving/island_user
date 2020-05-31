export default {
    data() {
        return {
            item: {},
            record: {}
        }
    },
    methods: {
        storAnswer() {
            // todo 请求后端
            this.$message({type:'success',text:'保存成功'});
        },
        init(item, record) {
            this.item = JSON.parse(JSON.stringify(item));
            this.record = JSON.parse(JSON.stringify(record));
        }
    },
}