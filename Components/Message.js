/* (C) 2019 Stephen Matheis */

import Component from '../Actions/Component.js'

export default function Component_Heading(options) {
    const {
        id,
        parent,
        text,
    } = options;

    const componentId = `${id}-message`;

    return Component({
        id: componentId,
        type: 'message',
        html: /*html*/ `
            <div id=${componentId} class='message'>
                <div>${text}</div>
            </div>
        `,
        style: /*css*/ `
            .message {
                padding: 10px;
                border-radius: 4px 4px 0px 0px;
            }

            .message > div {
                font-size: 1.2em;
                text-align: center;
                font-weight: 500;
                color: ${app.defaultColor};
            }
        `,
        parent: parent,
        position: 'beforeend',
        events: [
            
        ]
    });
}