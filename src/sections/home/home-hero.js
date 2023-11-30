import React, { useRef } from "react";
import ReactPlayer from "react-player";
import EyeIcon from "@untitled-ui/icons-react/build/esm/Eye";
import LayoutBottomIcon from "@untitled-ui/icons-react/build/esm/LayoutBottom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ImageSwapOnHover from './ImageSwapOnHover';
import { useTheme } from "@mui/material/styles";
import { RouterLink } from "src/components/router-link";
import { paths } from "src/paths";
import { HomeCodeSamples } from "./home-code-samples";


export const HomeHero = () => {
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
  

return (






<Box
sx={{
backgroundRepeat: "no-repeat",
backgroundPosition: "top center",
backgroundImage: 'url("/assets/gradient-bg.svg")',
pt: "120px",
}}
>

<Stack
spacing={2}
sx={{ ml:5, mr:5, mb: 4 }}
>
<ImageSwapOnHover
src="/assets/icc-logo-blu-chainlink3-1000w.png"
hoverSrc="/assets/icc-logo-blu-chainlink3-ltblue.png"
alt="LexAutomatico"
/>
</Stack>


<br/>



<Container maxWidth="lg">
<Box maxWidth="lg">

<Typography 
variant="h3" 
align="center"

sx={{ fontWeight: 650, mb: 2 }}
>
<Typography 
component="span" 
color="primary.main" 
variant="h2"
>
Secure Cross-Chain Transfer and Lex Oracle
</Typography>
</Typography>

<Typography
align="center"
color="inherit"
sx={{ mb: 1 }}
variant="h2"
>
The Interchain Connector
</Typography>

<br/>
<br/>


<Typography variant="body2">
<VideoPlayer
  videoUrl="https://freeweb3.infura-ipfs.io/ipfs/QmexSJTQP8Wk1a4Tg5hjUbiJicxSGWq2YgXewUih492wQy"
  light="/assets/lex_image_03.png"
/>
</Typography>

<br/>

<Typography
color="chocolate"
sx={{
fontWeight: 500, mb: 5
}}
variant="h4thin"
>
Esteemed members of the legal-tech community, please allow me to introduce you to an innovative system called the &nbsp; 
<Typography 
component="span" 
color="primary.main" 
variant="inherit"
>
Secure CrossChain Transfer And LexOracle 
</Typography>
&nbsp;smart-contract. As seasoned legal-tech experts, I believe you will quickly recognize the great potential this offers for transforming legal processes and expanding access to justice.

</Typography>

<br />
<br />
<br />

<Typography
color="text.secondary"
sx={{
fontWeight: 500,
}}
variant="h4thin"
>
The ever-expanding universe of blockchain requiring seamless communication across different chains has become increasingly apparent. Enterprising minds, including legal professionals exploring the potential of decentralized systems has yearned for a solution.
</Typography>
<br />
<br />
<br />

<Typography
color="text.secondary"
sx={{
fontWeight: 400,
}}
variant="h5"
>The&nbsp; 
<Typography 
component="span" 
color="primary.main" 
variant="inherit"
>
Secure CrossChain Transfer And LexOracle 
</Typography>
&nbsp;smart-contract is a groundbreaking solution designed to facilitate secure and auditable cross-chain transactions while integrating legal data retrieval through Chainlink oracles. This narrative aims to elucidate the functionalities and potential applications of this innovative smart-contract, catering to both legal professionals and smart-contract developers within the Chainlink ecosystem.

</Typography>

<br/>
<br/>

<hr/>
<br/>

<Typography 
sx={{ fontWeight: 650, mb: 2 }}
variant="h3"
>
Learn Web3 Technology with&nbsp;
<Typography 
component="span" 
color="primary.main" 
variant="inherit"
>
CCIP
</Typography>
&nbsp;&
<Typography 
component="span" 
color="primary.main" 
variant="inherit"
>
Chainlink
</Typography>
</Typography>

<br/>


<hr/>
<br/>
<br/>


<br/>




</Box>

<Box
sx={{
pt: "120px",
position: "relative",
}}
>
<Box
sx={{
overflow: "hidden",
width: "90%",
fontSize: 10,
mt: -2,
mx: -2,
pt: 2,
px: 2,
"& img": {
borderTopLeftRadius: (theme) => theme.shape.borderRadius * 2.5,
borderTopRightRadius: (theme) => theme.shape.borderRadius * 2.5,
boxShadow: 16,
width: "60%",
},
}}
>
<img
src={
theme.palette.mode === "dark"
? "/assets/lexautomatico-2024-vert-08blue.png"
: "/assets/lxautomatico-sider-007-desat-3-light.png"
}
/>
</Box>

<Box
sx={{
maxHeight: "100%",
maxWidth: "100%",
overflow: "hidden",
position: "absolute",
right: 0,
top: 40,
"& > div": {
height: 1000,
width: 800,
},
}}
>
<HomeCodeSamples />
</Box>
<br/><br/>
<br/><br/>
<br/><br/>




<hr/>
<br/>
<br/>

<Typography 
sx={{ fontWeight: 650, mb: 2 }}
variant="h3"
>
2023&nbsp;
<Typography 
component="span" 
color="primary.main" 
variant="inherit"
>
Chainlink Constellation 
</Typography>
&nbsp;Hackathon Presentation Video
</Typography>

<br/>


<hr/>
<br/>
<br/>


<br/>
<Grid
xs={12} 
md={6}
>

<Stack spacing={4}>
<Typography
color="lightsteelblue"
sx={{ mt: 4 }}
variant="h2"
>
SecureCrossChainTransferAndLexOracle
</Typography>

<br/>

<Typography variant="body2">
<VideoPlayer
  videoUrl="https://freeweb3.infura-ipfs.io/ipfs/QmX5DeLpeojAoJ7U1Y6r4yugtqparTYzHMptHH2DkTEcSx"
  light="/assets/lex_image_03.png"
/>
</Typography>


<Typography
// color="text.secondary"
color="#a0b3f2"
sx={{ mt: 4 }}
variant="h3"
>
SecureCrossChainTransferAndLexOracle.sol Solidity Code
</Typography>


<Typography
align="left"
color="inherit"
sx={{ mb: 1 }}
variant="h4thin"
>
The SecureCrossChainTransferAndLexOracle smart-contract demonstrates the convergence of cross-chain functionality and Chainlink oracle integration.  
</Typography>


</Stack>
</Grid>












<br />

<Typography
color="text.secondary"
sx={{
fontWeight: 400,
}}
variant="h5"
>
With its secure and auditable design, it opens up new possibilities for legal professionals and smart-contract developers, bridging the gap between legal data and blockchain transactions. As blockchain technology continues to evolve, this smart-contract stands at the forefront, showcasing the potential of secure and interoperable smart-contracts in the decentralized ecosystem.

</Typography>

<br />

<Typography
color="text.secondary"
sx={{
fontWeight: 400,
}}
variant="h5"
>

The&nbsp;
<Typography 
component="span" 
color="#375bd2"
variant="inherit"
>
Secure CrossChain Transfer And LexOracle 
</Typography>

&nbsp;smart-contract provides a comprehensive solution for secure cross-chain transfers and legal data processing. By integrating Chainlink oracles, it ensures reliable access to external data, enabling the evaluation of complex legal problems on the blockchain. This smart-contract serves as a valuable tool for legal professionals and smart-contract developers seeking a secure and auditable framework for cross-chain transactions and legal data processing.



</Typography>

<br />

<Typography
color="text.secondary"
sx={{
fontWeight: 400,
}}
variant="h5"
>

The main purpose of the smart contract is to utilize both &nbsp;
<Typography 
component="span" 
color="#ff5e57"
variant="inherit"
>
1) Chainlink CCIP for cross chain messaging, 
</Typography>

&nbsp;
and 
&nbsp;
<Typography 
component="span" 
color="#ff5e57"
variant="inherit"
>
2) using Chainlink node operators</Typography>

