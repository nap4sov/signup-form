// hooks
import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetAllPosts } from './posts';
// constants
import { paginationConfig, PARAMS_NAMES } from '../constants/searchConfig';

export const useGetSearchParams = () => {
    const [searchParams] = useSearchParams();
    return {
        page: searchParams.get(PARAMS_NAMES.page),
        limit: searchParams.get(PARAMS_NAMES.limit),
        skip: searchParams.get(PARAMS_NAMES.skip),
    };
};
export const usePagination = () => {
    const { data } = useGetAllPosts();
    const [searchParams, setSearchParams] = useSearchParams();

    const page =
        Number(searchParams.get(PARAMS_NAMES.page)) || paginationConfig.page;
    const limit =
        Number(searchParams.get(PARAMS_NAMES.limit)) || paginationConfig.limit;
    const totalPages = Math.ceil(data?.pagination?.total / limit);

    useEffect(() => {
        setSearchParams({
            limit,
            page,
            skip: (page - 1) * limit,
        });
    }, [limit, page, setSearchParams]);

    const renderParams = useMemo(() => {
        return [
            {
                key: 'lessArrow',
                disabled: page <= 1,
                value: page <= 1 ? 1 : page - 1,
                label: '<',
            },
            {
                key: 'first',
                value: page !== 1 ? 1 : null,
                label: 1,
            },
            {
                key: 'leftDots',
                disabled: true,
                value: page >= 3 ? 3 : null,
                label: '...',
            },
            {
                key: 'current',
                value: page,
                label: page,
                current: true,
            },

            {
                key: 'rightDots',
                disabled: true,
                value: totalPages - page > 1 ? totalPages - 2 : null,
                label: '...',
            },
            {
                key: 'last',
                value: page !== totalPages ? totalPages : null,
                label: totalPages,
            },
            {
                key: 'moreArrow',
                disabled: totalPages <= page,
                value: page + 1,
                label: '>',
            },
        ];
    }, [page, totalPages]);

    return {
        renderParams,
        skip: searchParams.get('skip'),
        setSearchParams,
        totalPages,
    };
};
