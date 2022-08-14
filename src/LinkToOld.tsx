import Link from '@mui/material/Link'

function LinkToOld() {
    return (
        <Link
            href='/old-version.html'
            sx={{
                padding: '20px'
            }}
        >
            Click here if you liked the old version better
        </Link>
    )
}

export default LinkToOld
