import { TextField } from '@mui/material'
import React from 'react'

export function GenericInput({ value, onChange, label, placeHolder, name, error, helperText, required }) {
  return (
    <TextField
      sx={{ m: 1, width: '100%' }}
      required={required}
      id="outlined-required"
      label={label}
      placeholder={placeHolder}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={error ? helperText : undefined}
      InputLabelProps={{
        shrink: true,
      }}
    />
  )
}
