import React from 'react'

class AddForm extends React.Component{

    state={
        icerik:''
    }

    handleChange=(e)=>{
        this.setState({
            icerik:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addedTodo(this.state);
        this.setState({
            icerik:''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Yapılacak İş</label>
                    <input type="text" onChange={this.handleChange} value={this.state.icerik}></input>
                </form>
            </div>
        )
    }
}

export default AddForm;