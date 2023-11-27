import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
// import Divider from '@mui/material/Divider';
// import Link from '@mui/material/Link';
// import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Iframe from 'react-iframe'



export const Form16 = () => (
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.100',
p: 3
}}
>
<Container maxWidth="sm">
<Card>
<CardContent
sx={{
display: 'flex',
flexDirection: 'column',
minHeight: 400,
p: 4
}}
>
<Box
sx={{
display: 'flex',
justifyContent: 'space-between'
}}
>
<div>
<Typography variant="h4">
MCLE Attendee Registration
</Typography>
<Typography
color="text.secondary"
sx={{ mt: 1 }}
variant="body2"
>
Register to activate your account and receive your access token.
</Typography>
</div>
<img
alt="Ethereum"
src="/assets/logos/stack-logos-008.png"
style={{
width: '50px',
height: '50px'
}}
/>
<img
alt="IPFS"
src="/assets/logos/stack-logos-006.png"
style={{
    width: '50px',
    height: '50px'
}}
/>
<img
alt="Airtable"
src="/assets/logos/stack-logos-003.png"
style={{
    width: '50px',
    height: '50px'
}}
/>
<img
alt="Metamask"
src="/assets/logos/stack-logos-021.png"
style={{
    width: '50px',
    height: '50px'
}}
/>
</Box>
<Box
sx={{
flexGrow: 1,
mt: 3
}}
>
<hr />

<Iframe id=""
  src="https://airtable.com/embed/shrtTzz8by1O4bXXm?backgroundColor=blue" 
  frameborder="0" 
  onmousewheel="" 
  width="100%" 
  height="1700" 
  className=""
  display="block"
  position="relative"
  background="transparent" 
  border= "1px"
/>


<hr />




{/* <form onSubmit={(event) => event.preventDefault()}>
<TextField
fullWidth
label="Name"
margin="normal"
name="name"
/>
<TextField
fullWidth
label="Email Address"
margin="normal"
name="email"
type="email"
/>
<TextField
fullWidth
label="Password"
margin="normal"
name="password"
type="password"
/>
<Box
sx={{
alignItems: 'center',
display: 'flex',
ml: -1,
mt: 2
}}
>
<Checkbox name="policy" />
<Typography
color="text.secondary"
variant="body2"
>
Web3Skills text goes here
{' '}
<Link href="https://smartlaw.freeweb3.com/#/Termsflyout">
Terms and Conditions
</Link>
</Typography>
</Box>
<Box sx={{ mt: 2 }}>
<Button
fullWidth
size="large"
type="submit"
variant="contained"
>
Register
</Button>
</Box>
</form> */}


</Box>


{/* <Divider sx={{ my: 3 }} />
<Link
color="text.secondary"
href="#"
variant="body2"
>
Having an account
</Link>
 */}



</CardContent>
</Card>
</Container>
</Box>
);
