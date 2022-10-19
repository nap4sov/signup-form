import {
    TitleInput,
    DescriptionInput,
    FullTextInput,
} from '../components/Posts/NewPost/styles';

export const POST_FIELDS = [
    {
        name: 'title',
        placeholder: 'Post title',
        component: ({ name, placeholder, handleInputChange, value }) => (
            <TitleInput
                key={name}
                name={name}
                placeholder={placeholder}
                onChange={handleInputChange}
                value={value}
            />
        ),
    },
    {
        name: 'description',
        placeholder: 'Post description',
        component: ({ name, placeholder, handleInputChange, value }) => (
            <DescriptionInput
                key={name}
                name={name}
                placeholder={placeholder}
                onChange={handleInputChange}
                value={value}
            />
        ),
    },
    {
        name: 'fullText',
        placeholder: 'Say something',
        component: ({ name, placeholder, handleInputChange, value }) => (
            <FullTextInput
                key={name}
                name={name}
                placeholder={placeholder}
                onChange={handleInputChange}
                value={value}
            />
        ),
    },
];

export const POST_INIT_STATE = {
    title: '',
    description: '',
    fullText: '',
};
