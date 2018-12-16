import Floor from '@/models/Floor';
import FloorChart from '@/charts/FloorChart';

export default class State {
    public floors: Floor[] = [
        FloorChart.roll(Floor),
        FloorChart.roll(Floor),
        FloorChart.roll(Floor),
    ];
}
