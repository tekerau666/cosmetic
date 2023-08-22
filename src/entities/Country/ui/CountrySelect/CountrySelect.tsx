import {FC, useCallback} from "react";
import {classNames} from "shared/lib/classNames/classNames"
import {Select} from "shared/ui/Select/Select";
import {Country} from "entities/Country";
import {useTranslation} from "react-i18next";


interface CountrySelectProps {
	className?: string,
    value?: Country,
    onChange?: (value: Country) => void
    readonly?: boolean
}
const options = [
    {value: Country.Russia, content: Country.Russia},
    {value: Country.Belarus, content: Country.Belarus},
    {value: Country.Serbia, content: Country.Serbia},
    {value: Country.Niger, content: Country.Niger},
]
export const CountrySelect:FC<CountrySelectProps> = ({ className,  value, onChange, readonly }) => {
    const { t } = useTranslation()
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    },[onChange])
    return (
		<Select
            className={classNames('', {}, [className])}
            label={t('Выберите страну')}
            readonly={readonly}
            options={options}
            onChange={onChangeHandler}
        />
	)
}