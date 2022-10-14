// styled components
import { Navigation, NavigationLink } from './styles';
// constants
import { NAVIGATION_ROUTES } from '../../constants/routes';

const NavigationBar = () => {
    return (
        <Navigation>
            {Object.keys(NAVIGATION_ROUTES).map(route => (
                <NavigationLink to={NAVIGATION_ROUTES[route].path} key={route}>
                    {NAVIGATION_ROUTES[route].label}
                </NavigationLink>
            ))}
        </Navigation>
    );
};

export default NavigationBar;
