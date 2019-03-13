import { MODE } from '@/data/ENCOUNTER_DATA';

export default class Mode {
  public static color(mode: MODE): string {
    const COLORS = ['green', 'blue', 'red', 'black'];
    return COLORS[mode] || 'error';
  }
  public static label(mode: MODE): string {
    const LABELS = ['簡単', '通常', '困難', '死地'];
    return LABELS[mode] || 'error';
  }
}
