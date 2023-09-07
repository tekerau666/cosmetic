/*
import {
    profileActions,
    profileReducer,
    ProfileSchema,
    updateProfileData,
    ValidateProfileError,
} from 'entities/Profile';
import { StateSchema } from 'app/providers/StoreProvider';
import {articleDetailsActions, articleDetailsReducer} from "entities/Article/model/slice/articleDetailsSlice";
import {ArticleDetailsSchema} from "entities/Article";

const data = {
    error: 'error',
    id: '1',
    title: 'subtitle',
    views: 1123,
    createdAt: '11.01.2022',
};

describe('articleDetailsSlice.test', () => {
    test('test update profile', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            articleDetailsActions.({
                username: '123456',
            }),
        )).toEqual({
            form: { username: '123456' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            validateError: undefined,
            form: data,
            data,
        });
    });
});
*/
