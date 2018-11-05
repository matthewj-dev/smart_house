import React, { Component } from 'react';

class RoomList extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
    
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/getRoomList')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;


    return (
      <div className="App">
        <h1>List of Items</h1>
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map((item) => {
              return(
                <div>
                  Room Id: {item.room_id} Room Name: {item.room_name}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No Rooms Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default RoomList;