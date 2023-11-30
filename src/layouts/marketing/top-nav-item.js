import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ChevronDownIcon from '@untitled-ui/icons-react/build/esm/ChevronDown';
import { alpha } from '@mui/system/colorManipulator';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Paper from '@mui/material/Paper';
import Portal from '@mui/material/Portal';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import { RouterLink } from 'src/components/router-link';
const TOP_NAV_HEIGHT = 64;
const TOP_NAV_SPACE = 16;
const OFFSET = 16;
export const TopNavItem = (props) => {
const { active, external, path, popover, title } = props;
const [open, setOpen] = useState(false);
const handleMouseEnter = useCallback(() => {
setOpen(true);
}, []);
const handleMouseLeave = useCallback(() => {
setOpen(false);
}, []);
// With mega-menu
if (popover) {
return (
<>
<Box
component="li"
sx={{
display: 'flex',
alignItems: 'center',
height: '100%'
}}
onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave}
>
<ButtonBase
disableRipple
sx={{
alignItems: 'center',
borderRadius: 1,
display: 'flex',
justifyContent: 'flex-start',
px: '16px',
py: '8px',
textAlign: 'left',
'&:hover': {
backgroundColor: 'action.hover'
},
...(active && {
color: 'primary.main'
})
}}
>
<Typography
component="span"
variant="subtitle2"
>
{title}
</Typography>
<SvgIcon
sx={{
fontSize: 16,
ml: 1
}}
>
<ChevronDownIcon />
</SvgIcon>
</ButtonBase>
</Box>
{open && (
<Portal>
<Box
onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave}
sx={{
left: 0,
position: 'fixed',
pt: OFFSET + 'px',
right: 0,
top: TOP_NAV_HEIGHT + TOP_NAV_SPACE,
zIndex: (theme) => theme.zIndex.appBar + 100
}}
>
<Paper
elevation={16}
sx={{
backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.90),
backdropFilter: 'blur(6px)',
mx: 'auto',
width: (theme) => theme.breakpoints.values.md
}}
>
{popover}
</Paper>
</Box>
</Portal>
)}
</>
);
}
// Simple
const linkProps = path
? external
? {
component: 'a',
href: path,
target: '_blank'
}
: {
component: RouterLink,
href: path
}
: {};
return (
<Box
component="li"
sx={{
display: 'flex',
alignItems: 'center',
height: '100%'
}}
>
<ButtonBase
disableRipple
sx={{
alignItems: 'center',
borderRadius: 1,
display: 'flex',
justifyContent: 'flex-start',
px: '16px',
py: '8px',
textAlign: 'left',
'&:hover': {
backgroundColor: 'action.hover'
},
...(active && {
color: 'primary.main'
})
}}
{...linkProps}>
<Typography
component="span"
variant="subtitle2"
>
{title}
</Typography>
</ButtonBase>
</Box>
);
};
TopNavItem.propTypes = {
active: PropTypes.bool,
external: PropTypes.bool,
path: PropTypes.string,
popover: PropTypes.any,
title: PropTypes.string.isRequired
};
