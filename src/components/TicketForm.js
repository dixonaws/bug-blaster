import React, {useState} from 'react';
import '../styles.css';

export default function TicketForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('1');

    const priorityLabels = {
        1: 'Low',
        2: 'Medium',
        3: 'High',
    }

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setPriority('1');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm();
    }

    return (
        <form className="ticketForm" onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input className="form-input" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Description</label>
                <input className='form-input' type="textarea" value={description}
                       onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <fieldset className={"priority-fieldset"}>
                <legend>Priority</legend>
                {
                    Object.entries(priorityLabels).map(([value, label]) => (
                        <label key={value} className='priority-label'>
                            <input type={'radio'}
                                   value={value}
                                   checked={priority === value}
                                   className={'priority-input'}
                                   onChange={(e) => setPriority(e.target.value)}>
                            </input>
                            {label}
                        </label>
                    ))
                }
            </fieldset>
            <button className='button' type={'submit'}>Submit</button>

        </form>
    );
}