import { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() { 
    const [selection, setSelection] = useState(null);

    const options = [
        { label: 'Red', value: 'red'},
        { label: 'Green', value: 'green'},
        { label: 'Blue', value: 'blue'}
    ]

    const handleSelection = (option) => {
        setSelection(option);
    }

   return (
        <div className="flex">
            <Dropdown options={options} onChange={handleSelection} value={selection} />
        </div>
   )    

}
export default DropdownPage;

