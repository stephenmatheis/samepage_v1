/** (C) Stephen Matheis 2019 */

export default function Store() {
    let store = {
        components: [],
        events: []
    }

    function get(component) {
        return store.components.find(component);
    }
    
    function add(component) {
        store.components.push(component);
    }

    function remove(component) {
        const index = store.components.indexOf(component);

        store.components.splice(index, 1);
    }

    function empty() {
        store.components = [];
        store.events = [];
    }

    return {
        get,
        add,
        remove,
        empty
    }
}