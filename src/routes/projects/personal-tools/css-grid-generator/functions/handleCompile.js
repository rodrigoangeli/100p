export const convertState = (state) => {
  return state.reduce(function (acc, x) {
    for (var key in x) acc[key] = x[key];
    return acc;
  }, {});
};

export const compileState = (state) => {
  console.log(state);
  return convertState(
    Object.keys(state).map((obj) => ({
      [obj]: Array.isArray(state[obj])
        ? state[obj]
            .map((e) => e.value + e.type)
            .join()
            .replaceAll(",", " ")
        : typeof state[obj] === "string"
        ? state[obj]
        : state[obj].value + state[obj].type,
    }))
  );
};
