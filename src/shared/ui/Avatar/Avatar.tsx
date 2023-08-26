import cls from './Avatar.module.scss';
import {CSSProperties, FC, useMemo} from 'react';
import {classNames, Mods} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';


interface AvatarProps {
	className?: string,
    src: string,
    size?: number,
    alt?: string
}

export const Avatar:FC<AvatarProps> = ({ className, src,alt, size }) => {
	const mods: Mods = {};
	const styles = useMemo<CSSProperties>(() => {
		return {
			width: size || 100,
			height: size || 100,
		};
	}, [size]);
	return (
		<img
			src={src}
			alt={alt}
			className={classNames(cls.Avatar, mods, [className])}
			style={styles}
		/>

	);
};