/* (C) 2019 Stephen Matheis */

/* Actions */
import Component from '../Actions/Component.js'
import Router from '../Actions/Router.js'

export default function Component_NewButton(options) {
    const id = `${options.id}-new-button`;

    return Component({
        id: id,
        type: 'newbutton',
        html: /*html*/ `
            <span id=${id} class='new-button' >
                <!-- &plus; Add new ${options.newLabel} -->
                ${options.icon}
            </span>
        `,
        style: /*css*/ `
            .new-button {
                cursor: pointer;
                font-size: 1.5em;
            }

            /* Icon plus */
            .new-button .plus {
                stroke: ${app.primaryColor};
                fill: ${app.primaryColor};
            }
        `,
        adjacentElement: options.parent, // #TODO: remove hard coded class
        root: options.root,
        position: options.position || 'beforeend',
        events: [
            {
                selector: `#${id}`,
                event: 'click',
                listener: showNewForm
            }
        ]
    });

    function showNewForm(event) {
        Router(`${options.list}/NewForm`);
    }
}