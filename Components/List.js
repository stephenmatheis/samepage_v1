/* (C) 2019 Stephen Matheis */

/* Global Actions */
import Component from '../Actions/Component.js'

export default function Component_List(options) {
    const id = `${options.id}-list`;

    return Component({
        id: id,
        type: 'list',
        html: /*html*/ `
            <div id=${id} class='list'>
                ${createListHTML()}
            </div>
        `,
        style: /*css*/ `
            /* Container */
            .list {
                display: flex;
                flex-direction: column;
                overflow: overlay;
                overscroll-behavior: contain; /* Prevent parent scroll while cursor in card */
                padding: 40px 60px;
            }

            /* Rows */
            .list-row {
                margin-bottom: 20px;
            }

            /* Labels */
            .list-row-label {
                font-size: 1.1em;
                font-weight: bold;
            }
        `,
        adjacentElement: options.parent,
        position: 'beforeend',
        events: [

        ]
    });

    function createListHTML() {
        let html = '';
        const fields = [
            {
                label: 'Name',
                field: `${app.user.account.FirstName} ${app.user.account.LastName}`
            },
            {
                label: 'MTF',
                field: `${app.user.account.MTF}`
            },
            {
                label: 'Roles',
                field: app.user.roles.map(role => role.Title).join(', ')
            }
        ]

        fields.forEach(field => {
            html += /*html*/ `
                <div class="list-row">
                    <div class='list-row-label'>${field.label}</div>
                    <div class='list-row-field'>${field.field}</div>
                </div>
            `;
        })

        return html;
    }
}