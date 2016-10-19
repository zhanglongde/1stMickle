<style scoped>

</style>
<template>
    <div class="chart" v-el:chart>

    </div>
</template>
<script>
    import echarts from 'echarts';

    module.exports = {
        props: {
            diff: {
                type: Boolean,
                default: false
            },
            right: {
                type: Boolean,
                default: false
            }
        },
        data: function() {
            return {
                data: {}
            }
        },
        ready: function() {

        },
        beforeDestroy: function() {
            this.myChart.dispose();
        },
        methods: {
            initChart: function() {
                this.myChart = echarts.init(this.$els.chart);
                var series = [
                    {
                        type: 'bar',
                        name: 'chart',
                        data: this.data.value
                    }
                ];
                var option = {
                    yAxis: {
                        type: 'value'
                    },
                    xAxis: {
                        type: 'category',
                        data: this.data.key
                    },
                    itemStyle: {
                        normal: {
                            color: this.right ? 'blue' : 'red'
                        }
                    },
                    series: series
                };

                this.myChart.setOption(option);
            }
        },
        events: {
            'set-bar-data': function(data) {
                this.data = data;
                this.initChart();
            }
        }
    }
</script>
