import React from "react";
import ReactPlayer from "react-player";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

// import { LogoAccenture } from 'src/components/logos/logo-accenture';
// import { LogoAtt } from 'src/components/logos/logo-att';
// import { LogoAws } from 'src/components/logos/logo-aws';
// import { LogoBolt } from 'src/components/logos/logo-bolt';
// import { LogoSamsung } from 'src/components/logos/logo-samsung';
// import { Paper } from "@mui/material";
// import { LogoVisma } from 'src/components/logos/logo-visma';

const QuotesIcon = () => (
<svg
fill="none"
height="79"
viewBox="0 0 105 79"
width="105"
xmlns="http://www.w3.org/2000/svg"
>
<g clipPath="url(#clip0_17690_94764)">
<path
d="M25.086 78.1818C20.265 78.1818 15.971 76.9768 12.204 74.5658C8.437 72.0048 5.424 68.4638 3.164 63.9438C1.054 59.4238 0 54.3008 0 48.5758C0 43.3028 0.904 38.1798 2.712 33.2078C4.671 28.2358 7.458 23.6408 11.074 19.4218C14.6576 15.0819 18.8433 11.2767 23.504 8.12177C28.325 4.80677 33.599 2.39677 39.324 0.889771L50.398 14.6758C43.919 17.2368 38.721 20.6268 34.804 24.8458C31.037 29.0648 29.154 32.6808 29.154 35.6938C29.154 37.0498 29.531 38.5568 30.284 40.2138C31.188 41.7208 32.921 43.3028 35.482 44.9598C39.249 47.3698 41.81 49.9318 43.166 52.6438C44.673 55.2048 45.426 58.1438 45.426 61.4578C45.426 66.5808 43.467 70.6478 39.55 73.6618C35.783 76.6748 30.962 78.1818 25.086 78.1818V78.1818ZM79.326 78.1818C74.505 78.1818 70.211 76.9768 66.444 74.5658C62.677 72.0048 59.664 68.4638 57.404 63.9438C55.294 59.4238 54.24 54.3008 54.24 48.5758C54.24 43.3028 55.144 38.1798 56.952 33.2078C58.911 28.2358 61.698 23.6408 65.314 19.4218C68.8976 15.0819 73.0833 11.2767 77.744 8.12177C82.565 4.80677 87.839 2.39677 93.564 0.889771L104.638 14.6758C98.159 17.2368 92.961 20.6268 89.044 24.8458C85.277 29.0648 83.394 32.6808 83.394 35.6938C83.394 37.0498 83.771 38.5568 84.524 40.2138C85.428 41.7208 87.161 43.3028 89.722 44.9598C93.489 47.3698 96.05 49.9318 97.406 52.6438C98.913 55.2048 99.666 58.1438 99.666 61.4578C99.666 66.5808 97.707 70.6478 93.79 73.6618C90.023 76.6748 85.202 78.1818 79.326 78.1818V78.1818Z"
fill="black"
fillOpacity="0.04"
/>
</g>
<defs>
<clipPath id="clip0_17690_94764">
<rect
fill="white"
height="78.0005"
transform="translate(0 0.889771)"
width="105"
/>
</clipPath>
</defs>
</svg>
);


