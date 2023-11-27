import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
const countries = [
{ text: 'California', value: 'CA' },
{ text: 'New York', value: 'NY' },
{ text: 'Washington', value: 'WA' },
{ text: 'Oregon', value: 'OR' },
{ text: 'Nevada', value: 'NV' },
{ text: 'Texas', value: 'TX' },
{ text: 'Idaho', value: 'ID' },
{ text: 'Arizona', value: 'AZ' },
{ text: 'Colorago', value: 'CO' },
{ text: 'Wyoming', value: 'WY' }
];
export const Form5 = () => (
<Box sx={{ p: 3 }}>
<form onSubmit={(event) => event.preventDefault()}>
<CardHeader title="Profile" />
<CardContent>
<Grid
container
spacing={4}
>
<Grid
xs={12}
md={6}
>
<TextField
fullWidth
label="Name"
name="name"
/>
</Grid>
<Grid
xs={12}
md={6}
>
<TextField
fullWidth
helperText="We will use this email to contact you"
label="Email Address"
name="email"
required
type="email"
/>
</Grid>
<Grid
xs={12}
md={6}
>
<TextField
fullWidth
label="Phone Number"
name="phone"
/>
</Grid>
<Grid
xs={12}
md={6}
>
<Autocomplete
getOptionLabel={(option) => option.text}
options={countries}
renderInput={(params) => (
<TextField {...params}
fullWidth
label="Country"
name="country"
/>
)}
/>
</Grid>
<Grid
xs={12}
md={6}
>
<TextField
fullWidth
label="State/Region"
name="state"
/>
</Grid>
<Grid
xs={12}
md={6}
>
<TextField
fullWidth
label="City"
name="city"
/>
</Grid>
<Grid
xs={12}
md={6}
>
<Typography
gutterBottom
variant="subtitle2"
>
Public Profile
</Typography>
<Typography
color="text.secondary"
variant="body2"
>
Means that anyone viewing your profile will
be able to see your contacts details
</Typography>
<Switch
edge="start"
name="isPublic"
/>
</Grid>
<Grid
xs={12}
md={6}
>
<Typography
gutterBottom
variant="subtitle2"
>
Available
</Typography>
<Typography
color="text.secondary"
variant="body2"
>
Toggling this for alerts.
SmartLaw Web3Skills LexAutomatica text goes here. Block 060
</Typography>
<Switch
color="primary"
edge="start"
name="canHire"
/>
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
color="primary"
type="submit"
variant="contained"
>
Save Settings
</Button>
</CardActions>
</form>
</Box>
);
