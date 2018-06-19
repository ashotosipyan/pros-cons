import React, {Component} from 'react';
import Header from './components/Header.jsx';
import List, { ListItem } from './containers/List.jsx';

const prosItems = new ListItem(1);

const consItems = new ListItem(1);

export default class App extends Component {
    render() {
        return(
            <div className="App">
                <Header title="Why I should eat McDonalds"/>
                <List header="Pros" items={prosItems}/>
                <List header="Cons" items={consItems}/>
            </div>
        )
    }
}