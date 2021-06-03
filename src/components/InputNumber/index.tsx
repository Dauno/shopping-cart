import React, { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

type InputNumberProps = {
    value: number,
    onChange: (value:number) => void,
};

const InputNumber: React.FC<InputNumberProps> = ({value, onChange}) => {
    const [ inputValue, setInputValue ] = useState<number>(value);

    useEffect(() => {
        onChange(inputValue);
    },[inputValue, onChange])
    
    const handleChange = (type: string): void => {
        setInputValue((current: number) => {
            return type === 'add' ? 
                current + 1 : current - 1 < 0 ? 0 : current - 1
        });
    }

    return (
        <OutlinedInput
            type="number"
            value={inputValue}
            startAdornment={
                <InputAdornment position="start">
                    <Button 
                        size="small" 
                        color="primary" 
                        variant="contained"
                        onClick={ () => handleChange('remove')}
                    >
                    -
                    </Button>
                </InputAdornment>
            }
            endAdornment={
                <InputAdornment position="end">
                    <Button 
                        size="small" 
                        color="primary" 
                        variant="contained"
                        onClick={ () => handleChange('add')}
                    >
                    +
                    </Button>
                </InputAdornment>
            }
        />
    )
};


export default InputNumber;