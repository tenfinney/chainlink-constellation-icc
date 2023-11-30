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
title: "CaseLawAdapter.js ",
description:
"See documentation from Web3 Legal Engineering.",
imageDark: "/assets/frontend/01-CaseLawAdapter-dark.png",
imageLight: "/assets/frontend/01-CaseLawAdapter-light.png",
},
{
id: "exclusivenft",
title: "deploy_smart_contract.js ",
description:
"See documentation from Web3 Legal Engineering.",
imageDark: "/assets/frontend/02-deploy_smart_contract-dark.png",
imageLight: "/assets/frontend/02-deploy_smart_contract-light.png",
},
{
id: "web3training",
title: "deploy_chainlink_job.js",
description:
"See documentation from Web3 Legal Engineering.",
imageDark: "/assets/frontend/03-deploy_chainlink_job-dark.png",
imageLight: "/assets/frontend/03-deploy_chainlink_job-light.png",
},
{
id: "blockchaincert",
title: "job_specification.json ",
description:
"See documentation from Web3 Legal Engineering.",
imageDark: "/assets/frontend/04-job_specification_json-dark.png",
imageLight: "/assets/frontend/04-job_specification_json-light.png",
},
{
id: "networkingoppys",
title: "icc-frontend01-data-entry.html ",
description:
"See documentation from Web3 Legal Engineering.",
imageDark: "/assets/frontend/icc-frontend01-data-entry-dark.png",
imageLight: "/assets/frontend/icc-frontend01-data-entry-light.png",
},
{
id: "resumebooster",
title: "icc-frontend02-results.html ",
description:
"See documentation from Web3 Legal Engineering.",
imageDark: "/assets/frontend/icc-frontend02-results-dark.png",
imageLight: "/assets/frontend/icc-frontend02-results-light.png",
},
{
id: "legalengcertpath",
title: "icc-frontend03-report.html ",
description:
"See documentation from Web3 Legal Engineering.",
imageDark: "/assets/frontend/icc-frontend03-report-dark.png",
imageLight: "/assets/frontend/icc-frontend03-report-light.png",
},
{
id: "insights",
title: "icc-frontend04-metamask.html ",
description:
"See documentation from Web3 Legal Engineering.",
imageDark: "/assets/frontend/icc-frontend04-metamask-dark.png",
imageLight: "/assets/frontend/icc-frontend04-metamask-light.png",
}
];



