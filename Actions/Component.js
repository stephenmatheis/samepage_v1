/** (C) Stephen Matheis 2019 */

export default function Component(options) {
    const {
        id,
        container,
        type,
        html,
        style,
        parent,
        position,
        events,
    } = options;

    const component = {
        id,
        container,
        type,
        html,
        style,
        parent,
        position,
        events,
        permanent: permanent || false,
        get() {
            return document.querySelector(`#${id}`);
        },
        remove() {
            ICTL.store.remove(component);
        },
        empty() {
            const children = document.querySelector(`#${id}`).querySelectorAll('*');
            
            [...children]
                .filter(child => ICTL.store.get(child))
                .map(child => ICTL.store.get(child))
                .forEach(component => component.remove());
        },
        add() {
            checkStyle();
            insertHTML();
        }
    }

    function checkStyle() {
        const findStyle = document.querySelector(`style[data-type="${type}"]`);

        if (!findStyle) {
            addStyle();
        }
    }

    function addStyle() {
        const componentType = type ? `data-type="${type}"` : '';
        const head = document.querySelector('head');
        const html = `
            <style type="text/css" ${componentType} data-canremove="${canRemoveStyle || 'yes'}">
                ${style}
            </style>
        `;
    
        head.insertAdjacentHTML('beforeend', html);
    }

    function insertHTML() {
            if (parent) {
                parent.insertAdjacentHTML(position, html);
            }

            register();
            addEventListeners(events);
    }

    function register() {
        window.ICTL.store.add(component);
    }

    function addEventListeners(events) {
        if (events) {
            events.forEach(item => {
                if (typeof item.selector === 'string') {
                    document.querySelectorAll(item.selector).forEach((node) => {
                        node.addEventListener(item.event, item.listener);
                    });
                } else {
                    item.selector.addEventListener(item.event, item.listener);
                }
            });
        }
    }

    return component;
}