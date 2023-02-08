
export default class OnDemandPassword extends Element 
{
  componentDidMount() {
//    this.content(<h1>OnDemandPassword!</h1>);
  }

  render() {
    return (<div id="authenticator">
      <img src="sms.png" width="64" height="64" class="sprite"/>
      <img src="email.png" width="64" height="64" class="sprite"/>
      <img src="telephone.png" width="64" height="64" class="sprite"/>
      <img src="twitter.png" width="64" height="64" class="sprite"/>
    </div>);
}
}

/*
export default function OneTimePassword(attributes) {
  return (
  <div>
    <label for="otp">One Time Password:</label>

    <input type="text" id="otp" name="otp" required
           minlength="4" maxlength="8" size="10"/>
  </div>);
}
*/