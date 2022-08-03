import FileUploader from './FileUploader'

function Slowdowner() {
    return (
        <>
            <FileUploader
                file={null}
                onFileChosen={(file: File) => {
                    console.log(file)
                }}
            />
        </>
    )
}

export default Slowdowner
