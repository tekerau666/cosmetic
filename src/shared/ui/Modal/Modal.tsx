 import cls from './Modal.module.scss'
import {FC, ReactNode, useCallback, useEffect, useRef, useState} from "react";
import {classNames} from "../../lib/classNames/classNames"
 import {Portal} from "shared/ui/Portal/Portal";
 import {useTheme} from "app/providers/ThemeProvider";


interface ModalProps {
    children?: ReactNode
    className?: string,
    isOpen?: boolean,
    onClose?: () => void
}

const ANIMATION_TIME = 300

export const Modal: FC<ModalProps> = ({children, className, isOpen, onClose}) => {

    const { theme } = useTheme()

    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>()
    
    const closeModal = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timeRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_TIME)
        }
    },[onClose])

    const stopContentClose = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeModal()
        }
    },[closeModal])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
     }
        return () => {
            clearTimeout(timeRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown]);


    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    }
    return (
        <Portal>
            <div
                className={classNames(cls.Modal, mods, [className, theme])}
            >
                <div className={cls.overlay} onClick={closeModal}>
                    <div
                        className={cls.content}
                        onClick={stopContentClose}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}