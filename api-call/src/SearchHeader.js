import {useState} from "react";

function SearchHeader({search}) {

    const [value, setValue] = useState('');

    const handleFromSubmit = (event) => {
        event.preventDefault();
        search(value);
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className={'searchDiv'}>
            <form onSubmit={handleFromSubmit}>
                <label>Ne Arıyorsunuz ?</label>
                <input value={value} onChange={handleChange}/>
            </form>
        </div>
    )
}

export default SearchHeader;