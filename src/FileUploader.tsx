import AudioFileIcon from '@mui/icons-material/AudioFile'
import Button from '@mui/material/Button'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'

const Text = styled('span')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1)
}))

function FileUploader({
    file,
    onFileChosen
}: {
    file: File | null
    onFileChosen: (file: File) => void
}) {
    return (
        <>
            <Button variant='contained' component='label'>
                <AudioFileIcon fontSize='large' />
                <input
                    type='file'
                    accept='audio/*'
                    hidden
                    onChange={e => {
                        const file = e.target.files && e.target.files[0]
                        if (file) {
                            onFileChosen(file)
                        }
                    }}
                />
            </Button>
            {file ? <Text>{file.name}</Text> : null}
        </>
    )
}

export default FileUploader