const backLinks = [
  // {
  // url: 'https://web3legaltools.com',
  // imageUrl: './assets/sqbacklinks/backlink-sq-2024-01.png',
  // imageAlt: 'web3legaltools',
  // imageTitle: 'web3legaltools.com',
  // },
  // {
  // url: 'https://lexautomatico.com',
  // imageUrl: './assets/sqbacklinks/backlink-sq-2024-02.png',
  // imageAlt: 'lexautomatico',
  // imageTitle: 'lexautomatico.com',
  // },
  // {
  // url: 'https://web3lexa.com',
  // imageUrl: './assets/sqbacklinks/backlink-sq-2024-03.png',
  // imageAlt: 'web3lexa',
  // imageTitle: 'web3lexa.com',
  // },
  // {
  // url: 'https://webelexa.com',
  // imageUrl: './assets/sqbacklinks/backlink-sq-2024-04.png',
  // imageAlt: 'webelexa',
  // imageTitle: 'webelexa.com',
  // },

  // {
  // url: 'https://web3connect.web3vm.com',
  // imageUrl: './assets/sqbacklinks/fav12/fav12-01.png',
  // imageAlt: 'web3connect',
  // imageTitle: 'web3connect.web3vm.com',
  // },
  {
  url: 'https://explore.web3vm.com',
  imageUrl: './assets/sqbacklinks/fav12/fav12-03.png',
  imageAlt: 'explore',
  imageTitle: 'explore.web3vm.com',
  },
  {
    url: 'https://users.freeweb3.com',
    imageUrl: './assets/sqbacklinks/fav12/fav12-02.png',
    imageAlt: 'users',
    imageTitle: 'users.freeweb3.com',
  },
  {
    url: 'https://query.freeweb3.com',
    imageUrl: './assets/sqbacklinks/fav12/fav12-06.png',
    imageAlt: 'query',
    imageTitle: 'query.freeweb3.com',
  },
  {
  url: 'https://upload.freeweb3.com',
  imageUrl: './assets/sqbacklinks/fav12/fav12-05.png',
  imageAlt: 'upload',
  imageTitle: 'upload.freeweb3.com',
  },

  {
  url: 'https://cidtochainfree.freeweb3.com',
  imageUrl: './assets/sqbacklinks/fav12/fav12-07.png',
  imageAlt: 'cidtochainfree',
  imageTitle: 'cidtochainfree.freeweb3',
  },
  {
  url: 'https://cidtochain.freeweb3.com',
  imageUrl: './assets/sqbacklinks/fav12/fav12-08.png',
  imageAlt: 'cidtochain',
  imageTitle: 'cidtochain.freeweb3.com',
  },
  {
    url: 'https://encrypt.freeweb3.com',
    imageUrl: './assets/sqbacklinks/fav12/fav12-11.png',
    imageAlt: 'encrypt',
    imageTitle: 'encrypt.freeweb3.com',
  },
  {
  url: 'https://tokens.freeweb3.com',
  imageUrl: './assets/sqbacklinks/fav12/fav12-09.png',
  imageAlt: 'tokens',
  imageTitle: 'tokens.freeweb3.com',
  },
  // {
  // url: 'https://www.freeweb3.com',
  // imageUrl: './assets/sqbacklinks/fav12/fav12-10.png',
  // imageAlt: 'metafp',
  // imageTitle: 'www.freeweb3.com',
  // },
  // {
  // url: 'https://decode.freeweb3.com',
  // imageUrl: './assets/sqbacklinks/fav12/fav12-12.png',
  // imageAlt: 'decode',
  // imageTitle: 'decode.freeweb3.com',
  // },
  // {
  // url: 'https://web3skills.com',
  // imageUrl: './assets/sqbacklinks/backlink-sq-2024-17.png',
  // imageAlt: 'web3skills',
  // imageTitle: 'web3skills.com',
  // },
  // {
  // url: 'https://nft.web3vm.com',
  // imageUrl: './assets/sqbacklinks/backlink-sq-2024-18.png',
  // imageAlt: 'nft',
  // imageTitle: 'nft.web3vm.com',
  // },
  // {
  // url: 'https://nftgated.freeweb3.com',
  // imageUrl: './assets/sqbacklinks/backlink-sq-2024-19.png',
  // imageAlt: 'nftgated',
  // imageTitle: 'nftgated.freeweb3.com',
  // },
  // {
  // url: 'https://patterns.freeweb3.com',
  // imageUrl: './assets/sqbacklinks/backlink-sq-2024-20.png',
  // imageAlt: 'patterns',
  // imageTitle: 'patterns.freeweb3.com',
  // },
  // {
  // url: 'https://videohash.web3vm.com',
  // imageUrl: './assets/sqbacklinks/backlink-sq-2024-21.png',
  // imageAlt: 'videohash',
  // imageTitle: 'videohash.web3vm.com',
  // },
  // {
  // url: 'https://claims.web3vm.com',
  // imageUrl: './assets/sqbacklinks/backlink-sq-2024-22.png',
  // imageAlt: 'claims',
  // imageTitle: 'claims.web3vm.com',
  // },
  // {
  // url: 'https://evidencer.web3vm.com',
  // imageUrl: './assets/sqbacklinks/backlink-sq-2024-23.png',
  // imageAlt: 'evidencer',
  // imageTitle: 'evidencer.web3vm.com',
  // },
  // {
  // url: 'https://evidencelog.web3vm.com',
  // imageUrl: './assets/sqbacklinks/backlink-sq-2024-24.png',
  // imageAlt: 'evidencelog',
  // imageTitle: 'evidencelog.web3vm.com',
  // },
  // {
  // url: 'https://evidencemanager.web3vm.com',
  // imageUrl: './assets/sqbacklinks/backlink-sq-2024-25.png',
  // imageAlt: 'evidencemanager',
  // imageTitle: 'evidencemanager.web3vm.com',
  // },
  // {
  // url: 'https://3dcourses.freeweb3.com',
  // imageUrl: './assets/sqbacklinks/backlink-sq-2024-26.png',
  // imageAlt: '3dcourses',
  // imageTitle: '3dcourses.freeweb3.com',
  // },
  // {
  // url: 'https://metacollab.app',
  // imageUrl: './assets/sqbacklinks/backlink-sq-2024-27.png',
  // imageAlt: 'metacollab',
  // imageTitle: 'metacollab.app',
  // },
  // {
  // url: 'https://greeting.web3vm.com',
  // imageUrl: './assets/sqbacklinks/backlink-sq-2024-28.png',
  // imageAlt: 'greeting',
  // imageTitle: 'greeting.web3vm.com',
  // },
  ];


  // const otherLinks = [
  //   {
  //     url: 'https://terms-conditions.freeweb3.com',
  //     imageUrl: './assets/sqbacklinks/fav12/fav12-04.png',
  //     imageAlt: 'terms-conditions',
  //     imageTitle: 'terms-conditions.freeweb3',
  //     },
  //   ];
  

const renderBackLink = (backLink, index) => (
<Grid item 
key={index} 
xs={12}
sm={6} 
md={3}>
<a href={backLink.url}
target="_blank" 
rel="noopener noreferrer"
>
<Paper 
elevation={3} 
style={{ textAlign: 'center' }}
>
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



export const HomeReviews = () => (
<div>
<Container maxWidth="lg">



<Stack
spacing={8}
sx={{ py: '120px' }}
>
<Grid
container
spacing={3}
>
<div>

<Typography
sx={{ mb:5 }}
align="left"
variant="h3"
>Web3 Training Sites
</Typography>

<Grid container 
spacing={2}
>
{backLinks.map((backLink, index) => renderBackLink(backLink, index))}
</Grid>
</div>

</Grid>


</Stack>
</Container>
</div>
);
