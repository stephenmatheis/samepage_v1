/** (C) Stephen Matheis 2019 */

import Component from '../../Actions/Component.js'

export default function Component_MainContainer(param) {
    const {
        adjacentElement
    } = param;
    
    return Component({
        html: /*html*/ `
            <div id=${param.id}>
                
            </div>
        `,
        canRemoveStyle: 'no',
        style: /*css*/ `
            #${param.id} {
                /* display: flex;
                flex-direction: column; */
                padding: 20px 50px;
                flex: 1; /* Set's main area to fill remaining space of parent */
                height: 100vh;
                overflow: overlay;
            }
        `,
        adjacentElement: adjacentElement,
        position: 'beforeend',
        events: []
    });
}