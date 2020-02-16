/* (C) 2019 Stephen Matheis */

/* Global Actions */
import Create_Component from '../Actions/Create_Component.js'
import Get from '../Actions/Get.js'

/* Components */
import Component_HoverForm from './HoverForm.js'

export default function Component_Table(options) {
    const {
        heading,
        toolbar,
        checkboxes,
        hoverFields,
        headers,
        rows,
        tables
    } = options;
    
    const id = `${options.id}-table`;

    let viewTables = tables;
    let hoverForm;

    const component = Create_Component({
        id: id,
        type: 'table',
        html: /*html*/ `
            <div id=${id} class="table-container">
                <table class="table">
                    ${createTableHTML()}
                </table>
            </div>
        `,
        style: /*css*/ `
            /* Container */
            .table-container { /* Hack. */
                user-select: none; /* Hack. */
                display: flex;
                flex-direction: column;
                overflow: overlay;
                background: white;
                overflow: auto;
                border-radius: 4px;
                /* border: solid 1px lightgray; */
                padding: 10px;
                margin-bottom: 50px; /* Hack. */
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
            }

            @media (max-width: 1100px) {
                .table-container {
                    margin: 4px;
                }
            }

            /* Table */
            .table {
                flex: 1;
                width: 100%;
                table-layout: fixed;
                /* margin: 0px 10px 10px 10px; */
                border-collapse: separate;
                border-spacing: 0px;
                font-size: .9em;
            }

            /* Columns */
            .table .checkbox-col {
                width: 50px;
            }

            /* Rows */
            .table tbody tr:not(:last-child) td,
            .table tbody tr:not(:last-child) th {
                border-bottom: solid 1px lightgray;
            } 

            .table tbody tr:hover {
                /*background: ${window.ICTL.secondaryColor};*/
                background: ${window.ICTL.secondaryColor};
            }

            .table tr:hover td:first-child {
                border-radius: 4px 0px 0px 4px;
            }

            .table tr:hover td:last-child {
                border-radius: 0px 4px 4px 0px;
            }

            /* Head */
            .table thead tr th {
                font-weight: 500;
            }

            /* Cells */
            .table th, 
            .table td {
                width: auto;
                padding: 10px;
                vertical-align: top;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .table thead th,
            .table tbody th {
                text-align: left;
            }

            .table thead th {
                border-bottom: solid 2px ${window.ICTL.primaryColor};
                white-space: nowrap;
            }

            .table tbody th {
                white-space: nowrap; 
            }

            .table tbody td:not(:first-child),
            .table tbody th {
                cursor: pointer;
            }

            .table tbody td {
                font-weight: 500;
            }

            /* Inner cell content */
            .table tbody tr td div,
            .table tbody tr th div {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                max-height: 50px;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            /* Checkboxes */
            label {
                display: flex;
            }

            input[type='checkbox'] {
                position: absolute;
                left: -10000px;
                top: auto;
                width: 1px;
                height: 1px;
                overflow: hidden;
            }

            input[type='checkbox'] ~ .toggle {
                width: 20px;
                height: 20px;
                position: relative;
                display: inline-block;
                vertical-align: middle;
                /* border: solid 2px seagreen; */
                border: solid 2px lightgray;
                border-radius: 4px;
                cursor: pointer;
            }

            input[type='checkbox']:hover ~ .toggle {
                border-color: mediumseagreen;
            }
            

            input[type='checkbox']:checked ~ .toggle {
                border: solid 2px mediumseagreen;
                background: mediumseagreen url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=) center no-repeat;
            }
        `,
        parent: options.parent,
        position: options.position || 'beforeend',
        events: [
            {
                selector: `#${id} thead tr th input[type="checkbox"]`,
                event: 'change',
                listener: selectAllBodyCheckboxes
            },
            {
                selector: `#${id} tbody tr td input[type="checkbox"]`,
                event: 'change',
                listener: toggleActionData
            },
            {
                selector: `#${id} tbody tr td:not(:first-child)`,
                event: 'click',
                listener: runAction
            },
            {
                selector: `#${id} tbody tr th`,
                event: 'click',
                listener: runAction
            },
            // {
            //     selector: `#${id} tbody tr td`,
            //     event: 'mouseenter',
            //     listener: showHoverForm
            // },
            // {
            //     selector: `#${id} tbody tr th`,
            //     event: 'mouseenter',
            //     listener: showHoverForm
            // },
            // {
            //     selector: `#${id} tbody tr td`,
            //     event: 'mouseout',
            //     listener: removeHoverForm
            // },
            // {
            //     selector: `#${id} tbody tr th`,
            //     event: 'mouseout',
            //     listener: removeHoverForm
            // },
            // {
            //     selector: `#${ICTL.mainContainerId}`,
            //     event: 'scroll',
            //     listener: removeHoverForm
            // }
        ]
    });

    function createTableHTML() {
        return (checkboxes !== false ? createCheckboxColumn() : '') + (headers !== false ? createHeaders() : '') + (rows !== false ? createRows() : '');
    }

    function createCheckboxColumn() {
        return /*html*/ `
            <colgroup>
                <col class="checkbox-col">
            </colgroup>
        `
    }

    function createHeaders() {
        let headers = /*html*/ `
            <thead>
                <tr>
        `;

        // Add Checkboxes
        if (checkboxes !== false) {
            headers += /*html*/ `
                <th>
                    <label>
                        <input type="checkbox"  />
                        <span class="toggle"></span>
                    </label>
                </th>
            `
        }

        options.table.columns.forEach((column) => {
            headers += /*html*/ `
                <th>${column}</th>
            `;
        });

        headers += /*html*/ `
                </tr>
            </thead>
        `

        return headers;
    }

    function createRows() {
        let rows = /*html*/ `
            <tbody>
        `;
       
        options.data.forEach((item) => {
            rows += /*html*/ `
                <tr data-itemid=${item.Id}>
            `

            // Add Checkboxes
            if (checkboxes !== false) {
                rows += /*html*/ `
                    <td data-itemid=${item.Id}>
                        <label>
                            <input type="checkbox" data-itemid=${item.Id} />
                            <span class="toggle"></span>
                        </label>
                    </td>
                `
            }

            // First column th not td
            const firstField = options.table.fields[0];
            const type = firstField.includes('Date'); // Hack.
            const value = type ? new Date(item[firstField]).toLocaleDateString() : item[firstField];

            rows += /*html*/ `
                <th data-itemid=${item.Id} ${createHoverFormDataset(firstField)}>
                    <div>
                        ${value}
                    </div>
                </th>
            `;

            options.table.fields
            .slice(1)
            .forEach((field, index) => {
                const type = field.includes('Date'); // Hack.
                const value = type ? new Date(item[field]).toLocaleDateString() : item[field];

                rows += /*html*/ `
                    <td data-itemid=${item.Id} ${createHoverFormDataset(field)}>
                        <div>
                            ${value}
                        </div>
                    </td>
                `;
            });

            rows += /*html*/ `
                </tr>
            `;
        });

        rows += /*html*/ `
            </tbody>
        `;

        return rows;
    }

    function createHoverFormDataset(field) {
        const hover = hoverFields ? hoverFields.filter(hoverField => hoverField.column === field)[0] : undefined;

        return hover ? `data-hover="${hover.column}"` : ""
    }

    /** On row lick, fire passed in [options.action] callback */
    function runAction(event) {
        const itemId = parseInt(this.dataset.itemid);

        if (options.action) {
            options.action(itemId);
        }
    }

    function selectAllBodyCheckboxes(event) {
        toggleButtonState();

        const rows = document.querySelectorAll(`#${id} tbody tr td input[type="checkbox"]`); // Just this table's checkboxes
        // const rows = document.querySelectorAll(`.table tbody tr td input[type="checkbox"]`); // Default to all rows in current view

        if (this.checked) {
            rows.forEach(row => {
                toggleChecked(row, true);
            });
        } else {
            rows.forEach(row => {
                toggleChecked(row, false);
            });   
        }
    }

    function toggleChecked(checkbox, checked) {
        const changeEvent = new Event("change", {'bubbles': true, 'cancelable' :false});

        checkbox.checked = checked;
        checkbox.dispatchEvent(changeEvent);
    }

    function toggleButtonState() {
        let checked;

        if (viewTables) {
            // All tables in curren view
            checked = viewTables
                .map(table => [...table.getChecked()])
                .flat()
                .length;
        } else {
            // Just this table's checkboxes
            checked = document.querySelectorAll(`#${id} tbody tr td input[type="checkbox"]:checked`).length;
        }

        if (checked) {
            setButtonState(enableButton);
        } else {
            setButtonState(disableButton);
        }
    }

    function setButtonState(state) {
        Object.entries(toolbar.buttons).forEach(state);
    }
    
    function enableButton([key, value]) {
        value.enable();
    }

    function disableButton([key, value]) {
        value.disable();
    }

    function toggleActionData(event) {
        toggleHeaderCheckbox();
        toggleButtonState();

        const rowCount = document.querySelectorAll(`#${id} tbody tr td input[type="checkbox"]`).length;

        const actionData = {
            list: options.list,
            node: this.closest('tr'),
            table: component,
            heading,
            itemId: this.dataset.itemid,
            rowCount
        }

        if (this.checked) {
            registerActionData(actionData);
        } else {
            removeActionData(actionData);
        }
    }

    function toggleHeaderCheckbox() {
        const rows = document.querySelectorAll(`#${id} tbody tr td input[type="checkbox"]`).length; // Just this table's checkboxes
        const checked = document.querySelectorAll(`#${id} tbody tr td input[type="checkbox"]:checked`).length; // Just this table's checkboxes

        // If all unchecked, uncheck header checkbox 
        if (checked === 0) {
            const selectAll = document.querySelector(`#${id} thead tr th input[type="checkbox"]`);

            selectAll.checked = false;
        } 

        // If all checked, check header checkbox 
        else if (checked === rows) {
            const selectAll = document.querySelector(`#${id} thead tr th input[type="checkbox"]`);

            selectAll.checked = true;
        }
    }

    function registerActionData(item) {
        ICTL.store.registerActionData(item);
    }

    function removeActionData(item) {
        ICTL.store.removeActionData(item);
    }

    /* Hover Form actions */
    async function showHoverForm(event) {
        if (this.dataset.hover) {
            // Remove hover form if present
            removeHoverForm();

            // Get full item by id
            const itemId = parseInt(this.dataset.itemid);
            const item = options.data.filter(item => item.Id === itemId)[0];

            // Define Get options
            const hover = hoverFields.filter(hoverField => hoverField.column === this.dataset.hover)[0];
            const field = hover.field;
            const lookupValue = (hover.dataType === 'string') ? `'${item[field]}'` : item[field];
            const lookupList = hover.lookupList;
            const lookupField = hover.lookupField;

            // Get lookup list item
            const lookup = await Get({
                list: lookupList,
                filter: `${lookupField} eq ${lookupValue}`
            });
            const lookupItem = lookup[0]

            // Get left position
            const cellRect = this.getBoundingClientRect();
            const top = cellRect.top;
            const left = cellRect.left + 20;

            console.log(event);

            const form = Component_HoverForm({
                id: `${lookupList}-${lookupField}`,
                parent: document.body, // Hack
                top,
                left,
                data: lookupItem,
            });

            hoverForm = form;

            form.add();
        }
    }

    function removeHoverForm() {
        if (hoverForm) {
            hoverForm.remove();
        }
    }

    component.setTables = (newTables) => {
        viewTables = newTables;
    }

    component.getChecked = () => {
        return document.querySelectorAll(`#${id} tbody tr td input[type="checkbox"]:checked`);
    }

    component.selectAll = (checked) => {
        const selectAllCheckbox = document.querySelector(`#${id} thead tr th input[type="checkbox"]`);

        if (!selectAllCheckbox) {
            return;
        }

        if (checked && selectAllCheckbox) {
            toggleChecked(selectAllCheckbox, true);
        } else {
            toggleChecked(selectAllCheckbox, false);
        }
    }

    return component;
}