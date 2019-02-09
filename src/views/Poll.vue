<template>
    <div class="element_block">
        <h3>{{poll.name}}</h3>
        <div class="title">Vote here - </div>
        <select v-model="val">
            <option disabled value="" placeholder="select"> - Select - </option> 
            <option v-for="(option, index) in poll.options" :key="index" :value="index">{{option.name}}</option>
        </select>
        <button @click="click">vote</button>
        <div class="chart">
            <Pie v-if="chartData" :chartData="chartData" :options="options" />
        </div>
        <input placeholder="Add options to poll (comma seperated)" v-model="newOptions"/>
        <button @click="addOptions">Add</button>
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex';
import Pie from '@/components/Pie.vue';
export default {
    name: "Poll",
    data: function(){
        return {
            val: "",
            newOptions:''
        }
    },
    computed: {
        chartData: function(){
            const chartData = {};
            chartData.labels = this.poll.options.map(option=>option.name);
            chartData.datasets = [{
                label: "Result",
                backgroundColor: this.poll.options.map(_=> this.getRandomColor()),
                data: this.poll.options.map(option=> option.votes)
            }];
            return chartData;
        },
        options: function(){
            return  {responsive: true};
        },
        ...mapState({
            poll: function(state){ return state.polls[this.$route.params.id]}
        })
    },
    methods:{
        click: function(){
            const payload = {};
            payload.index = this.$route.params.id;
            const updatedPoll = this.poll;
            updatedPoll.options[this.val].votes++;
            payload.updatedPoll = updatedPoll;
            this.updatePoll(payload);
        },
        getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },
        addOptions:function(){
            const payload = {};
            payload.index = this.$route.params.id;
            payload.updatedPoll = this.poll;
            payload.updatedPoll.options.push(...this.newOptions.split(',').map(o=>{
                return {
                    name:o,
                    votes: 0
                }
            }));
            this.updatePoll(payload);
        },
        ...mapActions(['updatePoll'])
    },
    components:{
        Pie
    }
}
</script>
<style lang="scss" scoped>
select{
    display: inline-block;
    border: solid 1px #C7C4D2;
    width: 442px !important;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 1px;
    color: #555555;
    background-color: #fff;
    background-image: none;
    height: 34px;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
    float:left;
}
button{
    clear: both;
}
.chart{
    width: 400px;
    height:400px;
}
input{
    display: block;
    border: solid 1px #C7C4D2;
    width: 418px !important;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 1px;
    color: #555555;
    background-color: #fff;
    background-image: none;
    margin-top: 40px;
}
</style>

