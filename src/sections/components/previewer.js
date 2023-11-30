import { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Moon01Icon from '@untitled-ui/icons-react/build/esm/Moon01';
import SunIcon from '@untitled-ui/icons-react/build/esm/Sun';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import { ThemeProvider } from '@mui/material/styles';
import { useSettings } from 'src/hooks/use-settings';
import { createTheme } from 'src/theme';
export const Previewer = (props) => {
const { children, title, ...other } = props;
const settings = useSettings();
const [paletteMode, setPaletteMode] = useState(settings.paletteMode);
const theme = useMemo(() => {
return createTheme({
...settings,
paletteMode
});
}, [settings, paletteMode]);
useEffect(() => {
setPaletteMode(settings.paletteMode);
}, [settings.paletteMode]);
const handleModeSwitch = useCallback(() => {
setPaletteMode((prevState) => {
return prevState === 'light' ? 'dark' : 'light';
});
}, []);
return (
<Card
variant="outlined"
{...other}>
<CardHeader
action={(
<IconButton onClick={handleModeSwitch}>
<SvgIcon fontSize="small">
{paletteMode === 'light' ? <Moon01Icon /> : <SunIcon />}
</SvgIcon>
</IconButton>
)}
title={title}
/>
<Divider />
<ThemeProvider theme={theme}>
<Box sx={{ colorScheme: paletteMode }}>
{children}
</Box>
</ThemeProvider>
</Card>
);
};
Previewer.propTypes = {
children: PropTypes.node.isRequired,
title: PropTypes.string.isRequired
};
