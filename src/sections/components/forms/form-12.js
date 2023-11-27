import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Iframe from 'react-iframe'

export const Form12 = () => (
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
<Typography variant="h5">
Attendee Quiz 2 of 2
</Typography>
<Typography
color="text.secondary"
sx={{ mt: 1 }}
variant="body2"
>
Each attendee must submit two quizzes and recive a score or 80% or better on each to recieve MCLE credit. If your do not receive the passing scores you will be sent a link via email with a link to retake the quiz.
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
  src="https://airtable.com/embed/shrNSLI7nFYa9v6RD?backgroundColor=blue" 
  frameborder="0" 
  onmousewheel="" 
  width="100%" 
  height="533" 
  className=""
  display="block"
  position="relative"
  background="transparent" 
  border= "1px"
/>


<hr />


</Box>


</CardContent>
</Card>
</Container>
</Box>
);
