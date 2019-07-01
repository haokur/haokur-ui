<template>
  <div>12313</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'App',
})
export default class AppEntry extends Vue {
    mounted() {
        console.log('App is runing');
    }
}
</script>

