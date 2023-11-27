import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
export const Form1 = () => (
<Box sx={{ p: 3 }}>
<form onSubmit={(event) => event.preventDefault()}>
<Grid
container
spacing={3}
>
<Grid
xs={12}
md={6}
>
<TextField
fullWidth
label="Full name"
name="name"
required
value="Scott Stevenson"
/>
</Grid>
<Grid
xs={12}
md={6}
>
<TextField
fullWidth
label="Email address"
name="email"
required
value="scott@onelaw.us"
/>
</Grid>
<Grid
xs={12}
md={6}
>
<TextField
fullWidth
label="Country"
name="country"
value="USA"
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
value="California"
/>
</Grid>
<Grid
xs={12}
md={6}
>
<TextField
fullWidth
label="Address 1"
name="address1"
value="65 Enterprise, Aliso Viejo CA 92656"
/>
</Grid>
<Grid
xs={12}
md={6}
>
<TextField
fullWidth
label="Address 2"
name="address2"
value="1st Floor - Techspace"
/>
</Grid>
<Grid
xs={12}
md={6}
>
<TextField
fullWidth
label="Phone number"
name="phone"
value="+1 877 684 2988"
/>
</Grid>
<Grid
xs={12}
md={6}
/>
<Grid
xs={12}
md={6}
>
<Typography
gutterBottom
variant="subtitle2"
>
Email Verified
</Typography>
<Typography
color="text.secondary"
variant="body2"
>
Disabling this will automatically send the user a verification email
</Typography>
<Switch
defaultChecked
edge="start"
name="isVerified"
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
Discounted Prices
</Typography>
<Typography
color="text.secondary"
variant="body2"
>
Discounted prices for all products
</Typography>
<Switch
color="primary"
defaultChecked={false}
edge="start"
name="hasDiscount"
/>
</Grid>
</Grid>
<Box sx={{ mt: 2 }}>
<Button
type="submit"
variant="contained"
>
Update Customer
</Button>
</Box>
</form>
</Box>
);
