<script>
import {Pie, mixins} from 'vue-chartjs';
const { reactiveProp } = mixins
export default {
    name: "Pie",
    extends: Pie,
    mixins: [reactiveProp],
    props: ['chartData', 'options'],
    mounted() {
    this.renderChart(this.chartData, this.options)
    }

}
</script>
