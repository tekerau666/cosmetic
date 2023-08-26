import {FC, ReactNode} from 'react';
import {Provider} from 'react-redux';
import {createReduxStore} from 'app/providers/StoreProvider/config/store';
import {StateSchema} from 'app/providers/StoreProvider/config/StateSchema';
import {useNavigate} from 'react-router-dom';
import {ReducersMapObject} from '@reduxjs/toolkit';

interface StoreProviderProps {
    children: ReactNode,
    initialState?: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
}

export const StoreProvider: FC<StoreProviderProps> = ({children, initialState, asyncReducers}) => {
	const navigate = useNavigate();
	const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate,
	);
	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};