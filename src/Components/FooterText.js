import React from 'react'
import { Typography } from '@mui/material'

export default function FooterText(props) {
  return (
    <Typography sx={{
        fontSize: '12px',
        fontFamily: 'Orelega One', marginBottom: '13px'
    }} >{props.text}
    </Typography>
  )
}
