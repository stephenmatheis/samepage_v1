/* (C) 2019 Stephen Matheis */

/* Global Actions */
import Create_Component from '../Actions/Create_Component.js'

export default function Component_List(options) {
    const id = `${options.id}-list`;

    return Create_Component({
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
        parent: options.parent,
        position: 'beforeend',
        events: [

        ]
    });

    function createListHTML() {
        let html = '';
        const fields = [
            {
                label: 'Name',
                field: `${window.ICTL.user.account.FirstName} ${window.ICTL.user.account.LastName}`
            },
            {
                label: 'MTF',
                field: `${window.ICTL.user.account.MTF}`
            },
            {
                label: 'Roles',
                field: window.ICTL.user.roles.map(role => role.Title).join(', ')
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