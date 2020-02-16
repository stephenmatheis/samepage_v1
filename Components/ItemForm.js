/* (C) 2019 Stephen Matheis */

/* Global Actions */
import Create_Component from '../Actions/Create_Component.js'

export default function Component_ItemForm(options) {
    const id = `${options.id}-item-form`;

    return Create_Component({
        id: id,
        type: 'itemform',
        html: /*html*/ `
            <div id=${id} data-list=${options.list} data-itemid=${options.item.Id}>
                ${createFormHTML()}
            </div>
        `,
        style: /*css*/ `
            /* Rows */
            .item-form-row {
                display: flex;
                flex-direction: column;
                margin-bottom: 10px;
            }

            /* Labels */
            .item-form-label {
                font-size: 1em;
                font-weight: bold;
                padding-left: 5px;
            }

            /* Fields */
            .item-form-field {
                font-size: .9em;
                margin-top: 2px;
                margin-bottom: 4px;
                padding: 10px;
                background: white;
                border: solid 2px lightgray;
                border-radius: 4px;
                font-weight: 500;
            }

            .item-form-field:active,
            .item-form-field:focus {
                outline: none;
                border: solid 2px ${window.ICTL.primaryColor};
            }
        `,
        parent: options.parent,
        position: options.position || 'beforeend',
        events: [

        ]
    });

    function createFormHTML() {
        let html = '';

        options.labels.forEach((label, index) => {
            html += /*html*/ `
                <div class='item-form-row'>
                    <div class='item-form-label'>${label}</div>
                    <div class='item-form-field' contenteditable="true" data-internalfieldname=${options.fields[index]}>${options.item[options.fields[index]]}</div>
                </div>
            `;
        });

        return html;
    }
}