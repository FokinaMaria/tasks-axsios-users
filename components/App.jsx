import React, {Component} from 'react';

import List from './List';
import Users from './UserList';

import {getList} from '../sources/list';
import {getUsers} from '../sources/users';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            users: [],
            count: 6,
            firstName: 'namesr'
        };
    }

    componentDidMount() {
        // console.log('before');
        // console.log('after');
        // setTimeout(() => console.log('here'), 0);

        // const { count } = this.state;

        // const params = { count };
        console.log('PROMISE1: ', getList());
        console.log('PROMISE2: ', getUsers());
        console.log('firstName: ', this.state.firstName);
        

        getList({ count: this.state.count })
            .then(({ data }) => this.setState({ list: data }));

        getUsers({ count: this.state.firstName })
            .then(({ data }) => this.setState({ users: data }));
    }

    render() {
        const { list, users} = this.state;
        
        console.log('длина списка:', this.state.users.length);
        let resultUsers='нет данных';
        return (
            <div>
                <h3>Списки</h3>
                <List list={list}/>
                {/*TODO рендер компонента здесь*/}
                {this.state.users.length>0?
                    (<Users users={users}/>)
                :
                    (<p>{resultUsers}</p>)}
            </div>
        );
    }
}

export default App;
