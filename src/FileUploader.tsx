import AudioFileIcon from '@mui/icons-material/AudioFile'
import Button from '@mui/material/Button'
import React, { useState } from 'react'

import { styled } from '@mui/material/styles'

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1)
}))

function FileComp({ file }: { file: File | null }) {
    if (!file) {
        return null
    }
    return <>file.name</>
}

function FileUploader({
    onFileChosen
}: {
    onFileChosen: (file: File) => void
}) {
    const [file, setFile] = useState<File | null>(null)
    return (
        <Div>
            <FileComp file={file} />
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
                            setFile(file)
                        }
                    }}
                />
            </Button>
        </Div>
    )
}

export default FileUploader