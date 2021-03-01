import React, { Component } from 'react';

class Todolist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: " ",
            note: " ",
            time: " ",
            place: " ",
            list: []


        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmithandler = this.onSubmithandler.bind(this);
        this.onSeeListhandler = this.onSeeListhandler.bind(this);


    }

    onChangeHandler(event) {

        this.setState(
            {
                [event.target.name]: event.target.value
            })


    }

    onSubmithandler(event) {
        if (this.props.location.state !== undefined) {


            console.log("value inside state" + this.props.location + " " + this.props.location.state.item)

            const index = this.props.location.state.item
            let temp = this.props.location.state.list
            console.log("current element in state" + this.state.task)
            temp[index] = this.state
            
            this.setState(
                {
                    list: temp
                })
            console.log(this.state.list.length + "elements in the list")


        }

        else {

            this.state.list.push(this.state)
            


            console.log("inside handler 1")

        }
        event.preventDefault();


    }
    onSeeListhandler() {
        console.log(this.props)
        console.log("lenght" + this.state.list.length)
        this.props.history.push('/display', this.state.list)

    }



    render() {
        return (
            <div className="main">
                <div className="form-group">
                    <h1>To Do List</h1>
                    <form className="form-group" onSubmit={this.onSubmithandler}>
                        <div>
                            <label>Task</label>
                            <input type="text" placeholder={this.state.task} name="task" onChange={this.onChangeHandler} />
                        </div>
                        <div>
                            <label>Note</label>
                            <input type="text" placeholder={this.state.note} name="note" onChange={this.onChangeHandler} />
                        </div>
                        <div>
                            <label>Time</label>
                            <input type="text" placeholder={this.state.time} name="time" onChange={this.onChangeHandler} />
                        </div>
                        <div>
                            <label>Place</label>
                            <input type="text" placeholder={this.state.place} name="place" onChange={this.onChangeHandler} />
                        </div>

                        <input type="submit" />
                    </form>
                    <button className="btn btn-primary" onClick={this.onSeeListhandler}> see list</button>
                </div>

            </div>



        );
    }
}

export default Todolist;