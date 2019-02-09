<template>
    <div class="element_block">
    <table>
        <thead>
            <tr>
                <th v-for="(header, index) in headers" :key="index"> {{header}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(poll, index) in polls" :key="index" @click="rowClicked(index)">
                <td> {{poll.name}} </td>
                <td> {{getTotalVotes(poll)}} </td>
                <td> {{getTotalCandidates(poll)}} </td>
                <td>{{getWinner(poll)}}</td>
                <td @click="(event)=>deleteThisPoll(event,index)"> x </td>
            </tr>
        </tbody>
    </table>
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex';
export default {
    name: 'PollsList',
    data:function(){
        return {
            headers: ['Title', 'Total Votes', 'Total Candidates', 'Winner', 'Remove']
        }
    },
    computed: {
        ...mapState({
            polls: state=> state.polls
        })
    },
    methods:{
        rowClicked:function(index){
            this.$router.push({
                name: 'Poll',
                params: {
                    id: index
                }
            })
        },
        deleteThisPoll:function(event ,index){
            event.stopPropagation();
            this.deletePoll({index:index});
        },
        getTotalVotes(poll){
            let count = 0;
            poll.options.forEach(o=>{
                count+=o.votes;
            });
            return count;
        },
        getTotalCandidates(poll){
            return poll.options.length;
        },
        getWinner(poll){
            let winner = 0;
            poll.options.forEach((option,index)=>{
                if(poll.options[winner].votes<option.votes){
                    winner = index;
                }
            });
            return poll.options[winner].name;
        },
        ...mapActions(['deletePoll'])
    },
}
</script>

<style lang="scss" scoped>
table { 
    border-collapse:collapse;
    width: 100%;
    table-layout:fixed;
    thead {
        background-color: #9c9eb8;
        font-size: 12px;
        font-style: normal;
        font-stretch: normal;
        color: #ffffff;
        tr {
            height: 36px;
            text-align: center;
        }
        th{
            max-width: 30%;
        }
    }
    tbody {
        tr {
            font-size: 12px;
            font-style: normal;
            font-stretch: normal;
            height: 50px;
            text-align: center;
            cursor: pointer;
        }
        td {
            max-width: 30%;
        }
        div {
        font-size: 16px;
        line-height: 1.31;
        color: #8c8793;
        margin: 0;
        text-align: center;
        margin-top: 5px;
        margin-bottom: 5px;
      }
    }
}
</style>