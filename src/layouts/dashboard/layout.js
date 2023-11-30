import PropTypes from 'prop-types';
import { withAuthGuard } from 'src/hocs/with-auth-guard';
import { useSettings } from 'src/hooks/use-settings';
import { useSections } from './config';
import { HorizontalLayout } from './horizontal-layout';
import { VerticalLayout } from './vertical-layout';
export const Layout = withAuthGuard((props) => {
const settings = useSettings();
const sections = useSections();
if (settings.layout === 'horizontal') {
return (
<HorizontalLayout
sections={sections}
navColor={settings.navColor}
{...props} />
);
}
return (
<VerticalLayout
sections={sections}
navColor={settings.navColor}
{...props} />
);
});
Layout.propTypes = {
children: PropTypes.node
};
