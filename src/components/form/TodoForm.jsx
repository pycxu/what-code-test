import { useState } from 'react';
import './todoForm.scss';

const TodoForm = ({ addTask }) => {

    const [formValue, setFormValue] = useState({
        input: '',
      });

    const submitForm = (event) => {
        event.preventDefault();
        if (!event.target[0].value) return;
        addTask(event.target[0].value);
        setFormValue({input: ''});
      };

    return (
        <form className="form" onSubmit={submitForm}>
          <div className="form__row">
            <label htmlFor="input" className="text__normal">
              New To-Do Item:
            </label>
            <input
              type="text"
              id="input"
              className="form__input"
              value={formValue.input}
              onChange={({ target: { value } }) =>
                setFormValue((preValue) => ({ ...preValue, input: value }))
              }
            />
            <button type="submit" className="form__submit">
              Add
            </button>
          </div>
        </form>
    )
}

export default TodoForm;