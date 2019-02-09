<template>
    <div class="element_block">
        <div>
            <h4> Make a new poll </h4>
                <div class="title">Title: </div><input class="inputClass" name="title" v-model="title"/>
                <div class="title">Options (Seprated by comma): </div><input class="inputClass" name="options" v-model="options"/>
        </div>
        <button @click="click" >Create </button>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    name:"AddPoll",
    data:function(){
        return {
            title: '',
            options: ''
        }
    },
    methods: {
        click: function(){
            if(this.title && this.options){
                const newPoll = {
                    name: this.title
                };
                const options = this.options.split(',').map((option)=>{
                    return {
                        name: option,
                        votes: 0
                    }
                });
                newPoll.options = options;
                this.addPoll(newPoll);
                this.options = '';
                this.title = '';
            }
        },
        ...mapActions(['addPoll'])
    }
}
</script>
<style lang="scss" scoped>
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
}
h4{
    text-align: left;
}
button{
    float: left;
    margin: 10px 0px;
}
</style>

