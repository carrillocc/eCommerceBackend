import React from "react";
import { store } from "./redux/store/index.js"; // Import Redux store
import { createRoot } from "react-dom/client";
// import "./index.css";
import { App } from "./App";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// const queryClient = new QueryClient();

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    {/* </QueryClientProvider> */}
  </React.StrictMode>
);
