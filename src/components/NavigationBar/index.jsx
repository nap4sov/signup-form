// hooks
import { useSelector } from 'react-redux';
// selectors
import { user } from '../../redux/selectors';
// styled components
import { Navigation, NavigationLink } from './styles';
// constants
import { NAVIGATION_ROUTES } from '../../constants/routes';

const NavigationBar = () => {
    const { email } = useSelector(user);
    return (
        <Navigation>
            {Object.keys(NAVIGATION_ROUTES).map(route =>
                !email && NAVIGATION_ROUTES[route].restricted ? (
                    ''
                ) : (
                    <NavigationLink
                        to={NAVIGATION_ROUTES[route].path}
                        key={route}
                    >
                        {NAVIGATION_ROUTES[route].label}
                    </NavigationLink>
                ),
            )}
        </Navigation>
    );
};

export default NavigationBar;