export const HomeFrontendComponents = () => {


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
<br/>

<Container maxWidth="lg"
>
<Stack
spacing={2}
sx={{ mb: 4 }}
>
<ImageSwapOnHover
src="/assets/icc-logo-blu-chainlink3-1000w.png"
hoverSrc="/assets/icc-logo-blu-chainlink3-ltblue.png"
alt="LexAutomatico"
/>
<Typography
align="center"
color="lightsteelblue"
sx={{ mt: 4 }}
variant="h4"
>
ICC Secure Cross Chain Transfer And Lex Oracle Project
</Typography>


</Stack>
<br/>

<Grid
xs={12} 
md={6}
>


<Stack spacing={4}>


{/* <Typography variant="body2">
<VideoPlayer
  videoUrl="https://freeweb3.infura-ipfs.io/ipfs/QmbryPdzgKnAKM2ERyhP8jYJFNB21sTtxPwFjZxAuLYRCS"
  light="/assets/lex_image_03.png"
/>
</Typography>
 */}


{/* <Typography variant="body2">
<VideoPlayer
  videoUrl="https://freeweb3.infura-ipfs.io/ipfs/QmberwtTXdANhefk6L35i421TMAbv9a9PGqqGfFa4n3iP3"
  light="/assets/lex_image_03.png"
/>
</Typography> */}



{/* <Typography variant="body2">
<VideoPlayer
  videoUrl="https://freeweb3.infura-ipfs.io/ipfs/QmexSJTQP8Wk1a4Tg5hjUbiJicxSGWq2YgXewUih492wQy"
  light="/assets/lex_image_03.png"
/>
</Typography> */}



{/* <Typography variant="body2">
<VideoPlayer
  videoUrl="https://freeweb3.infura-ipfs.io/ipfs/QmQQMWwa1cQqyshDAfDm6xgpNKYzWWFYaWDDHY8ANinLKt"
  light="/assets/lex_image_03.png"
/>
</Typography> */}



{/* <Typography variant="body2">
<VideoPlayer
  videoUrl="https://freeweb3.infura-ipfs.io/ipfs/QmX5DeLpeojAoJ7U1Y6r4yugtqparTYzHMptHH2DkTEcSx"
  light="/assets/lex_image_03.png"
/>
</Typography> */}



{/* <Typography variant="body2">
<VideoPlayer
  videoUrl="https://freeweb3.infura-ipfs.io/ipfs/QmNbsAV6bsWJESjwMjELa5eRp39scf2dKjifEw3B8BNJ2h"
  light="/assets/lex_image_03.png"
/>
</Typography> */}



{/* <Typography variant="body2">
<VideoPlayer
  videoUrl="https://freeweb3.infura-ipfs.io/ipfs/QmeJ1wKWgmWKLD1WuHpLoPP17Le9tCJJZzhNfBGGNDrqBL"
  light="/assets/lex_image_03.png"
/>
</Typography> */}




</Stack>
</Grid>

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
Adapters and additional code for the ICC application to function properly.

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


<Grid
xs={12} 
md={6}
>


<Stack spacing={4}>


{/* <Typography variant="body2">
<VideoPlayer
  videoUrl="https://freeweb3.infura-ipfs.io/ipfs/QmbryPdzgKnAKM2ERyhP8jYJFNB21sTtxPwFjZxAuLYRCS"
  light="/assets/lex_image_03.png"
/>
</Typography>
 */}


<Typography variant="body2">
<VideoPlayer
  videoUrl="https://freeweb3.infura-ipfs.io/ipfs/QmberwtTXdANhefk6L35i421TMAbv9a9PGqqGfFa4n3iP3"
  light="/assets/lex_image_03.png"
/>
</Typography>



{/* <Typography variant="body2">
<VideoPlayer
  videoUrl="https://freeweb3.infura-ipfs.io/ipfs/QmexSJTQP8Wk1a4Tg5hjUbiJicxSGWq2YgXewUih492wQy"
  light="/assets/lex_image_03.png"
/>
</Typography> */}



{/* <Typography variant="body2">
<VideoPlayer
  videoUrl="https://freeweb3.infura-ipfs.io/ipfs/QmQQMWwa1cQqyshDAfDm6xgpNKYzWWFYaWDDHY8ANinLKt"
  light="/assets/lex_image_03.png"
/>
</Typography> */}



{/* <Typography variant="body2">
<VideoPlayer
  videoUrl="https://freeweb3.infura-ipfs.io/ipfs/QmX5DeLpeojAoJ7U1Y6r4yugtqparTYzHMptHH2DkTEcSx"
  light="/assets/lex_image_03.png"
/>
</Typography> */}



{/* <Typography variant="body2">
<VideoPlayer
  videoUrl="https://freeweb3.infura-ipfs.io/ipfs/QmNbsAV6bsWJESjwMjELa5eRp39scf2dKjifEw3B8BNJ2h"
  light="/assets/lex_image_03.png"
/>
</Typography> */}



{/* <Typography variant="body2">
<VideoPlayer
  videoUrl="https://freeweb3.infura-ipfs.io/ipfs/QmeJ1wKWgmWKLD1WuHpLoPP17Le9tCJJZzhNfBGGNDrqBL"
  light="/assets/lex_image_03.png"
/>
</Typography> */}




</Stack>
</Grid>


</Container>
</Box>


);
};
