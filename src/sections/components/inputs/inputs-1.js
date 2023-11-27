import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';



export const Inputs1 = () => (
<Box sx={{ p: 3 }}>
<Stack spacing={1}>
<Typography variant="subtitle2">
System
</Typography>
<Typography
color="text.secondary"
variant="body2"
>
You will receive emails to your membership email address
</Typography>




<FormGroup>
<FormControlLabel
control={<Checkbox defaultChecked />}
label={(
<Typography variant="body1">
Email alerts
</Typography>
)}
/>
<FormControlLabel
control={<Checkbox />}
label={(
<Typography variant="body1">
Push Notifications
</Typography>
)}
/>
<FormControlLabel
control={<Checkbox defaultChecked />}
label={(
<Typography variant="body1">
Text message
</Typography>
)}
/>
</FormGroup>
</Stack>
</Box>
);
