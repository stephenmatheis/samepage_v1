/** (C) Stephen Matheis 2019 */

import Create_Component from '../Actions/Create_Component.js'

export default function Component_ViewContainer(options) {
    const id = `${options.id}-view-container`
    return Create_Component({
        id: id,
        type: id,
        html: /*html*/ `
            <div id=${id} class="view-container"></div>
        `,
        style: /*css*/ `
            .view-container {
                position: relative;
                /* flex: 1;
                display: flex;
                flex-direction: column; */
            }
        `,
        parent: options.parent,
        position: 'beforeend',
        events: []
    });
}