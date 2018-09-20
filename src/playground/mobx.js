// import {observable, action, computed, autorun} from 'mobx';

// class ObservableTodoStore {
// 	@observable todos = [];
//     @observable pendingRequests = 0;

//     constructor() {
//         autorun(() => console.log(this.report));
//     }

// 	@computed get completedTodosCount() {
//     	return this.todos.filter(
// 			todo => todo.completed === true
// 		).length;
//     }

// 	@computed get report() {
// 		if (this.todos.length === 0)
// 			return "<none>";
// 		return `Next todo: "${this.todos[0].task}". ` +
// 			`Progress: ${this.completedTodosCount}/${this.todos.length}`;
// 	}

// 	addTodo(task) {
// 		this.todos.push({
// 			task: task,
// 			completed: false,
// 			assignee: null
// 		});
// 	}
// }


// const observableTodoStore = window.store = new ObservableTodoStore();

// observableTodoStore.addTodo("Buy milk");




// import React from 'react';
// import ReactDOM from 'react-dom';

// import {observable, action} from 'mobx';

// var appState = observable({
//     timer: 0
// });

// import {observer} from 'mobx-react';

// @observer
// class TimerView extends React.Component {
//     render() {
//         return (<button onClick={this.onReset.bind(this)}>
//                 Seconds passed: {this.props.appState.timer}
//             </button>);
//     }

//     onReset () {
//         this.props.appState.resetTimer();
//     }
// };

// ReactDOM.render(<TimerView appState={appState} />, document.getElementById('root'));

// appState.resetTimer = action(function reset() {
//     appState.timer = 0;
// });

// setInterval(action(function tick() {
//     appState.timer += 1;
// }), 1000);


import {observable, computed } from 'mobx';
import {observer} from 'mobx-react';

import React from 'react';
import ReactDOM from 'react-dom';

class Person {
  // observable state:
  @observable firstName = "Michel";
  @observable lastName = "Weststrate";
  @observable nickName;
  
  // computed values:
  @computed get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

// reaction: React component that observers state
const profileView = observer(props => {
  if (props.person.nickName)
    return <div>{props.person.nickName}</div>
  else
    return <div>{props.person.fullName}</div>
});

// actions:
const michel = new Person();
ReactDOM.render(React.createElement(profileView, { person: michel }), document.getElementById('root'));

setTimeout(() => michel.nickName = "mweststrate", 5000)