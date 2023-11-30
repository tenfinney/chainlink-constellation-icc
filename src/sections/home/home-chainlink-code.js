import { React, useState } from 'react';
import LinkExternal01Icon from '@untitled-ui/icons-react/build/esm/LinkExternal01';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import Iframe from 'react-iframe'
import { useTheme } from '@mui/material/styles';
import ImageSwapOnHover from './ImageSwapOnHover';

import stacklogos001 from '../../srcimages/stack-logos/stack-logos-001.png';
import stacklogos002 from '../../srcimages/stack-logos/stack-logos-002.png';
import stacklogos005 from '../../srcimages/stack-logos/stack-logos-005.png';
import stacklogos006 from '../../srcimages/stack-logos/stack-logos-006.png';
import stacklogos007 from '../../srcimages/stack-logos/stack-logos-007.png';
import stacklogos009 from '../../srcimages/stack-logos/stack-logos-009.png';
import stacklogos012 from '../../srcimages/stack-logos/stack-logos-012.png';
import stacklogos013 from '../../srcimages/stack-logos/stack-logos-013.png';
import stacklogos014 from '../../srcimages/stack-logos/stack-logos-014.png';
import stacklogos015 from '../../srcimages/stack-logos/stack-logos-015.png';
import stacklogos016 from '../../srcimages/stack-logos/stack-logos-016.png';
import stacklogos017 from '../../srcimages/stack-logos/stack-logos-017.png';
import stacklogos018 from '../../srcimages/stack-logos/stack-logos-018.png';
import stacklogos019 from '../../srcimages/stack-logos/stack-logos-019.png';
import stacklogos020 from '../../srcimages/stack-logos/stack-logos-020.png';
import stacklogos021 from '../../srcimages/stack-logos/stack-logos-021.png';
import stacklogos022 from '../../srcimages/stack-logos/stack-logos-022.png';
import stacklogos023 from '../../srcimages/stack-logos/stack-logos-023.png';



const joiningbenefits = [
  {
  id: "exclusivenft",
  title: "Chainlink.sol Lines 1-56 ",
  description:
  "See https://github.com/smartcontractkit/chainlink/tree/develop/contracts/src/v0.8 for additional information.",
  imageDark: "/assets/solidity/chainlink-01.png",
  imageLight: "/assets/solidity/chainlink-01.png",
  },
  {
  id: "web3training",
  title: "Chainlink.sol Lines 58-116 ",
  description:
  "See https://github.com/smartcontractkit/chainlink/tree/develop/contracts/src/v0.8 for additional information.",
  imageDark: "/assets/solidity/chainlink-02.png",
  imageLight: "/assets/solidity/chainlink-02.png",
  },
  {
  id: "blockchaincert",
  title: "ChainlinkClient.sol Lines 1-69 ",
  description:
  "See https://github.com/smartcontractkit/chainlink/tree/develop/contracts/src/v0.8 for additional information.",
  imageDark: "/assets/solidity/chainlink-client-01.png",
  imageLight: "/assets/solidity/chainlink-client-01.png",
  },
  {
  id: "networkingoppys",
  title: "ChainlinkClient.sol Lines 71-154 ",
  description:
  "See https://github.com/smartcontractkit/chainlink/tree/develop/contracts/src/v0.8 for additional information.",
  imageDark: "/assets/solidity/chainlink-client-02.png",
  imageLight: "/assets/solidity/chainlink-client-02.png",
  },
  {
  id: "resumebooster",
  title: "ChainlinkClient.sol Lines 156-245 ",
  description:
  "See https://github.com/smartcontractkit/chainlink/tree/develop/contracts/src/v0.8 for additional information.",
  imageDark: "/assets/solidity/chainlink-client-03.png",
  imageLight: "/assets/solidity/chainlink-client-03.png",
  },
  {
  id: "legalengcertpath",
  title: "ChainlinkClient.sol Lines 247-317 ",
  description:
  "See https://github.com/smartcontractkit/chainlink/tree/develop/contracts/src/v0.8 for additional information.",
  imageDark: "/assets/solidity/chainlink-client-04.png",
  imageLight: "/assets/solidity/chainlink-client-04.png",
  }
];



export const HomeChainlinkCode = () => {
const theme = useTheme();
const [activeJoiningBenefit, setActiveJoiningBenefit] = useState(0);
const joiningbenefit = joiningbenefits[activeJoiningBenefit];
const image = theme.palette.mode === 'dark' ? joiningbenefit?.imageDark : joiningbenefit?.imageLight;


return (

<Box
sx={{
backgroundColor: 'neutral.800',
backgroundRepeat: 'no-repeat',
backgroundPosition: 'top center',
backgroundImage: 'url("/assets/gradient-bg.svg")',
color: 'common.white',
py: '60px'
}}
>

<Container maxWidth="lg"
>

<br/>
<Grid
alignItems="center" 
container
spacing={3}
>

</Grid>
<br/>



<br/>
<Grid
xs={12} 
md={6}
>
<hr/>

<Stack spacing={4}>


<Typography 
sx={{ fontWeight: 650, mb: 2 }}
variant="h2"
>
Evaluating&nbsp;
<Typography 
component="span" 
color="primary.main" 
variant="inherit"
>
Chainlink 
</Typography>
&nbsp;&
<Typography 
component="span" 
color="primary.main" 
variant="inherit"
>
ChainlinkClient
</Typography>

</Typography>


</Stack>
</Grid>

<br/>
<hr/>

<br/>

<Typography
align="left"
color="inherit"
sx={{ mb: 3 }}
variant="h3"
>
Chainlink.sol & ChainlinkClient.sol 
</Typography>
<Typography
align="left"
color="yellow"
sx={{ mb: 1 }}
variant="body0"
>
<p>Select buttons below to view the code sections.</p>
</Typography>
<br/>


<Grid
alignItems="center"
container
spacing={3}
>
<Grid
xs={12}
md={6}
>
<Stack spacing={1}>
{joiningbenefits.map((joiningbenefit, index) => {
const isActive = activeJoiningBenefit === index;
return (
<Box
key={joiningbenefit.id}
onClick={() => setActiveJoiningBenefit(index)}
sx={{
borderRadius: 2.5,
color: 'neutral.400',
cursor: 'pointer',
p: 3,
transition: (theme) => theme.transitions.create([
'background-color, box-shadow',
'specialty'
], {
easing: theme.transitions.easing.easeOut,
duration: theme.transitions.duration.enteringScreen
}),
...(isActive && {
backgroundColor: 'primary.alpha12',
boxShadow: (theme) => `${theme.palette.primary.main} 0 0 0 1px`,
color: 'common.white'
}),
'&:hover': {
...(!isActive && {
backgroundColor: 'primary.alpha4',
boxShadow: (theme) => `${theme.palette.primary.main} 0 0 0 1px`,
color: 'common.white'
})
}
}}
>
<Typography
color="inherit"
sx={{ mb: 1 }}
variant="h5"
>
{joiningbenefit.title}
</Typography>
<Typography
color="inherit"
variant="body1"
>
{joiningbenefit.description}
</Typography>
{joiningbenefit.id === 'web3training' && (
<Box sx={{ mt: 3 }}>

</Box>
)}
</Box>
);
})}
</Stack>
</Grid>


<Grid
xs={12}
md={6}
>

<Box
sx={{
'& img': {
width: '100%'
}
}}
>
<img src={image} />
</Box>
</Grid>
</Grid>
</Container>
</Box>
);
};
