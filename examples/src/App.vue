<template>
  <div>
    <div class="timeline-container">
      <hr-timeline :data="data">
      </hr-timeline>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'App',
})
export default class AppEntry extends Vue {
    data: any[] = [];

    mounted() {
        console.log('App is runing');
        this.data = [
            {
                title: 'xx',
                time: '2019-07-01',
            },
            {
                title: 'xx2',
                time: '2019-07-01',
            },
        ];
    }
}
</script>
<style lang="scss" scoped>
.timeline-container {
    padding: 40px;
}
</style>


