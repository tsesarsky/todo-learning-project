'user strict'
import React from 'react';

class TodoComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    id: 1,
                    title: 'Выучить React.js',
                    status: false
                },
                {
                    id: 2,
                    title: 'Выучить React.js',
                    status: false
                }
            ]
        }
    }
    render() {
        const tasks = this.state.data.map((item) => {
            const itemClass = item.status === true ? 'done' : null;
            return (
                <li key={item.id} className={itemClass}>{item.title}</li>
            )
        })
        return (
            <div>
                <h1>Менеджер задач</h1>
                <input type="text" placeholder="Добавьте новую задачу"/>
                <input type="submit" value="Добавить" />
                <ul>{tasks}</ul>
            </div>
        );
    }
}

TodoComponent.displayName = 'TodoComponent';
export default TodoComponent;