import { styled } from '@mui/material/styles'

const Text = styled('span')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1)
}))

export default Text
