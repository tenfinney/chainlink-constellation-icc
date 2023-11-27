import CheckIcon from '@untitled-ui/icons-react/build/esm/Check';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
export const Modal10 = () => (
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
sx={{ p: 3 }}
>
<Box
sx={{
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
SmartLaw Web3Skills LexAutomatica text goes here. Block 017
SmartLaw Web3Skills LexAutomatica text goes here. Block 018
SmartLaw Web3Skills LexAutomatica text goes here. Block 019
SmartLaw Web3Skills LexAutomatica text goes here. Block 020
expedita assumenda!
</Typography>
</Box>
<Stack
alignItems="center"
direction="row"
spacing={3}
sx={{ mt: 4 }}
>
<Button
color="inherit"
fullWidth
size="large"
>
Cancel
</Button>
<Button
fullWidth
size="large"
variant="contained"
>
Deactivate
</Button>
</Stack>
</Paper>
</Container>
</Box>
);
