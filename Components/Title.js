/* (C) 2019 Stephen Matheis */

import Component from '../Actions/Component.js'

export default function Component_Title(param) {
    return Component({
        html: /*html*/ `
            <div id=${id} class='title'>
                <h1>${param.title}</h1>
            </div>
        `,
        style: /*css*/ `
            .title h1{
                font-size: 2.5em;
                font-weight: 400;
                color: ${app.primaryColor};
                margin-top: 0px;
            }
        `,
        adjacentElement: param.parent,
        position: 'beforeend',
        events: [
            
        ]
    });
}