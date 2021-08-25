import React, {Component} from 'react';


class AddTask extends Component {
    constructor() {
        super();
        this.state = {
            tasks : []
        }
    }
  // Create task
  AddTask = () =>{
  const newElement = document.getElementById("input-value").value;
  const newObj = {
      tittle:newElement
  }
  this.state.tasks.push(newObj);
  this.setState({
      tasks:this.state.tasks
  })
  }
    // Delete task
Delete = index =>{
    this.state.tasks.splice(index,1);
    this.setState({
        tasks:this.state.tasks
    })
}
    render() {
        return (
            <div className="Add-Task Container">
                <div className="Task-Section">
                  <ul className="Task-Section__List">
                      {this.state.tasks.map((task,index) =>{
                          return(
                              <li className="Task-Section__List__Item">
                                  <input type="checkbox" className="Task-Section__List__Item__Checkbox" />
                                  <p>{task.tittle}</p>
                                  <button type="button" className="Task-Section__List__Item__Button" onClick={this.Delete.bind(this,index)}>
                                      <svg fill="#000" xmlns="http://www.w3.org/2000/svg"
                                           viewBox="0 0 24 24" width="20px" height="20px">
                                          <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/>
                                      </svg>
                                  </button>
                              </li>
                          )
                      })}
                  </ul>
                </div>
               <form method="GET" className="Task-Form Container">
                   <input type="text" className="Add-Task-Input" id="input-value"/>
                   <button type="button" className="Add-Task-Button" onClick={this.AddTask}>
                       <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30" width="35px" height="35px">
                           <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"/>
                       </svg>
                   </button>
               </form>
            </div>
        );
    }
}

export default AddTask;