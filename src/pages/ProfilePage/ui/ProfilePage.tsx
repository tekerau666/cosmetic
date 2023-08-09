import cls from './ProfilePage.module.scss'
import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames"
import {useTranslation} from "react-i18next";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {profileReducer} from "entities/Profile";

const reducer: ReducersList = {
	profile: profileReducer
}

interface ProfilePageProps {
    className?: string,
}

const ProfilePage: FC<ProfilePageProps> = ({ className}) => {
    const {t} = useTranslation()
    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount >
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                {t('ProfilePage')}
            </div>
        </DynamicModuleLoader>

    )
}

export default ProfilePage