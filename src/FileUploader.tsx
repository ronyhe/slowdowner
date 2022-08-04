import AudioFileIcon from '@mui/icons-material/AudioFile'
import Button from '@mui/material/Button'
import React, { useState } from 'react'

import { styled } from '@mui/material/styles'

const TextDiv = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1)
}))

function FileComp({ file }: { file: File | null }) {
    if (!file) {
        return null
    }
    return <TextDiv>{file.name}</TextDiv>
}

function FileUploader({
    file,
    onFileChosen
}: {
    file: File | null
    onFileChosen: (file: File) => void
}) {
    const [innerFile, setInnerFile] = useState<File | null>(file)
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
                            setInnerFile(file)
                        }
                    }}
                />
            </Button>
            <FileComp file={innerFile} />
        </>
    )
}

export default FileUploader
