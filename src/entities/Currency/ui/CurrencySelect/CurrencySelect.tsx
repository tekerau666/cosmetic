import {FC, memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Select} from 'shared/ui/Select/Select';
import {Currency} from '../../modal/types/currency';


interface CurrencySelectProps {
	className?: string,
    value?: Currency,
    onChange?: (value: Currency) => void
    readonly?: boolean
}
const options = [
	{value: Currency.RUB, content: Currency.RUB},
	{value: Currency.EUR, content: Currency.EUR},
	{value: Currency.USD, content: Currency.USD},
];
export const CurrencySelect:FC<CurrencySelectProps> = memo(({ className, value, onChange, readonly }) => {
	const { t } = useTranslation();
	const onChangeHandler = useCallback((value: string) => {
		onChange?.(value as Currency);
	},[onChange]);
	return (
		<Select
			className={classNames('', {}, [className])}
			readonly={readonly}
			options={options}
			label={t('Выберите валюту')}
			value={value}
			onChange={onChangeHandler}
		/>
	);
});