// hooks
import { useUpdatePost } from '../../../hooks/posts';
// styled components
import { SaveContainer } from '../styles';
// helpers
import { showSuccess } from '../../../helpers/notifier';

export const SaveButton = ({ postId: id, update, setUpdate }) => {
    const { refetch } = useUpdatePost({ id, update });

    const handleSaveClick = async () => {
        const { status } = await refetch();

        if (status !== 'success') return;

        showSuccess('Edited successfully');
        setUpdate({});
    };

    return <SaveContainer onClick={handleSaveClick}>✅</SaveContainer>;
};
