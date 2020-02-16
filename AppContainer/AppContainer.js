/** (C) Stephen Matheis 2019 */

import Component_SideBar from './Components/SideBar.js'
import Component_AppContainer from './Components/AppContainer.js'
import Component_MainContainer from './Components/MainContainer.js'

export default function View_AppContainer(param) {
    const appContainer = Component_AppContainer({
        id: 'app-container',
        adjacentElement: '#app'
    });
    
    appContainer.add();

    const sideBar = Component_SideBar({
        id: 'sidebar',
        adjacentElement: `#${appContainer.id}`,
        route: param.route
    });

    sideBar.add();

    const mainContainer = Component_MainContainer({
        id: 'main-container',
        adjacentElement: `#${appContainer.id}`
    });

    mainContainer.add();
}
