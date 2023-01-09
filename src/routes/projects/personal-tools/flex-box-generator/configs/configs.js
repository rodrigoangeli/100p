export const childOptions = {
  order: null,
  "flex-grow": null,
  "flex-shrink": null,
  "flex-basis": null,
  "align-self": [
    "auto",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "stretch",
  ],
  width: null,
  height: null,
};

export const options = {
  "flex-direction": ["row", "column", "row-reverse", "column-reverse"],
  "flex-wrap": ["nowrap", "wrap", "wrap-reverse"],
  "justify-content": [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
  ],
  "align-items": ["flex-start", "flex-end", "center", "baseline", "stretch"],
  "align-content": [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "baseline",
    "stretch",
  ],
};

export const optionsInitialState = {
  "flex-direction": "row",
  "flex-wrap": "wrap",
  "justify-content": "flex-start",
  "align-items": "flex-start",
  "align-content": "stretch",
};
