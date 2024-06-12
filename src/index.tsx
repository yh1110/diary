import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import customTheme from "./theme/index";
import {
    UIProvider,
    getColorModeScript,
    defaultConfig,
} from "@yamada-ui/react";

// const injectColorModeScript = () => {
//     const scriptContent = getColorModeScript({
//         initialColorMode: defaultConfig.initialColorMode,
//     });

//     console.log(defaultConfig.initialColorMode);

//     const script = document.createElement("script");

//     script.textContent = scriptContent;

//     document.head.appendChild(script);
// };

// injectColorModeScript();

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
    // <UIProvider theme={customTheme}>
    <UIProvider>
        <App />
    </UIProvider>
);
