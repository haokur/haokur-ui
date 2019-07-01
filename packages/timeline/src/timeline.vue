<template>
  <ul>
    <li class="timeline-item"
        v-for="(item,index) in data"
        :key="index">
      <slot :row="item">
        <h5 class="timeline-item-title">
          <slot name="title">标题必须(slot必选:title)</slot>
        </h5>
        <div class="timeline-item-content">
          <slot name="content"></slot>
        </div>
        <div class="timeline-item-time">
          <slot name="time">2017-12-11(slot必选:time)</slot>
        </div>
      </slot>
    </li>
  </ul>

</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
    name: 'hr-timeline',
})
export default class TimeLine extends Vue {
    @Prop({ default: [] })
    data: any[];

    mounted() {
        console.log('App is runing');
    }
}
</script>
<style lang="scss" scoped>
</style>
<style lang="scss" scoped>
.timeline-item {
    padding-bottom: 60px;
    padding-left: 40px;
    border-left: 1px solid #e1e1e1; /* no */
    &:last-child {
        border-left: none;
    }
    .timeline-item-title {
        position: relative;
        font-size: 32px;
        line-height: 1.5;
        font-weight: 500;
        &:before {
            content: '';
            position: absolute;
            left: -40px;
            top: 0;
            width: 16px; /*no*/
            height: 16px; /*no*/
            background: #fff;
            border-radius: 50%;
            transform: translate3d(-50%, 0, 0);
        }
        &:after {
            content: '';
            position: absolute;
            left: -40px;
            top: 16px;
            width: 12px; /*no*/
            height: 12px; /*no*/
            background: #999;
            border-radius: 50%;
            transform: translate3d(-50%, -50%, 0);
        }
    }
    .timeline-item-content {
        margin-top: 10px;
        font-size: 28px;
    }
    .timeline-item-time {
        color: #999;
        margin-top: 10px;
        font-size: 26px;
    }

    &:first-child {
        color: #ff640c;
        .timeline-item-title {
            &:after {
                background: #ff640c;
            }
        }
        .timeline-item-time {
            color: #ff640c;
        }
    }
}
</style>

