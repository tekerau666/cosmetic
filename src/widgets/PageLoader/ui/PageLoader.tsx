import cls from './PageLoader.module.scss';
import {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Loader} from 'shared/ui/Loader/Loader';


interface PageLoaderProps {
    className?: string,
}

export const PageLoader: FC<PageLoaderProps> = ({children, className}) => {
	return (
		<div
			className={classNames(cls.PageLoader, {}, [className])}
		>
			<Loader/>
		</div>
	);
};