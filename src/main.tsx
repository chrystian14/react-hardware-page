import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.scss";
import { BagProvider } from "./providers/BagContext.tsx";
import { ModalProvider } from "./providers/ModalContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BagProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </BagProvider>
  </StrictMode>
);
