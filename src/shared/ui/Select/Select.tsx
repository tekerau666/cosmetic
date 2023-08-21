import cls from './Select.module.scss'
import {ChangeEvent, FC, memo, useMemo} from "react";
import {classNames, Mods} from "shared/lib/classNames/classNames"
import {useTranslation} from "react-i18next";

interface SelectOption {
    value: string,
    content: string,
}

interface SelectProps {
    className?: string,
    label?: string,
    options?: SelectOption[],
    value?: string
    onChange?: (value: string) => void
}

export const Select: FC<SelectProps> = memo((props) => {
    const {
        className,
        label,
        options,
        value,
        onChange
    } = props

    const optionList = useMemo(() => {
        return options?.map((opt) =>
            <option
                className={cls.option}
                value={opt.value}
                key={opt.value}
            >
                {opt.content}
            </option>
        )
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    const {t} = useTranslation()
    const mods: Mods = {}

    return (
        <div className={classNames(cls.Select, mods, [className])}>
            {label &&
                <span className={cls.label}>
                    {label + ">"}
                </span>
            }
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    )
})