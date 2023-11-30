import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Logo } from 'src/components/logo';
import { LogoSamsung } from 'src/components/logos/logo-samsung';
import { LogoVisma } from 'src/components/logos/logo-visma';
import { LogoBolt } from 'src/components/logos/logo-bolt';
import { LogoAws } from 'src/components/logos/logo-aws';

import { Logo01b } from 'src/components/logos/logo-01-b';
import { Logo01w } from 'src/components/logos/logo-01-w';




import { LogoAccenture } from 'src/components/logos/logo-accenture';
import { LogoAtt } from 'src/components/logos/logo-att';
import { RouterLink } from 'src/components/router-link';
import { paths } from 'src/paths';
export const Layout = (props) => {
const { children } = props;
return (
<Box
sx={{
backgroundColor: 'background.default',
display: 'flex',
flex: '1 1 auto',
flexDirection: {
xs: 'column-reverse',
md: 'row'
}
}}
>
<Box
sx={{
alignItems: 'center',
backgroundColor: 'neutral.800',
backgroundImage: 'url("/assets/gradient-bg.svg")',
backgroundPosition: 'top center',
backgroundRepeat: 'no-repeat',
color: 'common.white',
display: 'flex',
flex: {
xs: '0 0 auto',
md: '1 1 auto'
},
justifyContent: 'center',
p: {
xs: 4,
md: 8
}
}}
>
<Box maxWidth="md">
<Typography
sx={{ mb: 1 }}
variant="h4"
>
Welcome to LexAutomatico
</Typography>
<Typography
color="text.secondary"
sx={{ mb: 4 }}
>
SmartLaw Web3Skills LexAutomatica text goes here. Block 00
</Typography>
<Typography
variant="subtitle2"
sx={{ mb: 2 }}
>
Join thousands of forward-thinking technologists in web3 legal-tech:
</Typography>
<Stack
alignItems="center"
direction="row"
flexWrap="wrap"
gap={4}
sx={{
color: 'text.primary',
'& > *': {
color: 'neutral.400',
flex: '0 0 auto'
}
}}
>




<Box
sx={{
height: 50,
'& img': {
height: '30px'
}
}}
>
<img src="/assets/sslogos/01-w-200w.png" />
</Box>

<Box
sx={{
height: 50,
'& img': {
height: '30px'
}
}}
>
<img src="/assets/sslogos/02-w-200w.png" />
</Box>

<Box
sx={{
height: 50,
'& img': {
height: '30px'
}
}}
>
<img src="/assets/sslogos/03-w-200w.png" />
</Box>

<Box
sx={{
height: 50,
'& img': {
height: '30px'
}
}}
>
<img src="/assets/sslogos/04-w-200w.png" />
</Box>

<Box
sx={{
height: 50,
'& img': {
height: '30px'
}
}}
>
<img src="/assets/sslogos/05-w-200w.png" />
</Box>

<Box
sx={{
height: 50,
'& img': {
height: '30px'
}
}}
>
<img src="/assets/sslogos/06-w-200w.png" />
</Box>

<Box
sx={{
height: 50,
'& img': {
height: '40px'
}
}}
>
<img src="/assets/sslogos/07-w-200w.png" />
</Box>

{/* <Box
sx={{
height: 50,
'& img': {
height: '30px'
}
}}
>
<img src="/assets/sslogos/08-w-200w.png" />
</Box>

<Box
sx={{
height: 50,
'& img': {
height: '30px'
}
}}
>
<img src="/assets/sslogos/09-w-200w.png" />
</Box> */}


<Box
sx={{
height: 50,
'& img': {
height: '30px'
}
}}
>
<img src="/assets/sslogos/10-w-200w.png" />
</Box>

<Box
sx={{
height: 50,
'& img': {
height: '30px'
}
}}
>
<img src="/assets/sslogos/11-w-200w.png" />
</Box>

<Box
sx={{
height: 50,
'& img': {
height: '30px'
}
}}
>
<img src="/assets/sslogos/12-w-200w.png" />
</Box>

<Box
sx={{
height: 60,
'& img': {
height: '40px'
}
}}
>
<img src="/assets/sslogos/13-w-200w.png" />
</Box>

{/* <Box
sx={{
height: 50,
'& img': {
height: '30px'
}
}}
>
<img src="/assets/sslogos/14-w-200w.png" />
</Box> */}

{/* <Box
sx={{
height: 50,
'& img': {
height: '30px'
}
}}
>
<img src="/assets/sslogos/16-w-200w.png" />
</Box> */}


<Box
sx={{
height: 50,
'& img': {
height: '30px'
}
}}
>
<img src="/assets/sslogos/17-w-200w.png" />
</Box>

{/* <Box
sx={{
height: 50,
'& img': {
height: '30px'
}
}}
>
<img src="/assets/sslogos/18-w-200w.png" />
</Box> */}

<Box
sx={{
height: 50,
'& img': {
height: '30px'
}
}}
>
<img src="/assets/sslogos/19-w-200w.png" />
</Box>

{/* <Box
sx={{
height: 50,
'& img': {
height: '30px'
}
}}
>
<img src="/assets/sslogos/20-w-200w.png" />
</Box> */}

<Box
sx={{
height: 50,
'& img': {
height: '30px'
}
}}
>
<img src="/assets/sslogos/21-w-200w.png" />
</Box>

{/* <Box
sx={{
height: 50,
'& img': {
height: '40px'
}
}}
>
<img src="/assets/sslogos/22-w-200w.png" />
</Box> */}


{/* <LogoSamsung />
<LogoVisma />
<LogoBolt />
<LogoAws />              
<Logo01b />
<Logo01w />
<LogoAccenture />
<LogoAtt /> */}


</Stack>
</Box>
</Box>
<Box
sx={{
backgroundColor: 'background.paper',
display: 'flex',
flex: {
xs: '1 1 auto',
md: '0 0 auto'
},
flexDirection: 'column',
justifyContent: {
md: 'center'
},
maxWidth: '100%',
p: {
xs: 4,
md: 8
},
width: {
md: 600
}
}}
>
<div>
<Box sx={{ mb: 4 }}>
<Stack
alignItems="center"
component={RouterLink}
direction="row"
display="inline-flex"
href={paths.index}
spacing={1}
sx={{ textDecoration: 'none' }}
>
<Box
sx={{
display: 'inline-flex',
height: 24,
width: 24
}}
>
<Logo />
</Box>
<Box
sx={{
color: 'text.primary',
fontFamily: '\'Plus Jakarta Sans\', sans-serif',
fontSize: 14,
fontWeight: 800,
letterSpacing: '0.3px',
lineHeight: 2.5,
'& span': {
color: 'primary.main'
}
}}
>
LexAutomatico_1 <span>2023</span>
</Box>
</Stack>
</Box>
{children}
</div>
</Box>
</Box>
);
};
Layout.propTypes = {
children: PropTypes.node
};
