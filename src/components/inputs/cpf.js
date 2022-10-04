import { TextField } from '@mui/material'
import React from 'react'
import InputMask from "react-input-mask";

export function CpfInput({ value, onChange, label, placeHolder, name, error, helperText, required }) {
  return (
    <InputMask
      mask={'999.999.999-99'}
      value={value}
      onChange={onChange}
    >
      {() => <TextField
        sx={{ m: 1, width: '100%' }}
        required={required}
        id="outlined-required"
        label={label}
        placeholder={placeHolder}
        name={name}
        error={error}
        helperText={error ? helperText : undefined}
        InputLabelProps={{
          shrink: true,
        }}
      />}
    </InputMask>

  )
}
