import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
const App = () => {
    return (_jsxs("div", { style: { fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', padding: 24 }, children: [_jsx("h1", { children: "Kinematics Web App" }), _jsx("p", { children: "Welcome \u2014 this is the TypeScript React entry point (index.tsx)." })] }));
};
const rootEl = document.getElementById('root');
if (!rootEl) {
    throw new Error("Missing root element. Please add <div id='root'></div> to your HTML.");
}
createRoot(rootEl).render(_jsx(App, {}));
