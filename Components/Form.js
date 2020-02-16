/* (C) 2019 Stephen Matheis */

import Component from '../Actions/Component.js'

export default function Component_Form(param) {
    const id = `${param.id}-form`;

    return Component({
        id: id,
        type: 'form',
        html: /*html*/ `
            <div id=${id} class='form'></div>
        `,
        style: /*css*/ `
            /* Container */
            .form {
                padding: 30px 60px;
                margin: 40px;
                background: ${app.secondaryColor};
                border-radius: 4px;
                box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
                overflow: auto;
                /* overscroll-behavior: contain; /* Prevent parent scroll while cursor in card */
            }
        `,
        adjacentElement: param.parent,
        position: 'beforeend',
        events: [

        ]
    });
}