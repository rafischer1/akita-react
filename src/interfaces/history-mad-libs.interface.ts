
export interface MadLibControl {
    id: number;
    type: string;
    label: string;
    valueSet?: string[]
}

export interface HistoryMadLib {
    id: number,
    title: string;
    categories: number[];
    controls: MadLibControl[]
}

export const historyMadLibs:HistoryMadLib[] = [
    {id: 1, title: "William Shakespeare", categories: [1, 5],
        controls: [{id: 1, type: "text", label: "Name"}, {id: 2, label: "Location", type: "select",
            valueSet: ["England", "Scotland", "Antarctica"]}]},
    {id: 2, title: "Moon Landing", categories: [8,7,4,3],
        controls: [{id: 1, type: "text", label: "Name"},
            {id: 2, label:"Location",type: "select",
            valueSet: ["Texas", "St. Petersburg", "Rome", "Siberia", "Transylvania"]},
            {id: 3, type: "text", label: "Color"}]}
];

