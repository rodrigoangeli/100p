export const getProjectCountByStatus = (options, arr, text) => {
  return options.map((e) => ({
    ...e,
    count: filterList(arr, {
      status: e.value,
      text,
    })
      .map((e) => e.children)
      .flat().length,
  }));
};

export const filterList = (arr, obj) => {
  return arr
    .map((a) => ({
      ...a,
      children: a.children.filter(
        (el) =>
          (obj.status === "all" ? { ...el } : el.status === obj.status) &&
          el.title.toLowerCase().includes(obj.text.toLowerCase())
      ),
    }))
    .filter(({ children }) => children.length > 0);
};
