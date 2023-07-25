import {FC, useEffect, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames"
import {Button} from "shared/ui/Button/Button";



// Тестирование на ErrorBoundary
export const BugButton: FC = () => {
    const [error, setError] = useState(false)
    const handleError = () => {
        setError(true)
    }
    useEffect(() => {
        if (error) {
            throw new Error
        }
    }, [error]);

    return (
        <Button
            onClick={handleError}
        >
            Получить ошибку
        </Button>
    )
}