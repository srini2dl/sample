import React from 'react'
import Submit from './Submit'
class Contact extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isSend: false,
          product: []
        };
    }    
 handleClick = async () =>{
     this.setState({
         isSend: true
     })
 }
  render() {
    const { isSend } = this.props;
    return (
        <div>
    <h1>Contact</h1>
        <div class="row">
        <label class="required" for="name">Your name:</label><br />
        <input id="name" class="input" name="name" type="text" value="" size="30" /><br />
        <span id="name_validation" class="error_message"></span>
      </div>           
        <input id="submit_button" type="submit" value="Send email" onClick={this.handleClick} />
        
        {this.state.isSend ? <Submit/> : ""}
        </div>
        )
  }
  
}
export default Contact