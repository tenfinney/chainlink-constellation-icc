import XIcon from '@untitled-ui/icons-react/build/esm/X';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Paper from '@mui/material/Paper';
import SvgIcon from '@mui/material/SvgIcon';
export const Modal3 = () => (
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.100',
p: 3
}}
>
<Paper elevation={12}>
<Box sx={{ p: 3 }}>
<Box
sx={{
display: 'flex',
justifyContent: 'flex-end'
}}
>
<IconButton>
<SvgIcon>
<XIcon />
</SvgIcon>
</IconButton>
</Box>
</Box>
<Box sx={{ p: 3 }}>
<Container maxWidth="md">
<Box
sx={{
alignItems: 'center',
display: 'flex'
}}
>
<OutlinedInput
fullWidth
placeholder="Search..."
startAdornment={(
<InputAdornment position="start">
<SvgIcon>
<SearchMdIcon />
</SvgIcon>
</InputAdornment>
)}
/>
<Button
size="large"
sx={{ ml: 2 }}
variant="contained"
>
Search
</Button>
</Box>
</Container>
</Box>
</Paper>
</Box>
);
