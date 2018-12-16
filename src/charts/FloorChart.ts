import Chart from '@/models/Chart';
import Floor from '@/models/Floor';

const FLOOR_CHART = new Chart<Floor>([
    {no: 10, init: {name: '通路'}},
    {no: 15, init: {name: '扉'}},
    {no: 18, init: {name: '大扉'}},
    {no: 20, init: {name: '階段'}},
]);

export default FLOOR_CHART;
