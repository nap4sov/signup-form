// hooks
import { useSelector } from 'react-redux';
import { useMemo, useState } from 'react';
import { useProfileForm, useGetProfileInfo } from '../../hooks/profile';
// selectors
import { user } from '../../redux/selectors';
// styled components
import { Container } from './styles';
import {
    EditContainer,
    BackContainer,
} from '../../components/ProfileMenu/styles';
// components
import { ProfileInfo } from '../../components/ProfileMenu/ProfileInfo';
import { ProfileEdit } from '../../components/ProfileMenu/ProfileEdit';
import { SaveButton } from '../../components/ProfileMenu/SaveButton';

const Profile = () => {
    const { id } = useSelector(user);
    const { data } = useGetProfileInfo(id);
    const userData = useMemo(() => (data ? data : {}), [data]);
    const form = useProfileForm();

    const [editing, setEditing] = useState(false);

    return (
        <Container>
            {editing ? (
                <>
                    <ProfileEdit id={id} userData={userData} form={form} />
                    <BackContainer onClick={() => setEditing(false)}>
                        🔙
                    </BackContainer>
                    <SaveButton id={id} form={form} setEditing={setEditing} />
                </>
            ) : (
                <>
                    <ProfileInfo id={id} userData={userData} />
                    <EditContainer onClick={() => setEditing(true)}>
                        ✏️
                    </EditContainer>
                </>
            )}
        </Container>
    );
};

export default Profile;
