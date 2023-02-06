/*
export class Hello extends Element 
{
  componentDidMount() {
    this.content(<h1>Hello world!</h1>);
  }
}
*/

export default function OneTimePassword(attributes) {
  return (
  <div>
    <label for="otp">One Time Password:</label>

    <input type="text" id="otp" name="otp" required
           minlength="4" maxlength="8" size="10"/>
  </div>);
}
