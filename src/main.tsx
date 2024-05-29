import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import "./index.css";
import { store, persistor } from "./Redux/Store.tsx";
import { PersistGate } from "redux-persist/integration/react";
import SocketProvider from "./Context/SocketContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SocketProvider>
        <App />
      </SocketProvider>
    </PersistGate>
  </Provider>
);
