import TimeLine from '../packages/timeline';
console.log(TimeLine);

const install = function(Vue, config = {}) {
    console.log('安装插件');

    if (install.installed) return;
    console.log(TimeLine.name);

    Vue.component('hr-timeline', TimeLine);
};

export default {
    install,
};
