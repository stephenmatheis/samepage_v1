/** (C) Stephen Matheis 2019 */

import Component from '../../Actions/Component.js'

export default function Component_AppContainer(param) {
    return Component({
        id: param.id,
        type: 'appcontainer',
        html: /*html*/ `
            <div id=${param.id}></div>
        `,
        canRemoveStyle: 'no',
        style: /*css*/ `
            #${param.id} {
                display: flex;
            }

            *, html {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                box-sizing: border-box;
                color: rgba(0,0,0,0.7);
            }
            
            body {
                padding: 0px;
                margin: 0px;
                box-sizing: border-box;
                background: ${ICTL.secondaryColor};
            }
            
            body::-webkit-scrollbar { 
                display: none; 
            }
            
            ::-webkit-scrollbar {
                width: 10px;
                height: 10px;
            }
            
            ::-webkit-scrollbar-track {
                background: transparent;
            }
            
            ::-webkit-scrollbar-thumb {
                background: ${ICTL.primaryColor};
                width: 8px;
                height: 8px;
                border: 3px solid transparent;
                border-radius: 8px;
                background-clip: content-box;
            }
            
            table {
                border-collapse: collapse;
            }
            
            /* Stop Chrome autocomplete changing background color */
            input:-webkit-autofill,
            input:-webkit-autofill:hover, 
            input:-webkit-autofill:focus, 
            input:-webkit-autofill:active  {
                box-shadow: 0 0 0 30px white inset !important;
            }
            
            .highlight {
                background: #fff3d4 !important;
                border-right: solid 3px #f6b73c !important;
            }
            
            .smooth-tranisition {
                transition: all 300ms ease-in-out;
            }

            /* SVG Icons */
            .icon {
                display: inline-block;
                width: 1em;
                height: 1em;
                stroke-width: 0;
                stroke: ${ICTL.secondaryColor};
                fill: ${ICTL.secondaryColor};
            }

            /* 
                Animate.css | https://github.com/daneden/animate.css

                The MIT License (MIT)

                Copyright (c) 2019 Daniel Eden

                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:

                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.

                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.
            */
            
            @keyframes fadeOutUp {
              from {
                opacity: 1;
              }
            
              to {
                opacity: 0;
                transform: translate3d(0, -100%, 0);
              }
            }
            
            .fadeOutUp {
              animation-name: fadeOutUp;
              animation-duration: 500ms;
              animation-fill-mode: both;
            }
        `,
        parent: param.parent,
        position: 'afterbegin',
        permanent: true,
        events: []
    });
}
