<template>
  <span class="time">{{time}}</span>
</template>

<script>
export default {
    name:'Timer',
    data(){
        return{
            time:{
                hour:1,
                minute:1,
                second:1,
                toString(){
                    return this.hour+"小时"+this.minute+"分钟"+this.second+"秒";
                },
                reduceOneSecond(){
                    this.second--;
                    if(this.second<0){
                        this.second=59;
                        this.minute--;
                        if(this.minute<0){
                            this.minute=59;
                            this.hour--;
                        }
                    }
                }
            },
            timer:null,
            interval:null
        }
    },
    methods:{

        init(start,end){

            const t = Math.floor((new Date(end).getTime() - new Date().getTime())/1000);


            const hour = Math.floor(t/3600);
            const minute = Math.floor((t-3600*hour)/60);
            const second = t-hour*3600-60*minute;

            this.time.hour = hour;
            this.time.minute = minute;
            this.time.second = second;

            this.interval = setInterval(()=>{
                this.time.reduceOneSecond();
            },1000);


            this.timer = setTimeout(()=>{
                this.$emit('handleOver');
            },(new Date(end) - new Date()))

        }
    },
    beforeDestroy(){
        clearTimeout(this.timer);
        clearInterval(this.interval);
    }
}
</script>

<style>
</style>