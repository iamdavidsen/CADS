import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";

import { store } from "./store/configureStore";
import Routing from "./modules/routing/Routing";
import { Grommet } from "grommet";
import { theme } from "./theme";

const App: React.FC = () => {
    return (

        <Provider store={store}>
                <Grommet plain className={'Grommet'} theme={theme}>
                    <BrowserRouter>
                        <div className="App">
                            <Routing />
                        </div>
                    </BrowserRouter>
                </Grommet>
        </Provider>
    );
};

export default App;
