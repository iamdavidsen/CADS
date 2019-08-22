import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {IonApp, IonPage, IonRouterOutlet, IonSplitPane} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {AppPage} from './declarations';
import {Provider} from "react-redux";
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import {store} from "./store/configureStore";

import Menu from './components/Menu';
import List from './pages/List';
import {home, list} from 'ionicons/icons';
import Routing from './modules/routing/Routing'

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';

const appPages: AppPage[] = [
    {
        title: 'Home',
        url: '/home',
        icon: home
    },
    {
        title: 'List',
        url: '/home/list',
        icon: list
    }
];

// Adds pwa support 
if (process.env.NODE_ENV === "production") {
    OfflinePluginRuntime.install();
}

const App: React.FunctionComponent = () => (
    <Provider store={store}>
        <IonApp>
            <IonReactRouter>
                <IonSplitPane contentId="main">
                    <Menu appPages={appPages}/>
                    <IonPage id="main">
                        <Routing />
                    </IonPage>
                </IonSplitPane>
            </IonReactRouter>
        </IonApp>
    </Provider>
);

export default App;
