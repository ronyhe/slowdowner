import Slider from '@mui/material/Slider'
import { Time } from './time'

function Bar({ min, max, current }: { min: Time; max: Time; current: Time }) {
    return (
        <>
            <Slider />
        </>
    )
}

export default Bar
