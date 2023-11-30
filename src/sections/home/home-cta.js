import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';




const backLinks = [
{
url: 'https://web3legaltools.com',
imageUrl: './assets/backlinks/backlinks-2024-001.png',
imageAlt: 'web3legaltools',
imageTitle: 'Web3LegalTools',
},
{
url: 'https://lexautomatico.com',
imageUrl: './assets/backlinks/backlinks-2024-017.png',
imageAlt: 'lexautomatico',
imageTitle: 'LexAutomatico',
},
{
url: 'https://web3lexa.com',
imageUrl: './assets/backlinks/backlinks-2024-018.png',
imageAlt: 'web3lexa',
imageTitle: 'Web3Lexa',
},
{
url: 'https://webelexa.com/edu',
imageUrl: './assets/backlinks/backlinks-2024-020.png',
imageAlt: 'webelexa',
imageTitle: 'Courses Login',
},
{
url: 'https://web3connect.web3vm.com',
imageUrl: './assets/backlinks/backlinks-2024-042.png',
imageAlt: 'web3connect',
imageTitle: 'Web3 Connect ',
},
// {
// url: 'https://explore.web3vm.com',
// imageUrl: './assets/backlinks/backlinks-2024-043.png',
// imageAlt: 'explore',
// imageTitle: 'explore.web3vm.com',
// },
// {
// url: 'https://upload.freeweb3.com',
// imageUrl: './assets/backlinks/backlinks-2024-044.png',
// imageAlt: 'upload',
// imageTitle: 'upload.freeweb3.com',
// },
// {
// url: 'https://users.freeweb3.com',
// imageUrl: './assets/backlinks/backlinks-2024-045.png',
// imageAlt: 'users',
// imageTitle: 'users.freeweb3.com',
// },
// {
// url: 'https://query.freeweb3.com',
// imageUrl: './assets/backlinks/backlinks-2024-051.png',
// imageAlt: 'query',
// imageTitle: 'query.freeweb3.com',
// },
// {
// url: 'https://terms-conditions.freeweb3.com',
// imageUrl: './assets/backlinks/backlinks-2024-057.png',
// imageAlt: 'terms-conditions',
// imageTitle: 'terms-conditions.freeweb3',
// },
// {
// url: 'https://cidtochainfree.freeweb3.com',
// imageUrl: './assets/backlinks/backlinks-2024-062.png',
// imageAlt: 'cidtochainfree',
// imageTitle: 'cidtochainfree.freeweb3',
// },
// {
// url: 'https://cidtochain.freeweb3.com',
// imageUrl: './assets/backlinks/backlinks-2024-067.png',
// imageAlt: 'cidtochain',
// imageTitle: 'cidtochain.freeweb3.com',
// },
// {
// url: 'https://tokens.freeweb3.com',
// imageUrl: './assets/backlinks/backlinks-2024-068.png',
// imageAlt: 'tokens',
// imageTitle: 'tokens.freeweb3.com',
// },
// {
// url: 'https://www.freeweb3.com',
// imageUrl: './assets/backlinks/backlinks-2024-069.png',
// imageAlt: 'metafp',
// imageTitle: 'www.freeweb3.com',
// },
// {
// url: 'https://encrypt.freeweb3.com',
// imageUrl: './assets/backlinks/backlinks-2024-071.png',
// imageAlt: 'encrypt',
// imageTitle: 'encrypt.freeweb3.com',
// },
// {
// url: 'https://decode.freeweb3.com',
// imageUrl: './assets/backlinks/backlinks-2024-086.png',
// imageAlt: 'decode',
// imageTitle: 'decode.freeweb3.com',
// },
// {
// url: 'https://web3skills.com',
// imageUrl: './assets/backlinks/backlinks-2024-087.png',
// imageAlt: 'web3skills',
// imageTitle: 'web3skills.com',
// },
// {
// url: 'https://nft.web3vm.com',
// imageUrl: './assets/backlinks/backlinks-2024-102.png',
// imageAlt: 'nft',
// imageTitle: 'nft.web3vm.com',
// },
// {
// url: 'https://nftgated.freeweb3.com',
// imageUrl: './assets/backlinks/backlinks-2024-104.png',
// imageAlt: 'nftgated',
// imageTitle: 'nftgated.freeweb3.com',
// },
// {
// url: 'https://patterns.freeweb3.com',
// imageUrl: './assets/backlinks/backlinks-2024-105.png',
// imageAlt: 'patterns',
// imageTitle: 'patterns.freeweb3.com',
// },
// {
// url: 'https://videohash.web3vm.com',
// imageUrl: './assets/backlinks/backlinks-2024-107.png',
// imageAlt: 'videohash',
// imageTitle: 'videohash.web3vm.com',
// },
{
url: 'https://claims.web3vm.com',
imageUrl: './assets/backlinks/backlinks-2024-109.png',
imageAlt: 'claims',
imageTitle: 'Claims',
},
{
url: 'https://evidencer.web3vm.com',
imageUrl: './assets/backlinks/backlinks-2024-110.png',
imageAlt: 'evidencer',
imageTitle: 'Evidencer',
},
// {
// url: 'https://evidencelog.web3vm.com',
// imageUrl: './assets/backlinks/backlinks-2024-111.png',
// imageAlt: 'evidencelog',
// imageTitle: 'evidencelog.web3vm.com',
// },
{
url: 'https://evidencemanager.web3vm.com',
imageUrl: './assets/backlinks/backlinks-2024-113.png',
imageAlt: 'evidencemanager',
imageTitle: 'Evidence Manager',
},
// {
// url: 'https://3dcourses.freeweb3.com',
// imageUrl: './assets/backlinks/backlinks-2024-118.png',
// imageAlt: '3dcourses',
// imageTitle: '3dcourses.freeweb3.com',
// },
// {
// url: 'https://metacollab.app',
// imageUrl: './assets/backlinks/backlinks-2024-118.png',
// imageAlt: 'metacollab',
// imageTitle: 'metacollab.app',
// },
// {
// url: 'https://greeting.web3vm.com',
// imageUrl: './assets/backlinks/backlinks-2024-119.png',
// imageAlt: 'greeting',
// imageTitle: 'greeting.web3vm.com',
// },
];




