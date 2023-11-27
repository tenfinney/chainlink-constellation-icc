import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
export const Form3 = () => (
<Box sx={{ p: 3 }}>
<form onSubmit={(event) => event.preventDefault()}>
<CardHeader title="Notifications" />
<Divider />
<CardContent>
<Grid
container
spacing={6}
wrap="wrap"
>
<Grid
xs={12}
sm={6}
md={4}
>
<Typography
gutterBottom
variant="subtitle2"
>
System
</Typography>
<Typography
color="text.secondary"
gutterBottom
variant="body2"
>
You will receive emails to your membership email address
</Typography>
<div>
<FormControlLabel
control={<Checkbox defaultChecked />}
label="Email alerts"
/>
</div>
<div>
<FormControlLabel
control={<Checkbox />}
label="Push Notifications"
/>
</div>
<div>
<FormControlLabel
control={<Checkbox defaultChecked />}
label="Text message"
/>
</div>
<div>
<FormControlLabel
control={<Checkbox defaultChecked />}
label={(
<>
<Typography variant="body1">
Phone calls
</Typography>
<Typography
color="text.secondary"
variant="caption"
>
SmartLaw Web3Skills LexAutomatica text goes here. Block 059
</Typography>
</>
)}
/>
</div>
</Grid>
<Grid
xs={12}
sm={6}
md={4}
>
<Typography
gutterBottom
variant="subtitle2"
>
Chat App
</Typography>
<Typography
color="text.secondary"
gutterBottom
variant="body2"
>
You will receive emails to your membership email address
</Typography>
<div>
<FormControlLabel
control={<Checkbox defaultChecked />}
label="Email"
/>
</div>
<div>
<FormControlLabel
control={<Checkbox defaultChecked />}
label="Push notifications"
/>
</div>
</Grid>
</Grid>
</CardContent>
<Divider />
<CardActions
sx={{
justifyContent: 'flex-end',
p: 2
}}
>
<Button
type="submit"
variant="contained"
>
Save Settings
</Button>
</CardActions>
</form>
</Box>
);
