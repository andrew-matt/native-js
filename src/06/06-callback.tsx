import React, {ChangeEvent, MouseEvent} from 'react';

export const User = () => {

    const DeleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }

    const SaveUser = () => {
        alert('user has been saved!')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed: ' + event.currentTarget.value)
    }

    const focusLost = () => {
        console.log('focus lost')
    }

    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLost}>Andrew</textarea>
            <input onChange={onAgeChanged} type={"number"}/>
            <button name="Delete" onClick={DeleteUser}>Delete</button>
        </div>
    );
};
