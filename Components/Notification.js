/* (C) 2019 Stephen Matheis */

/* Components */
import Create_Component from '../Actions/Create_Component.js'

export default function Component_Notification(options) {
    return Create_Component({
        id: 'ictl-notification',
        type: 'notification',
        html: /*html*/ `
            <div id='ictl-notification' class='notification'>
                ${options.text}
            </div>
        `,
        style: /*css*/ `
            .notification {
                position: fixed;
                z-index: 1000;
                top: 20px;
                right: 5px;
                font-size: 1em;
                padding: 10px 20px;
                color: white;
                background: mediumseagreen;
                border: solid 2px seagreen;
                border-radius: 4px;
                box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
                animation: slidein 500ms ease-in-out forwards, slidein 500ms ease-in-out 3.5s reverse forwards;
            }

            .notification * {
                color: white;
            }

            @keyframes slidein {
                from {
                    /* opacity: 0; */
                    transform: translate(400px);
                }

                to {
                    /* opacity: 1; */
                    transform: translate(-10px);
                }
            }
        `,
        parent: '#app',
        position: 'beforebegin',
        events: [
            
        ]
    });
}