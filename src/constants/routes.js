import { Navigate } from 'react-router-dom';
import { SignupForm, Posts, Profile, Text } from '../layout';

export const ROUTES = {
    posts: '/posts',
    postDetails: '/posts/:id',
    users: '/users',
    myProfile: '/profile',
    signup: '/signup',
    text: '/text',
};

export const NAVIGATION_ROUTES = {
    home: {
        path: ROUTES.posts,
        label: 'Home',
    },
    myProfile: {
        path: ROUTES.myProfile,
        label: 'My profile',
        restricted: true,
    },
    text: {
        path: ROUTES.text,
        label: 'Selecting text',
    },
};

export const LAYOUT_ROUTES = {
    home: {
        path: '/',
        element: () => <Navigate to={ROUTES.posts} />,
        restricted: false,
    },
    posts: {
        path: ROUTES.posts,
        element: () => <Posts all />,
        restricted: false,
    },
    postDetails: {
        path: ROUTES.postDetails,
        element: () => <Posts />,
        restricted: false,
    },
    myProfile: {
        path: ROUTES.myProfile,
        element: () => <Profile />,
        restricted: true,
    },
    signup: {
        path: ROUTES.signup,
        element: () => <SignupForm />,
        restricted: false,
    },
    text: {
        path: ROUTES.text,
        element: () => <Text />,
        restricted: false,
    },
};
