import React, { Component } from 'react';


class Activitylist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: "",
            note: "",
            time: "",
            place: "",
            list: [{ task: "code code code", note: "be patient", time: "12:33", place: "pune", },],
            indexoftask: ""

        }
        this.onUpdateHandler = this.onUpdateHandler.bind(this)
        this.getindexhandler = this.getindexhandler.bind(this)


    }
    componentDidMount() {
        const Data = this.props.location.state
        console.log(Data + "data aala")
        this.setState(
            {
                list: Data
            })
        console.log(this.state.list + "check kela")
    }
    onUpdateHandler(index) {
        console.log("value of index in item " + this.state.indexoftask)
        this.props.history.push('/', { list: this.state.list, item: this.state.indexoftask })
    }

    getindexhandler(event) {
        this.setState(
            {
                indexoftask: event.target.value
            })
    }



    render() {





        



            return (

                this.state.list.map((items, index) => {

                    return (


                        <div className="parent">
                            <div className="details">

                                <div key={index} className="myform">
                                    <div className="taskno">
                                        <h3>Task no {index}</h3>
                                    </div>
                                    <div>
                                        <label>Task</label>
                                        <input type="text" placeholder={items.task} readOnly />
                                    </div>
                                    <div>
                                        <label>Note</label>
                                        <input type="text" placeholder={items.note} readOnly />
                                    </div>

                                    <div>
                                        <label>Time</label>
                                        <input type="text" placeholder={items.time} readOnly />
                                    </div>

                                    <div>
                                        <label>Place</label>
                                        <input type="text" placeholder={items.place} readOnly />
                                    </div>
                                    <div>
                                        <label>Task no</label>
                                        <input onChange={this.getindexhandler} value={this.indexoftask} type="text" placeholder="enter task no " />
                                    </div>


                                    <button className="btn btn-success" onClick={() => this.onUpdateHandler()}>update</button>
                                </div>

                            </div>



                        </div>




                    )
                })



            );

        
    }
}

export default Activitylist;;