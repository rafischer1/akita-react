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
      { tag: "div", className: "response", controlId: "ws1" },
      {
        tag: "span",
        className: "",
        text: "was a playwright and poet in Southern ",
      },
      { tag: "span", className: "response", controlId: "ws2" },
      {
        tag: "span",
        className: "",
        text: "in the ",
      },
      { tag: "span", className: "response", controlId: "ws3" },
      {
        tag: "span",
        className: "",
        text: "th/nd Century. \n",
      },
      {
        tag: "span",
        className: "",
        text: "Their best works include ",
      },
      { tag: "span", className: "response", controlId: "ws4" },
      {
        tag: "span",
        className: "",
        text: " & ",
      },
      { tag: "span", className: "response", controlId: "ws5" },
      {
        tag: "span",
        className: "",
        text: "as well as Sonnet ",
      },
      { tag: "span", className: "response", controlId: "ws6" },
    ],
    controls: [
      { id: "ws1", type: "text", label: "Name" },
      {
        id: "ws2",
        label: "Location",
        type: "select",
        valueSet: ["England", "Scotland", "Antarctica", "Botswana"],
      },
      { id: "ws3", type: "text", label: "Number" },
      { id: "ws4", type: "text", label: "Name" },
      { id: "ws5", type: "text", label: "Name" },
      { id: "ws6", type: "text", label: "Number" },
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

// todo:: [] extend templates, [] work with classes, [] style controls and templates
