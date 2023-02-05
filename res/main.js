/*JavaScript*/

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
        <div>
            <label for="otp">One Time Password:</label>

            <input type="text" id="otp" name="otp" required
                   minlength="4" maxlength="8" size="10"/>
        </div>
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