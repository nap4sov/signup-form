// hooks
import { useEditComment } from '../../../hooks/comments';
// styled components
import { SaveContainer } from './styles';
// helpers
import { showSuccess } from '../../../helpers/notifier';

export const SaveButton = ({ commentId, postId, text, setEditedText }) => {
    const { refetch } = useEditComment({ postId, commentId, text });

    const handleSaveClick = async () => {
        const { status } = await refetch();
        if (status !== 'success') return;
        showSuccess('Edited successfully');
        setEditedText('');
    };

    return <SaveContainer onClick={handleSaveClick}>✅</SaveContainer>;
};
