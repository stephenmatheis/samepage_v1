/** (C) Stephen Matheis 2019 */

export default function Store() {
    let store = {
        appContainer,
        mainContainer,
        components: [],
        events: []
    }

    return {
        setAppContainer(component) {
            store.appContainer = component;
        },
        getAppContainer() {
            return store.appContainer;
        },
        setMainContainer(component) {
            store.mainContainer = component;
        },
        getMainContainer() {
            return store.mainContainer;
        },
        get(component) {
            return store.components.find(component);
        },
        add(component) {
            store.components.push(component);
        },
        remove(component) {
            const index = store.components.indexOf(component);
    
            store.components.splice(index, 1);
        },
        empty() {
            store.components = [];
            store.events = [];
        }
    }
}