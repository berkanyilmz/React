import React, {useState} from 'react';

function EventActions() {

    const [value, setValue] = useState('');

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {

    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <div>
            <button onClick={(event) => handleClick(event, 4)}>Sil</button>
            <input type={'text'} onChange={handleChange}/>
        </div>
    );
}

export default EventActions;