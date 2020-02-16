/* (C) 2019 Stephen Matheis */

/* Global Actions */
import Component from '../Actions/Component.js'

export default function Component_Container(options) {
    const id = `${options.id}-container`;

    return Component({
        id: id,
        type: 'container',
        html: /*html*/ `
            <div id=${id} class='container container-${options.align}'></div>
        `,
        style: /*css*/ `
            .container {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
            }

            .container-space-between {
                justify-content: space-between;
            }

            .container-flex-start {
                justify-content: flex-start;
            }

            .container-flex-start > div {
                margin-right: 20px;
            }

            .container-center {
                justify-content: center;
                margin: 25px;
            }

            .container-left {
                justify-content: left;
            }

            .container-right {
                justify-content: right;
            }

            .container-upper-left {
                justify-content: left;
                position: absolute;
            }
        `,
        parent: options.parent,
        position: options.position || 'beforeend',
        events: [
            
        ]
    });
}