const publiCations = [
{
imageTitle: 'LexNewsPlus ',
imageAlt: 'lexnewsplus',
imageUrl: '/assets/sqbacklinks/fav12/fav12-02.png',
url: 'https://lexnewsplus.com',
},
{
imageTitle: 'LexComms ',
imageAlt: 'lexcomms freeweb3',
imageUrl: '/assets/sqbacklinks/fav12/fav12-05.png',
url: 'https://lexcomms.freeweb3.com',
},
{
imageTitle: 'LMS Web3Lexa.com',
imageAlt: 'web3lexa edu',
imageUrl: '/assets/sqbacklinks/fav12/fav12-04.png',
url: 'https://web3lexa.com/edu',
},
{
imageTitle: 'WebElexa legal-tech  ',
imageAlt: 'webelexa ',
imageUrl: '/assets/sqbacklinks/fav12/fav12-01.png',
url: 'https://webelexa.com/',
},
{
imageTitle: 'Legal-tech publication web3lexa Adventures',
imageAlt: 'web3lexa adventures',
imageUrl: '/assets/publications/LEXAUTOMATICA_ADVENTURES-200w.png',
url: 'https://web3lexa.com/adventures/',
},
{
imageTitle: 'Legal-tech publication web3lexa Explorations',
imageAlt: 'web3lexa explorations ',
imageUrl: '/assets/publications/LEXAUTOMATICA_EXPLORATIONS-200w.png',
url: 'https://web3lexa.com/explorations',
},
{
imageTitle: 'Legal-tech publication web3lexa Discoveries',
imageAlt: 'web3lexa discoveries',
imageUrl: '/assets/publications/LEXAUTOMATICA_DISCOVERIES-200w.png',
url: 'https://web3lexa.com/discoveries',
},
{
imageTitle: 'Legal-tech publication web3lexa Chronicles',
imageAlt: 'web3lexa chronicles',
imageUrl: '/assets/publications/LEXAUTOMATICA_CHRONICLES-200w.png',
url: 'https://web3lexa.com/chronicles',
},
{
imageTitle: 'Legal-tech publication web3lexa Insights',
imageAlt: 'web3lexa insights',
imageUrl: '/assets/publications/LEXAUTOMATICA_INSIGHTS-200w.png',
url: 'https://web3lexa.com/insights',
},
{
imageTitle: 'Legal-tech publication web3lexa Perspectives',
imageAlt: 'web3lexa perspectives',
imageUrl: '/assets/publications/LEXAUTOMATICA_PERSPECTIVES-200w.png',
url: 'https://web3lexa.com/perspectives',
},
{
imageTitle: 'Legal-tech publication web3lexa Spotlight',
imageAlt: 'web3lexa spotlight ',
imageUrl: '/assets/publications/LEXAUTOMATICA_SPOTLIGHT-200w.png',
url: 'https://web3lexa.com/spotlight ',
},
{
imageTitle: 'Legal-tech publication web3lexa Tidbits',
imageAlt: 'web3lexa tidbits',
imageUrl: '/assets/publications/LEXAUTOMATICA_TIDBITS-200w.png',
url: 'https://web3lexa.com/tidbits',
}

];


const renderBackLink = (backLink, index) => (
<Grid item 
key={index} 
xs={12} 
sm={6} 
md={3}
>
<a href={backLink.url} 
target="_blank" 
rel="noopener noreferrer"
>
<Paper 
elevation={3} 
style={{ textAlign: 'center' }}
>
<br/>
<img
src={backLink.imageUrl}
alt={backLink.imageAlt || `Back Link ${index}`}
title={backLink.imageTitle || ''}
style={{ maxWidth: '100%', height: 'auto' }}
/>
<Typography 
variant="subtitle2" 
gutterBottom
>
{backLink.imageTitle || ''}
</Typography>
</Paper>
</a>
</Grid>
);



