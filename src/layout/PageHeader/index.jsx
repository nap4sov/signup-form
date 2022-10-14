import { Header } from './styles';
import NavigationBar from '../../components/NavigationBar';
import UserMenu from '../../components/UserMenu';

const PageHeader = () => {
    return (
        <Header>
            <NavigationBar />
            <UserMenu />
        </Header>
    );
};

export default PageHeader;