&nbsp;

 to query off chain data though api call and then returning the data back to the message sender. 

At its foundation, the SecureCrossChainTransferAndLexOracle leverages blockchain technology to enable seamless, transparent transfers of digital assets between different legal jurisdictions. Consider these groundbreaking capabilities:


</Typography>

<br />


<br />




<Stack 
alignItems="center" 
direction="row" 
spacing={2}>


<Button
size="large"
href="https://www.voxels.com/play?coords=SE@478W,72S"
target="_blank" 
rel="noopener noreferrer"
startIcon={
<SvgIcon fontSize="small">
<EyeIcon />
</SvgIcon>
}
sx={(theme) =>
theme.palette.mode === "dark"
? {
backgroundColor: "neutral.50",
color: "neutral.900",
"&:hover": {
backgroundColor: "neutral.200",
},
}
: {
backgroundColor: "neutral.900",
color: "neutral.50",
"&:hover": {
backgroundColor: "neutral.700",
},
}
}
variant="contained"
>
SmartLaw in a 3D Workspace Demo
</Button>


<Button
size="large"
color="inherit"
component={RouterLink}
href="https://freeweb3.infura-ipfs.io/ipfs/QmVaNscfi2u26GCsV3RVTaBwtRAr7t8GQ3jsfzkdUbuTfq/index-abi-sol-artifacts.html"
startIcon={
<SvgIcon fontSize="small">
<LayoutBottomIcon />
</SvgIcon>
}
>
Interchain Connect Assets
</Button>

</Stack>







</Box>
<br/>






</Container>
</Box>
);
};
