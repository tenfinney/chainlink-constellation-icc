import { useCallback, useRef, useState } from 'react';
import ChevronDownIcon from '@untitled-ui/icons-react/build/esm/ChevronDown';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import SvgIcon from '@mui/material/SvgIcon';
const options = [
'Create a merge commit',
'Squash and merge',
'Rebase and merge'
];
export const Buttons3 = () => {
const anchorRef = useRef(null);
const [open, setOpen] = useState(false);
const [selectedIndex, setSelectedIndex] = useState(1);
const handleMenuItemClick = useCallback((index) => {
setSelectedIndex(index);
setOpen(false);
}, []);
const handleToggle = useCallback(() => {
setOpen((prevOpen) => !prevOpen);
}, []);
const handleClose = useCallback((event) => {
if (anchorRef.current && anchorRef.current.contains(event.target)) {
return;
}
setOpen(false);
}, []);
return (
<Box sx={{ p: 3 }}>
<ButtonGroup
ref={anchorRef}
variant="contained"
>
<Button>
{options[selectedIndex]}
</Button>
<Button
onClick={handleToggle}
size="small"
sx={{ backgroundColor: 'primary.dark' }}
>
<SvgIcon>
<ChevronDownIcon />
</SvgIcon>
</Button>
</ButtonGroup>
<Popper
anchorEl={anchorRef.current}
open={open}
transition
>
{({ TransitionProps, placement }) => (
<Grow {...TransitionProps}
style={{
transformOrigin: placement === 'bottom'
? 'center top'
: 'center bottom'
}}
>
<Paper>
<ClickAwayListener onClickAway={handleClose}>
<MenuList>
{options.map((option, index) => (
<MenuItem
disabled={index === 2}
key={option}
onClick={() => handleMenuItemClick(index)}
selected={index === selectedIndex}
>
{option}
</MenuItem>
))}
</MenuList>
</ClickAwayListener>
</Paper>
</Grow>
)}
</Popper>
</Box>
);
};
