<template>
  <div>12313</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'Home',
})
export default class Home extends Vue {
    mounted() {
        console.log('App is runing');
    }
}
</script>

