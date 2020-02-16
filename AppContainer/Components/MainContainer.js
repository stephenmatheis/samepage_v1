/** (C) Stephen Matheis 2019 */

import Component from '../../Actions/Component.js'

export default function Component_MainContainer(options) {
    return Component({
        id: options.id,
        type: 'maincontainer',
        html: /*html*/ `
            <div id=${options.id}>
                
            </div>
        `,
        canRemoveStyle: 'no',
        style: /*css*/ `
            #${options.id} {
                /* display: flex;
                flex-direction: column; */
                padding: 20px 50px;
                flex: 1; /* Set's main area to fill remaining space of parent */
                height: 100vh;
                overflow: overlay;
            }
        `,
        parent: options.parent,
        position: 'beforeend',
        permanent: true,
        events: []
    });
}