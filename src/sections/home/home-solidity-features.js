import { React, useState, useRef } from 'react';

import ReactPlayer from "react-player";
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
id: "influencepolicy",
title: "ICC Lines 1-74: ",
description:
"See comments in SecureCrossChainTransferAndLexOracle.sol file.",
imageDark: "/assets/solidity/solidity-dark-01.png",
imageLight: "/assets/solidity/solidity-light-01.png",
},
{
id: "exclusivenft",
title: "ICC Lines 76-188: ",
description:
"See comments in SecureCrossChainTransferAndLexOracle.sol file.",
imageDark: "/assets/solidity/solidity-dark-02.png",
imageLight: "/assets/solidity/solidity-light-02.png",
},
{
id: "web3training",
title: "ICC Lines 190-295: ",
description:
"See comments in SecureCrossChainTransferAndLexOracle.sol file.",
imageDark: "/assets/solidity/solidity-dark-03.png",
imageLight: "/assets/solidity/solidity-light-03.png",
},
{
id: "blockchaincert",
title: "ICC Lines 297-405: ",
description:
"See comments in SecureCrossChainTransferAndLexOracle.sol file.",
imageDark: "/assets/solidity/solidity-dark-04.png",
imageLight: "/assets/solidity/solidity-light-04.png",
},
{
id: "networkingoppys",
title: "ICC Lines 407-526: ",
description:
"See comments in SecureCrossChainTransferAndLexOracle.sol file.",
imageDark: "/assets/solidity/solidity-dark-05.png",
imageLight: "/assets/solidity/solidity-light-05.png",
},
{
id: "resumebooster",
title: "ICC Lines 528-589: ",
description:
"See comments in SecureCrossChainTransferAndLexOracle.sol file.",
imageDark: "/assets/solidity/solidity-dark-06.png",
imageLight: "/assets/solidity/solidity-light-06.png",
},
{
id: "legalengcertpath",
title: "ICC Lines 591-701: ",
description:
"See comments in SecureCrossChainTransferAndLexOracle.sol file.",
imageDark: "/assets/solidity/solidity-dark-07.png",
imageLight: "/assets/solidity/solidity-light-07.png",
},
{
id: "insights",
title: "ICC Lines 703-771: ",
description:
"See comments in SecureCrossChainTransferAndLexOracle.sol file.",
imageDark: "/assets/solidity/solidity-dark-08.png",
imageLight: "/assets/solidity/solidity-light-08.png",
},
{
id: "researchandcollab",
title: "ICC Lines 773-878: ",
description:
"See comments in SecureCrossChainTransferAndLexOracle.sol file.",
imageDark: "/assets/solidity/solidity-dark-09.png",
imageLight: "/assets/solidity/solidity-light-09.png",
},
{
id: "influencepolicy",
title: "ICC Lines 880-955: ",
description:
"See comments in SecureCrossChainTransferAndLexOracle.sol file.",
imageDark: "/assets/solidity/solidity-dark-10.png",
imageLight: "/assets/solidity/solidity-light-10.png",
},
{
id: "influencepolicy",
title: "ICC Lines 957-1014: ",
description:
"See comments in SecureCrossChainTransferAndLexOracle.sol file.",
imageDark: "/assets/solidity/solidity-dark-11.png",
imageLight: "/assets/solidity/solidity-light-11.png",
}
];



