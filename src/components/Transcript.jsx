import React from 'react'
import {TextField} from '@mui/material'

export default function Transcript({ transcript }) {
  return (
    <TextField
      id="transcript"
      label="Transcript"
      multiline
      value={transcript}
      rows={8}
      placeholder="Speak to get transcript...."
    />
  );
}
