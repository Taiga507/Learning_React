// Импорт компонента не нужен, так как класс заменен на функцию
// import { Component } from 'react';

import './employees-list-item.css';

//class EmployeesListItem extends Component заменен на стрелочную функцию(классовый компонент переработан в функциональный)
const EmployeesListItem = (props) => {
    // Не нужны, так как теперь состояние increase и rise контролируются в app.js а тут не используются
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         increase: false,
    //         rise: false
    //     }
    // }

    // onIncrease = () => {
    //     this.setState(({increase}) => ({
    //         increase: !increase
    //     }))
    // }

    // onRise = () => {
    //     this.setState(({rise}) => ({
    //         rise: !rise
    //     }))
    // }

    // так как нет класс убирается метод render()
    // const {name, salary, onDelete, onToggleIncrease, onToggleRise} = this.props;
    const {name, salary, onDelete, onToggleProp, increase, rise} = props;
    // const {increase, rise} = this.state;

    let classNames = "list-group-item d-flex justify-content-between";
    if(increase) {
        classNames += ' increase';
    }
    if (rise) {
        classNames += ' like';
    }

    return (
        <li className={classNames}>
            <span tabIndex={0}
                className="list-group-item-label"
                onClick={onToggleProp}
                data-toggle='rise'
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onToggleProp(e);
                    }
                }}
            >{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle='increase'>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;