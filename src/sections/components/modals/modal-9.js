import CheckIcon from '@untitled-ui/icons-react/build/esm/Check';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
export const Modal9 = () => (
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.100',
p: 3
}}
>
<Container maxWidth="sm">
<Paper
elevation={12}
sx={{
p: 3,
display: 'flex',
flexDirection: 'column',
alignItems: 'center'
}}
>
<Avatar
sx={{
backgroundColor: 'success.lightest',
color: 'success.main',
mb: 2
}}
>
<SvgIcon>
<CheckIcon />
</SvgIcon>
</Avatar>
<Typography variant="h5">
Payment successful
</Typography>
<Typography
align="center"
color="text.secondary"
sx={{ mt: 1 }}
variant="body2"
>
SmartLaw Web3Skills LexAutomatica text goes here. Block 013
SmartLaw Web3Skills LexAutomatica text goes here. Block 014
SmartLaw Web3Skills LexAutomatica text goes here. Block 015
SmartLaw Web3Skills LexAutomatica text goes here. Block 016
expedita assumenda!
</Typography>
<Button
fullWidth
size="large"
sx={{ mt: 4 }}
variant="contained"
>
Go back to dashboard
</Button>
</Paper>
</Container>
</Box>
);
