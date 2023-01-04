import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  const { createLogger } = require(`redux-logger`);
  const logger = createLogger({
    collapsed: (getState, action, logEntry) => !logEntry.error,
  });

  middlewares.push(logger);
}

export default configureStore({
  reducer: {
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
  devTools: process.env.NODE_ENV === "development",
});
