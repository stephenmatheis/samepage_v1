/** (C) Stephen Matheis 2019 */

import Component_SideBar from './Components/SideBar.js'
import Component_AppContainer from './Components/AppContainer.js'
import Component_MainContainer from './Components/MainContainer.js'

export default function View_AppContainer(options) {
    const appContainer = Component_AppContainer({
        id: 'app-container',
        parent: '#app'
    });
    
    appContainer.add();

    const sideBar = Component_SideBar({
        id: 'sidebar',
        parent: `#${appContainer.id}`,
        route: options.route
    });

    sideBar.add();

    const mainContainer = Component_MainContainer({
        id: ICTL.mainContainerId,
        parent: `#${appContainer.id}`
    });

    mainContainer.add();
}