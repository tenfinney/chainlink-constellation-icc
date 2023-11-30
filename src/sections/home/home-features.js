import { React, useState } from 'react';
import ReactPlayer from 'react-player'
import LinkExternal01Icon from '@untitled-ui/icons-react/build/esm/LinkExternal01';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const features = [
  {
    id: "evidencer",
    title: "Evidencer",
    description:
    "https://evidencer.freeweb3.com/",
    imageDark: "/assets/06-2024-stickered-logos-015-diecut.png",
    imageLight: "/assets/06-2024-stickered-logos-015-diecut.png",
    }
];
export const HomeFeatures = () => {
const theme = useTheme();
const [activeFeature, setActiveFeature] = useState(0);
const feature = features[activeFeature];
const image = theme.palette.mode === 'dark' ? feature?.imageDark : feature?.imageLight;
return (
<Box
sx={{
backgroundColor: 'neutral.800',
backgroundRepeat: 'no-repeat',
backgroundPosition: 'top center',
backgroundImage: 'url("/assets/gradient-bg.svg")',
color: 'common.white',
py: '120px'
}}
>

</Box>
);
};
