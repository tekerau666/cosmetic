import { memo, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { navigate } from '@storybook/addon-links';
import cls from './Code.module.scss';
import { Icon } from '../Icon/Icon';

interface Code {
    className?: string;
    text: string
}

export const Code = memo((props: Code) => {
    const {
        className,
        text,
    } = props;
    const { t } = useTranslation();

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);
    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} size={ButtonSize.M} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
                <Icon Svg={CopyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
