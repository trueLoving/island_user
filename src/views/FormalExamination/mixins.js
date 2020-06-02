import { storeAnswer } from "@/api/exams";

export default {
    data() {
        return {
            item: {},
            record: {}
        }
    },
    methods: {
        storeAnswer() {
            
            let user_answer = this.record.user_answer;
            if(user_answer instanceof Array){
                user_answer = user_answer.join('');
            }

            // todo 请求后端
            const data = {
                user_id: this.$store.getters.user_id,
                exam_id: this.$route.query.exam_id,
                problem_id: this.item.id,
                user_answer: user_answer
            }

            console.log(data);

            storeAnswer(data).then((res) => {
                this.$message({type:'success',text:'保存成功'});
                this.$emit('store',this.record);
            }).catch(_ => {
                this.$router.push('/registeredForExamination');
            })

        },
        init(item, record) {
            this.item = JSON.parse(JSON.stringify(item));
            this.record = JSON.parse(JSON.stringify(record));
        }
    },
}