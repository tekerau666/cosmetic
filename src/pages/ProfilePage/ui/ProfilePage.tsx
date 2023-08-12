import cls from './ProfilePage.module.scss'
import {FC, useEffect} from "react";
import {classNames} from "shared/lib/classNames/classNames"
import {useTranslation} from "react-i18next";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {fetchProfileData, ProfileCard, profileReducer} from "entities/Profile";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";

const reducer: ReducersList = {
	profile: profileReducer
}

interface ProfilePageProps {
    className?: string,
}

const ProfilePage: FC<ProfilePageProps> = ({ className}) => {
    const {t} = useTranslation()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, []);
    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount >
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>

    )
}

export default ProfilePage