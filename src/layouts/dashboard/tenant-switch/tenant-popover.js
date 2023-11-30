import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
export const TenantPopover = (props) => {
const { anchorEl, onChange, onClose, open = false, tenants, ...other } = props;
return (
<Popover
anchorEl={anchorEl}
anchorOrigin={{
horizontal: 'right',
vertical: 'bottom'
}}
disableScrollLock
transformOrigin={{
horizontal: 'right',
vertical: 'top'
}}
keepMounted
onClose={onClose}
open={open}
PaperProps={{ sx: { width: 180 } }}
{...other}>
{tenants.map((tenant) => (
<MenuItem
key={tenant}
onClick={() => onChange?.(tenant)}
>
{tenant}
</MenuItem>
))}
</Popover>
);
};
TenantPopover.propTypes = {
anchorEl: PropTypes.any,
onChange: PropTypes.func,
onClose: PropTypes.func,
open: PropTypes.bool,
tenants: PropTypes.array.isRequired
};
