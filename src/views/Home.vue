<template>
  <div >
    <h3>Voting App</h3>
    <AddPoll/>
    <PollsList />
  </div>
</template>

<script>
// @ is an alias to /src
import AddPoll from '@/components/addPoll.vue';
import PollsList from '@/components/pollsList';

export default {
  name: 'home',
  components: {
    AddPoll,
    PollsList
  }
}
</script>
