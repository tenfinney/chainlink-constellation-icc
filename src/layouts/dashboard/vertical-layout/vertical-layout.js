import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import { MobileNav } from '../mobile-nav';
import { SideNav } from './side-nav';
import { TopNav } from './top-nav';
import { useMobileNav } from './use-mobile-nav';
const SIDE_NAV_WIDTH = 280;
const VerticalLayoutRoot = styled('div')(({ theme }) => ({
display: 'flex',
flex: '1 1 auto',
maxWidth: '100%',
[theme.breakpoints.up('lg')]: {
paddingLeft: SIDE_NAV_WIDTH
}
}));
const VerticalLayoutContainer = styled('div')({
display: 'flex',
flex: '1 1 auto',
flexDirection: 'column',
width: '100%'
});
export const VerticalLayout = (props) => {
const { children, sections, navColor } = props;
const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
const mobileNav = useMobileNav();
return (
<>
<TopNav onMobileNavOpen={mobileNav.handleOpen} />
{lgUp && (
<SideNav
color={navColor}
sections={sections}
/>
)}
{!lgUp && (
<MobileNav
color={navColor}
onClose={mobileNav.handleClose}
open={mobileNav.open}
sections={sections}
/>
)}
<VerticalLayoutRoot>
<VerticalLayoutContainer>
{children}
</VerticalLayoutContainer>
</VerticalLayoutRoot>
</>
);
};
VerticalLayout.propTypes = {
children: PropTypes.node,
navColor: PropTypes.oneOf(['blend-in', 'discrete', 'evident']),
sections: PropTypes.array
};
