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

// todo:: [] extend templates, [] work with classes, [] style controls and templates
