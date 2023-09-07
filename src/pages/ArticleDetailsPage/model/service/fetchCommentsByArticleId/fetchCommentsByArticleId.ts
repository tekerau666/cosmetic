import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comments } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
    Comments[],
    string | undefined,
    ThunkConfig<string>
>(
    'articleDetails/fetchCommentsByArticleId',
    async (articleID, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        if (!articleID) {
            return rejectWithValue('error');
        }

        try {
            const response = await extra.api.get<Comments[]>('/comments', {
                params: {
                    articleID,
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
