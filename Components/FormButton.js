/* (C) 2019 Stephen Matheis */

/* Global Actions */
import Component from '../Actions/Component.js'

export default function Component_FormButton(options) {
    const id = `${options.id}-${options.type}-form-button`;

    return Component({
        id: id,
        type: `${options.type}button`,
        html: /*html*/ `
            <div id=${id} class="form-button ${options.type}-button">${options.value}</div>
        `,
        style: /*css*/ `
            .form-button {
                cursor: pointer;
                margin: 10px;
                padding: 5px 10px;
                font-weight: bold;
                text-align: center;
                border-radius: 4px;
            }

            .back-button {
                color: ${app.primaryColor};
                background: ${app.secondaryColor};
                border: solid 2px ${app.primaryColor};
            }

            .create-button,
            .update-button {
                color: ${app.secondaryColor};
                background: ${app.primaryColor};
                border: solid 2px ${app.primaryColor};
            }

            .delete-button {
                color: firebrick;
                text-decoration: underline;
                font-size: .9em;
            }

            /* .delete-button {
                color: ${app.secondaryColor};
                background: firebrick;
                border: solid 2px firebrick;
                box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
            } */
        `,
        parent: options.parent,
        position: 'beforeend',
        events: [
            {
                selector: `#${id}`,
                event: 'click',
                listener: (event) => {
                    if (options.action) {
                        options.action();
                    }
                }
            }
        ]
    });

}