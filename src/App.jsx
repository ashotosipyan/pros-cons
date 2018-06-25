import React, {Component} from 'react';
import Header from './components/Header.jsx';
import List from './containers/List.jsx';

export default class App extends Component {
    render() {
        return(
            <div className="App">
                <Header title="Why I should eat McDonalds"/>
                <List header="Pros" />
                <List header="Cons" />
            </div>
        )
    }
}