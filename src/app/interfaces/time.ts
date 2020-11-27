export interface Time {
    id?: string;
    name?: string;
    min?: number;
    sec?: number;
    timeDisplay?: string;
    timeSec?: number;
}

export interface TimeForm {
    min: number;
    sec: number;
}