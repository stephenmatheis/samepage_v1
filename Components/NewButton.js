/* (C) 2019 Stephen Matheis */

/* Actions */
import Create_Component from '../Actions/Create_Component.js'
import Router from '../Actions/Router.js'

export default function Component_NewButton(options) {
    const id = `${options.id}-new-button`;

    return Create_Component({
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
                stroke: ${ICTL.primaryColor};
                fill: ${ICTL.primaryColor};
            }
        `,
        parent: options.parent, // #TODO: remove hard coded class
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