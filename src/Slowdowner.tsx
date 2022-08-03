import FileUploader from './FileUploader'
import Bar from './Bar'
import { ZERO } from './time'

function Slowdowner() {
    return (
        <div style={{ maxWidth: '400px', maxHeight: '150px', margin: '20px' }}>
            <FileUploader
                file={null}
                onFileChosen={(file: File) => {
                    console.log(file)
                }}
            />
            <Bar min={ZERO} max={{ minutes: 3, seconds: 0 }} current={ZERO} />
        </div>
    )
}

export default Slowdowner
