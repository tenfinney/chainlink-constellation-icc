import Settings01Icon from '@untitled-ui/icons-react/build/esm/Settings01';
import User01Icon from '@untitled-ui/icons-react/build/esm/User01';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
export const Modal6 = () => (
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.100',
p: 3
}}
>
<Paper
elevation={12}
sx={{
maxWidth: 320,
mx: 'auto'
}}
>
<Box sx={{ p: 2 }}>
<Typography variant="subtitle2">
scott@onelaw.us
</Typography>
<Typography
color="text.secondary"
variant="subtitle2"
>
LexAutomatico_1
</Typography>
</Box>
<Divider />
<Box sx={{ mt: 2 }}>
<MenuItem>
<ListItemIcon>
<SvgIcon>
<User01Icon />
</SvgIcon>
</ListItemIcon>
<ListItemText
primary={(
<Typography variant="subtitle2">
Profile
</Typography>
)}
/>
</MenuItem>
<MenuItem>
<ListItemIcon>
<SvgIcon>
<Settings01Icon />
</SvgIcon>
</ListItemIcon>
<ListItemText
primary={(
<Typography variant="subtitle2">
Settings
</Typography>
)}
/>
</MenuItem>
</Box>
<Box sx={{ p: 2 }}>
<Button
fullWidth
variant="outlined"
>
Logout
</Button>
</Box>
</Paper>
</Box>
);
