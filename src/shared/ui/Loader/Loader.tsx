import './Loader.scss';
import {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';


interface LoaderProps {
    className?: string,
}

export const Loader: FC<LoaderProps> = ({children, className}) => {
	return (
		<div
			className={classNames('loader', {}, [className])}
		>
			<span className="loader"></span>
		</div>
	);
};