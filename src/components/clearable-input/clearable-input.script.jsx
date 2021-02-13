import './clearable-input.style.css';
import {useState} from 'react';

const ClearableInput = ({placeholder, handler}) => {
  const [value, setValue] = useState('');
  const onChangeHandler = (e) => {
    setValue(e.target.value);
    handler && handler(e);
  };
  const crossClickHandler = () => {
    setValue('');
  };
  return (
      <div className="clearable-input-wrapper">
        <input type="text"
               placeholder={placeholder}
               onChange={onChangeHandler}
               value={value}
        />
        <div className={'cross' + (value.trim() && ' active')}
             onClick={crossClickHandler}>
        </div>
      </div>
  );
};
export default ClearableInput;