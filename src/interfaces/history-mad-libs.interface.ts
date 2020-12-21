export interface MadLibControl {
  id: string;
  type: string;
  label: string;
  valueSet?: string[];
}

export interface TemplateElement {
  tag: string;
  className: string;
  text?: string;
  controlId?: string;
}

export interface HistoryMadLib {
  id: number;
  title: string;
  categories: number[];
  controls: MadLibControl[];
  template: TemplateElement[];
}

export const historyMadLibs: HistoryMadLib[] = [
  {
    id: 1,
    title: "William Shakespeare",
    categories: [1, 5],
    template: [
      { tag: "div", className: "", text: "This author's name is:" },
      { tag: "div", className: "", controlId: "ws1" },
    ],
    controls: [
      { id: "ws1", type: "text", label: "Name" },
      {
        id: "ws2",
        label: "Location",
        type: "select",
        valueSet: ["England", "Scotland", "Antarctica"],
      },
    ],
  },
  {
    id: 2,
    title: "Moon Landing",
    categories: [8, 7, 4, 3],
    template: [
      { tag: "h1", className: "title", text: "About the Moon Landing..." },
      { tag: "h4", className: "date", controlId: "moon2" },
    ],
    controls: [
      { id: "moon1", type: "text", label: "Name" },
      {
        id: "moon2",
        label: "Location",
        type: "select",
        valueSet: [
          "Texas",
          "St. Petersburg",
          "Rome",
          "Siberia",
          "Transylvania",
        ],
      },
      { id: "moon3", type: "text", label: "Color" },
    ],
  },
];
