import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
export const Form4 = () => (
<Box sx={{ p: 3 }}>
<form onSubmit={(event) => event.preventDefault()}>
<Grid
container
spacing={3}
>
<Grid
xs={12}
sm={6}
md={4}
>
<TextField
fullWidth
label="Password"
name="password"
type="password"
/>
</Grid>
<Grid
xs={12}
sm={6}
md={4}
>
<TextField
fullWidth
label="Password Confirmation"
name="passwordConfirm"
type="password"
/>
</Grid>
</Grid>
<Divider sx={{ pt: 2 }} />
<Box
sx={{
display: 'flex',
justifyContent: 'flex-end',
p: 2
}}
>
<Button
color="primary"
type="submit"
variant="contained"
>
Change Password
</Button>
</Box>
</form>
</Box>
);
