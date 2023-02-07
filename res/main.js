/*JavaScript*/

import OneTimePassword from "./one-time-password.js";



export class LogonBox extends Element {
    /**
     * Called when element is attached to the DOM tree
     */
    componentDidMount() {
        this.render();
    }

    render() {
        const component = <div>
        <div>
            <label >Name:
                <input type="text" novalue="Enter your login name" value={this.attributes["loginname"]} disabled/>
            </label>
            
        <div>
            <label for="password">Password:</label>

            <input type="password" id="password" name="password" required
                   minlength="4" maxlength="8" size="10"/>
        </div>

        <select name="pets" id="pet-select">
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
        </select>

        <OneTimePassword />
        <div>
            <button>
                <svg aria-hidden="true" viewBox="0 0 10 10">
                <path d="M7 9L5 8 3 9V6L1 4h3l1-3 1 3h3L7 6z" />
                </svg>
                Submit
            </button>
        </div>            
            
            
            
            
        </div>
      </div>;

        // replace element content with component
        this.content(component);        
    }

    /**
     * On text enter
     * @param {object} _event
     * @param {Element} select
     */
    ["on change at select"](_event, select) {
        console.log(_event.target.value);
        console.log(select.value);
        //this.showSuggestionsFor(input.value);
    }    
}

/*
function component is not good for event handler, at least I haven't found a sample on that.
export default function LogonBox(props) {





      return (<div>
        <div>
            <label >Name:
                <input type="text" novalue="Enter your login name" value={props.loginname} disabled/>
            </label>
            
        <div>
            <label for="password">Password:</label>

            <input type="password" id="password" name="password" required
                   minlength="4" maxlength="8" size="10"/>
        </div>

        <select name="pets" id="pet-select">
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
        </select>

        <OneTimePassword />
        <div>
            <button>
                <svg aria-hidden="true" viewBox="0 0 10 10">
                <path d="M7 9L5 8 3 9V6L1 4h3l1-3 1 3h3L7 6z" />
                </svg>
                Submit
            </button>
        </div>            
            
            
            
            
        </div>
      </div>);
}
*/

