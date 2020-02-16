/* (C) 2019 Stephen Matheis */

/* Actions */
import Component from '../Actions/Component.js'

export default function Component_Button(options) {
    const {
        id,
        color,
        disabled,
        icon,
        root,
        parent,
        position,
        action
    } = options;

    const componentId = `${id}-button`;

    const component = Component({
        id: componentId,
        type: 'newbutton',
        html: /*html*/ `
            <span id=${componentId} class='button ${color || ''} ${disabled ? 'disabled' : ''}' >
                ${icon}
            </span>
        `,
        style: /*css*/ `
            /* Default style */
            .button {
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                font-size: 1.5em;
                margin: 0px 20px;
                padding: 10px;
            }

            .button .icon {
                stroke: ${app.primaryColor};
                fill: ${app.primaryColor};
            }

            /* Colors */
            .button.green .icon {
                stroke: mediumseagreen;
                fill: mediumseagreen;
            }

            /* Disabled */
            .button.disabled {
                pointer-events: none;
            }
            
            .button.disabled .icon {
                pointer-events: none;
                stroke: lightgray;
                fill: lightgray;
            }
        `,
        parent: parent,
        root: root,
        position: position || 'beforeend',
        events: [
            {
                selector: `#${componentId}`,
                event: 'click',
                listener: runAction
            }
        ]
    });

    function runAction(event) {
        if (action) {
            action(event);
        }
    }

    component.enable = () => {
        const button = document.querySelector(`#${componentId}`);

        button.classList.remove('disabled');
    }

    component.disable = () => {
        const button = document.querySelector(`#${componentId}`);

        button.classList.add('disabled');
    }

    return component;
}