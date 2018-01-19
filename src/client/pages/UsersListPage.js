import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';


class UserList extends Component {

    componentDidMount(){
        this.props.fetchUsers();
    }
    
    renderUsers(){
        return this.props.users.map(users =>{
            return <li key={users.id}>{users.name}</li>
        });
    }

    render(){
        return (
            <div>
                Here's a big list of User's
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

function loadData(){
    console.log("called");
}

function   mapStateToProps(state)  {
    return {users: state.users};
}

export { loadData }; 

export default {
    loadData,
    component: connect(mapStateToProps,{ fetchUsers })(UserList)

}


