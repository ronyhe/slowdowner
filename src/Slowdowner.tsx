import FileUploader from './FileUploader'

function Slowdowner() {
    return (
        <>
            <FileUploader
                onFileChosen={(file: File) => {
                    console.log(file)
                }}
            />
        </>
    )
}

export default Slowdowner
