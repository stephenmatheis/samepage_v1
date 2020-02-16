/** (C) Stephen Matheis 2019 */

export default function Component(options) {
    const {
        container,
        html,
        style,
        adjacentElement,
        position,
        events,
    } = options;

    const component = {
        id: app.setComponentId(),
        container,
        html,
        style,
        adjacentElement,
        position,
        events,
        get() {
            return document.querySelector(`#${id}`);
        },
        remove() {
            app.store.remove(component);
        },
        empty() {
            const children = document.querySelector(`#${id}`).querySelectorAll('*');
            
            [...children]
                .filter(child => app.store.get(child))
                .map(child => app.store.get(child))
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
        const head = document.querySelector('head');
        const html = `
            <style type="text/css" data-component="${id}">
                ${style}
            </style>
        `;
    
        head.insertAdjacentHTML('beforeend', html);
    }

    function insertHTML() {
            if (adjacentElement) {
                adjacentElement.insertAdjacentHTML(position, html);
            }

            register();
            addEventListeners(events);
    }

    function register() {
        app.store.add(component);
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