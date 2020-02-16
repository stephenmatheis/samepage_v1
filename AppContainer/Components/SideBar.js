/** (C) Stephen Matheis 2019 */

import Component from '../../Actions/Component.js'
import Router from '../../Actions/Router.js'

export default function Component_SideBar(options) {
    const {
        id,
        route
    } = options;

    return Component({
        id: id,
        type: 'sidebar',
        html: /*html*/ `
            <div id=${id} class="sidebar">
                <div class="nav-container">
                    <span class="sidebar-route ${(route === "") ? "sidebar-selected" : ""} home" id="Home">
                        <svg class="icon"><use href="#icon-home"></use></svg>
                    </span>
                    ${createNavByRole()}
                    <!-- Everyone can see their team. Ready only by default, set in Views/Personnel.js -->
                    <span class="nav ${(route === "Personnel") ? "nav-selected" : ""}" id="Personnel">
                        <svg class="icon"><use href="#icon-users"></use></svg>
                    </span>
                    <!-- Everyone can see Tasks. Ready only by default, set in Views/Tasks.js -->
                    <span class="nav ${(route === "Tasks") ? "nav-selected" : ""}" id="Tasks">
                        <svg class="icon"><use href="#icon-clipboard"></use></svg>
                    </span>
                    <!-- Everyone can see Reports -->
                    <span class="nav ${(route === "Reports") ? "nav-selected" : ""}" id="Reports">
                        <svg class="icon"><use href="#icon-stats-bars"></use></svg>
                    </span>
                </div>
                <div class="settings-container">
                    <span class="sidebar-route ${(route === "Settings") ? "sidebar-selected" : ""} settings" id="Settings">
                        <svg class="icon"><use href="#icon-cog"></use></svg>
                    </span>
                </div>
            </div>
        `,
        canRemoveStyle: 'no',
        style: /*css*/ `
            .sidebar {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                height: 100vh;
                /* background: ${app.primaryColor}; */
                background: linear-gradient(to bottom, ${app.gradientColor}, ${app.primaryColor});
                box-shadow: inset 0px 0px 6px 0 rgba(32, 33, 36, .28);
            }

            /* Nav Container */
            .nav-container {
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: center;
            }

            .sidebar .nav,
            .sidebar-route {
                cursor: pointer;
                text-align: left;
                font-size: 1.5em;
                font-weight: 400;
            }

            .home {
                margin: 10px 5px;
                padding: 10px 15px;
                border-radius: 12px;
                box-shadow: -5px 3px 15px 0 rgba(140, 0, 0, 1.0);
            }

            .sidebar .sidebar-selected {
                margin: 10px 5px;
                padding: 10px 15px;
                border-radius: 12px;
                box-shadow: 
                    inset 2px 2px 15px 0 rgb(115, 0, 0),  /* Dark */
                    inset 0px 0px 26px 0 rgb(242, 0, 0) /* Light */
            }

            .sidebar .nav,
            .settings {
                padding: 20px;
                color: ${app.secondaryColor};
            }

            .sidebar .nav-selected {
                background: ${app.secondaryColor};
                box-shadow: -12px 0px 6px 0 rgba(140, 0, 0, 1.0);
                border-radius: 4px 0px 0px 4px;
                transform: translateX(6px);
            }

            .sidebar .nav-selected .icon {
                fill: ${app.primaryColor};
                stroke: ${app.primaryColor};
                background: ${app.secondaryColor};
            }

            /* Settings */
            .settings-container {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: flex-end;
            }
        `,
        parent:options.parent,
        position: 'afterbegin',
        events: [
            {
                selector: '.nav',
                event: 'click',
                listener: routeToView
            },
            {
                selector: '.sidebar-route',
                event: 'click',
                listener: routeToView
            }
        ]
    });

    function createNavByRole() {
        const roles = app.user.roles.map(role => role.Title);
        let html = '';

        if (roles.includes('Personnel')) {
            html += /*html*/ `
                <span class="nav ${(route === "Record") ? "nav-selected" : ""}" id="Record">
                    <svg class="icon"><use href="#icon-user"></use></svg>
                </span>
            `;
        }

            html += /*html*/ `
                
            `;

        return html;
    }

    function routeToView() {
        removeSelectNav();

        if (this.classList.contains('nav')) {
            this.classList.add('nav-selected');
        } else if (this.classList.contains('sidebar-route')) {
            this.classList.add('sidebar-selected');
        }

        const newRoute = (this.id === 'Home') ? '' : this.id;

        Router(newRoute);
    }

    function removeSelectNav() {
        document.querySelectorAll('.sidebar-route').forEach((button) => {
            button.classList.remove('sidebar-selected');
        });
        
        document.querySelectorAll('.nav').forEach((nav) => {
            nav.classList.remove('nav-selected');
        });
    }
}
