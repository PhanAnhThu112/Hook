import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing:true,
            guestName:"Bùi Văn Tèo",
            course:"react.js",
            message:'Your message here'
        }};
        handleInputChange =(event)=>{
            const target =event.target;
            const value=target.type === "checkbox" ?target.checked:target.value;
            const name=target.name;
            this.setState({
                [name]: value
            });
        }
        handleSubmit =(event)=>{
           alert("Tham gia:"
           +this.state.isGoing+',họ tên:'
           +this.state.guestName+','
           +this.state.course+',và'
           +this.state.message
            );
            event.preventDefault();
        }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Tham gia:
                    <input 
                       name="isGoing"
                       type="checkbox"
                       checked={this.state.isGoing}
                       onChange={this.handleInputChange}/>
                    </label>
                    <br/>
                    <label>
                        Ghi rõ họ tên:
                        <input
                            name="guestName"
                            type="text"
                            value={this.state.guestName}
                            onChange={this.handleInputChange}/>
                    </label>
                    <br/>
                    <label>
                        Chọn khóa học:
                        <select name="course"
                        value={this.state.course}
                        onChange={this.handleInputChange}
                        >
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="javascript">javascript</option>
                        <option value="react.js">React</option>  
                        </select>
                    </label>
                    <br/>
                    <label>
                        message:
                        <textarea
                         name="message"
                         type="text"
                         value={this.state.message}
                         onChange={this.handleInputChange}
                         />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>

        );
    }
}


export default Input;