/* (C) 2019 Stephen Matheis */

import Create_Component from '../Actions/Create_Component.js'

export default function Component_Title(options) {
    const id = `${options.id}-title`;

    return Create_Component({
        id: id,
        type: 'title',
        html: /*html*/ `
            <div id=${id} class='title'>
                <h1>${options.title}</h1>
            </div>
        `,
        style: /*css*/ `
            .title h1{
                font-size: 2.5em;
                font-weight: 400;
                color: ${window.ICTL.primaryColor};
                margin-top: 0px;
            }
        `,
        parent: options.parent,
        position: 'beforeend',
        events: [
            
        ]
    });
}