import AudioFileIcon from '@mui/icons-material/AudioFile'
import Button from '@mui/material/Button'
import React from 'react'
import Text from './Text'

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