const renderPublication = (publication, index) => (
<Grid item 
key={index} 
xs={12} 
sm={6} 
md={3}
>
<a href={publication.url} 
target="_blank" 
rel="noopener noreferrer"
>
<Paper 
elevation={3} 
style={{ textAlign: 'center' }}
>
<br/>
<img
src={publication.imageUrl}
alt={publication.imageAlt || `Publication ${index}`}
title={publication.imageTitle || ''}
style={{ maxWidth: '100%', height: 'auto' }}
/>
<Typography 
variant="subtitle2" 
gutterBottom
>
{publication.imageTitle || ''}
</Typography>
</Paper>
</a>
</Grid>
);

export const HomeCta = () => (

<Box
sx={{
backgroundColor: 'neutral.800',
backgroundRepeat: 'no-repeat',
backgroundPosition: 'top center',
backgroundImage: 'url("/assets/gradient-bg.svg")',
color: 'neutral.100',
py: '120px'
}}
>
<Container maxWidth="lg">

{/* <Stack
alignItems="center"
direction="row"
justifyContent="center"
spacing={2}
sx={{ mt: 3 }}
>


<ReactPlayer url="https://freeweb3.infura-ipfs.io/ipfs/QmasxQxPdkAjtkwMoWpnVeFEXjfPG6o6uhAVjHPAnLNo4V"
controls="true"
playing="false"
loop="false"
volume="1"
/>

<Button
component="a"
href="https://web3legaltools.com"
target="_blank"
color="error"
variant="contained"
size="large"
>
Purchase a CLE Course Now
</Button>
</Stack> */}
<Stack 
spacing={2}
>

<br/>
<br/>
<br/>


<div>
<h2>Additional Working Sites &#40;for demostration purposes only&#41;</h2>
<Grid container 
spacing={2}
>
{backLinks.map((backLink, index) => renderBackLink(backLink, index))}
</Grid>
</div>

<br/>
<br/>
<br/>

{/* <div>
<h2>Legaltech Publication related to LexAutomatico LSSAC and Web3 Legal Engineering </h2>
<Grid container 
spacing={2}
>
{publiCations.map((publication, index) => renderPublication(publication, index))}
</Grid>
</div>
 */}

<br/>
<br/>
<hr/>
<br/>

<br/>
<br/>
<br/>


<Container maxWidth="lg">




<Stack
spacing={2}
sx={{ mb: 8 }}
>
<Typography
align="center"
color="inherit"
variant="h3"
>
The Future of Learning: Web3 Law in 3D Spaces
</Typography>

<Stack mr="5">
<Box mr="5">
<ReactPlayer url="https://freeweb3.infura-ipfs.io/ipfs/QmWLkZUFyTqmnikNK7JAKeqRponLmV5r5PcqWbrJVnJUAt"
  controls="true"
  playing="false"
  loop="false"
  volume=".10"
  width="auto" 
  mr="5"
light='/assets/3d-legaltech-workspace-1200w.png'

/>
</Box>

</Stack>

<Typography
align="center"
color="inherit"
variant="subtitle2"
>
Web3 technologies have the potential to revolutionize the legal profession by offering significant benefits in the management of client case files and the overall efficiency of legacy court systems. We will explore the reasons why Web3 technologies can bring about these improvements and how they can enhance the handling of data and Electronically Stored Information (ESI) at the state and federal government levels.
</Typography>
</Stack>
</Container>

</Stack>

<br/>
<br/>
<br/>
<br/>
<hr/>
<br/>



{/* <Stack mr="5">
<Box mr="5">

<Typography 
sx={{ fontWeight: 650, mb: 2 }}
variant="h4"
>
Web3 Connected &nbsp;
<Typography 
component="span" 
color="primary.main" 
variant="inherit"
>
3D Workspaces
</Typography>
&nbsp; and the Future of Law
</Typography>







<Typography
sx={{ mb: 2 }} 
color="text.secondary" 
variant="h5"
>
Learning in Web3 connected 3D Workspaces
</Typography>


<ReactPlayer url="https://freeweb3.infura-ipfs.io/ipfs/QmajQ1igso5wRkgakp58TSaTQDpxjcPBajz1vzsXa9SSDA"
  controls="true"
  playing="false"
  loop="false"
  volume=".25"
  width="80vw" 
  mr="5"
  height="654px"
light='/assets/2022-demo-images-png-109-1000w.png'

/>


<Typography 
color="text.secondary"
variant="body0">
See the 3D Workspace in Action
</Typography>

</Box>

</Stack> */}











</Container>





</Box>




);