export const HomeSolidityFeatures = () => {

    const theme = useTheme();
    const playerRef = useRef(null);
    
    const handleReady = () => {
        if (playerRef.current) {
        playerRef.current.wrapper.querySelector('video').setAttribute('preload', 'none');
        }
        };
    
    function VideoPlayer({ videoUrl, light }) {
        return (
          <Stack
          alignItems="center" 
          direction="row" 
          flexWrap="wrap" 
          spacing={1} 
          sx={{ my: 3 }}
          >
            <ReactPlayer
              ref={playerRef}
              url={videoUrl}
              controls={true}
              playing={false}
              loop={false}
              volume={0.25}
              width="90vw"
              height="auto"
              onReady={handleReady}
              poster={light ? light : undefined}
            />
          </Stack>
        );
      }


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



  
<Stack
spacing={2}
sx={{ mb: 4 }}
>
<br/>
<br/>


<Grid
xs={12} 
md={6}
>


<hr/>

<br/>
<br/>

<Stack spacing={4}>
<Typography
color="lightsteelblue"
sx={{ mt: 4 }}
variant="h2"
>
Secure Cross Chain Transfer and Lex Oracle
</Typography>


<Typography variant="body2">
<VideoPlayer
  videoUrl="https://freeweb3.infura-ipfs.io/ipfs/QmQQMWwa1cQqyshDAfDm6xgpNKYzWWFYaWDDHY8ANinLKt"
  light="/assets/lex_image_03.png"
/>
</Typography>


</Stack>
</Grid>













<br/>
<br/>
<br/>
<br/>
<Typography
align="center"
color="#a0b3f2"
sx={{ mb: 1 }}
variant="h2"
>
A Chainlink journey with ICC.
</Typography>


<br/>
<br/>


<Typography
align="left"
color="#ffdd59"
sx={{ mt: 3, mb: 1 }}
variant="h4thin"
>
Allow me to walk through some specific examples of how the ICC smart-contract could be applied.
</Typography>

<br/>
<br/>

<Typography
align="left"
color="inherit"
sx={{ mb: 1 }}
variant="h5thin"
>
In practice, the ICC represents the secure logic controlling asset transfers on the smart-contract. The different legal realms symbolize individual blockchain networks like Bitcoin or Ethereum which have distinct protocols and jurisdictions.

 
</Typography>

<br/>

<Typography
align="left"
color="inherit"
sx={{ mb: 1 }}
variant="h5thin"
>
The ICC smart-contract includes functions for depositing ERC20 tokens, transferring tokens to another chain, sending messages to other chains, receiving messages from other chains, and withdrawing tokens back to the originating chain. 
</Typography>

<br/>

<Typography
align="left"
color="inherit"
sx={{ mb: 1 }}
variant="h5thin"
>
Its primary purpose is clear: to facilitate communication and data transfer between blockchains, transcending the limitations that confined assets and information to their respective chains.

 
</Typography>


<br/>


<br/>



<br/>



<br/>



<br/>

</Stack>
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
<Box sx={{ mt: 3 }}>



<hr/>
<Typography
align="left"
color="inherit"
sx={{ mb: 1 }}
variant="h4"
><h3>Web3 with ICC & Chainlink</h3>
</Typography>

<hr/>
<br/>

<Typography
align="left"
color="palegoldenrod"
variant="h5"
>
At its foundation, the ICC leverages blockchain technology to enable seamless, transparent transfers of digital assets between different legal jurisdictions. Consider these groundbreaking capabilities:
</Typography>
<br/>
<br/>
<Typography
align="left"
color="inherit"
sx={{ mb: 3 }}
variant="body1"
>
<li>Secure escrow functionality allowing clients to deposit case retainers and other digital assets into reputable third party custody.</li>
<br/>
<li>Automated transfer of pre-agreed portions of deposited assets to counterparties when certain computable conditions are fulfilled.</li>
<br/>
<li>Immutable transaction histories providing undisputed evidentiary records acceptable to any court.</li>
<br/>
<li>Integration of oracular services to query off-chain legal databases and apply relevant precedents within the smart-contract logic.</li>
<li>Interoperability with other blockchain networks through cross-chain communication protocols.</li>
</Typography>


<Typography
align="left"
color="yellow"
variant="body1"
>
With these tools, we can programmatically enforce contractual agreements, leverage big data insights, and reduce disputes all on a neutral, tamper-proof infrastructure. The game-changing legal implications are clear.
</Typography>



</Box>
</Grid>
















<Grid
xs={12} 
md={6}
>
<Box sx={{ mt: 3 }}>
<Typography
align="left"
color="inherit"
sx={{ mb: 1 }}
variant="h4"
><h3>Elevate your tech game the Chainlink way!</h3>
</Typography>

<Stack spacing={4}>




<ImageSwapOnHover
src="/assets/hover/lexautomatica-2024-character-originals-017-600w.png-desat.png"
hoverSrc="/assets/hover/lexautomatica-2024-character-originals-017-600w-blue.png"
alt="LexAutomatico"
/>


</Stack>
</Box>
</Grid>



<br/>




</Grid>


<br/>



<Button
color="primary"
component="a"
endIcon={(
<SvgIcon fontSize="small"
>
<LinkExternal01Icon />
</SvgIcon>
)}
href="https://airtable.com/appFxKW1brHioqUh8/shrSf9u04ONsEnufo"
size="large"
target="_blank"
variant="contained"
>
Join LexAutomatico Now
</Button>
<br/>

<br/>


<hr/>

<br/>

<Typography
align="left"
color="inherit"
sx={{ mb: 3 }}
variant="h3"
>
SecureCrossChainTransferAndLexOracle.sol Solidity Code
</Typography>
<Typography
align="left"
color="yellow"
sx={{ mb: 1 }}
variant="body0"
>
<p>XXXXXXXXXxSelect buttons below to view the code sections.</p>
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
variant="h3small"
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

<Grid
xs={12} 
md={6}
>


<hr/>

<br/>
<br/>

<Stack spacing={4}>
<Typography
color="lightsteelblue"
sx={{ mt: 4 }}
variant="h2"
>
Secure Cross Chain Transfer and Lex Oracle
</Typography>



<Typography variant="body2">
<VideoPlayer
  videoUrl="https://freeweb3.infura-ipfs.io/ipfs/QmeJ1wKWgmWKLD1WuHpLoPP17Le9tCJJZzhNfBGGNDrqBL"
  light="/assets/lex_image_03.png"
/>
</Typography>

</Stack>
</Grid>



</Container>
</Box>
);
};
