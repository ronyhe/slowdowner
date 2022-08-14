import React from 'react'
import Slowdowner from './Slowdowner'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material'
import LinkToOld from './LinkToOld'

const theme = createTheme()
const { primary, secondary } = theme.palette
theme.palette.primary = secondary
theme.palette.secondary = primary

function App() {
    return (
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <Slowdowner />
                <LinkToOld />
            </ThemeProvider>
        </CssBaseline>
    )
}

export default App
