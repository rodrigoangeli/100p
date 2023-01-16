const opt1 = [
  {
    value: "fr",
    label: "fr",
  },
  {
    value: "px",
    label: "px",
  },
  {
    value: "%",
    label: "%",
  },
  {
    value: "auto",
    label: "auto",
  },
];

const opt2 = [
  {
    value: "px",
    label: "px",
  },
  {
    value: "%",
    label: "%",
  },
];

const opt3 = [
  {
    value: "stretch",
    label: "stretch",
  },
  {
    value: "center",
    label: "center",
  },
  {
    value: "start",
    label: "start",
  },
  {
    value: "end",
    label: "end",
  },
];

export const options = {
  "grid-template-columns": {
    type: "array",
    select: opt1,
  },
  "grid-template-rows": {
    type: "array",
    select: opt1,
  },
  "grid-column-gap": {
    type: "object",
    select: opt2,
  },
  "grid-row-gap": {
    type: "object",
    select: opt2,
  },
  "justify-items": {
    select: opt3,
  },
  "align-items": {
    select: opt3,
  },
};

/* export const optionsInitialState = {
  display: "grid",
  "grid-template-columns": "1fr 200px 1fr",
  "grid-template-rows": "2fr 100px",
  "grid-column-gap": "20px",
  "grid-row-gap": "20px",
  "justify-items": "stretch",
  "align-items": "stretch",
}; */

export const optionsInitialState = {
  "grid-template-columns": [
    { value: 1, type: "fr" },
    { value: 200, type: "px" },
    { value: 1, type: "fr" },
  ],
  "grid-template-rows": [
    { value: 2, type: "fr" },
    { value: 100, type: "px" },
  ],
  "grid-column-gap": { value: 20, type: "px" },
  "grid-row-gap": { value: 20, type: "px" },
  "justify-items": "stretch",
  "align-items": "stretch",
};
