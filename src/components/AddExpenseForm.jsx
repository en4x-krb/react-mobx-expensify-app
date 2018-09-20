import React from 'react';
import moment from 'moment';

class AddExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: props.expense ? props.expense.note : '',
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? props.expense.amount : '',
            createdAt: props.expense ? props.expense.createdAt: moment().valueOf(),
            error: ''
        };

        this.editNote = this.editNote.bind(this);
        this.editDescription = this.editDescription.bind(this);
        this.editAmount = this.editAmount.bind(this);
        this.editCreatedAt = this.editCreatedAt.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    editNote(e) {   
        const note = e.target.value;
        this.setState((state) => ({
            note
        }));
    }

    editDescription(e) {
        const description = e.target.value;
        this.setState(() => ({
            description
        }));
    }

    editAmount(e) {
        const amount = e.target.value * 100;
        if(!amount || /^\d{1,}(\.\d{0,2})?$/g.test(amount))
            this.setState(() => ({
                amount
            }));
    }

    editCreatedAt(e) {
        const createdAt = e.target.value;
        this.setState(() => ({
            createdAt
        }));
    }

    onFormSubmit(e) {
        e.preventDefault();
        const {note, description, amount, createdAt} = this.state;
        if(!note || !description || !amount || !createdAt)
            this.setState(() => ({
                error: 'Please fill the required field'
            }));
        else
            this.props.onSubmit({
                note,
                description,
                amount,
                createdAt
            });
    }

    render() {
        return (
            <div>
                <h2>Expense Form</h2>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <div> 
                        <input 
                            type='text' 
                            placeholder='Note' 
                            value={this.state.note}
                            onChange={this.editNote}
                            required
                        /> 
                    </div>

                    <div> 
                        <input 
                        type='text' 
                        placeholder='Amount' 
                        value={this.state.amount / 100}
                        onChange={this.editAmount}
                        required
                    /> 
                    </div>

                    <div> 
                        <textarea 
                            placeholder='Description' 
                            value={this.state.description}
                            onChange={this.editDescription}
                            required
                        >
                        </textarea> 
                    </div>
                    <div> 
                        <input 
                            type='date' 
                            placeholder='When' 
                            value={moment(this.state.createdAt).format('YYYY-MM-DD')}
                            onChange={this.editCreatedAt}
                            required
                        /> 
                    </div>
                    <button>{this.props.expense ? 'Edit': 'Add'} Expense</button>
                </form>
            </div>
        )
    }
}

export default AddExpenseForm;