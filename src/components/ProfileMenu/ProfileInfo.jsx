// styled components
import { Wrapper, Text } from './styles';
// constants
import { PROFILE_FIELDS } from '../../constants/profileInfo';
// helpers
import { formatDate } from '../../helpers/dateFormatter';

export const ProfileInfo = ({ userData }) => {
    return (
        <Wrapper>
            {PROFILE_FIELDS.map(({ key, label, defaultValue, date, type }) => (
                <Text key={key} type={type}>
                    {label}:{' '}
                    {date
                        ? formatDate(userData[key])
                        : userData[key] || defaultValue}
                </Text>
            ))}
        </Wrapper>
    );
};
