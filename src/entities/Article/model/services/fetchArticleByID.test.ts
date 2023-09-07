import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleByID } from './fetchArticleByID';

const data = {
    error: 'error',
    id: '1',
    title: 'subtitle',
    views: 1123,
    createdAt: '11.01.2022',
};

describe('fetchArticleByID.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticleByID);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error ID', async () => {
        const thunk = new TestAsyncThunk(fetchArticleByID);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
