import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

let mockServerReady: Promise<void> = Promise.resolve();

if (process.env.NODE_ENV === 'development') {
    const {worker} = require("./dev/msw/mockBrowser");
    mockServerReady = worker.start()
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

mockServerReady.then(() => root.render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <App/>
        </DevSupport>
    </React.StrictMode>
));
