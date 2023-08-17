import cls from './ProfilePage.module.scss'
import {FC, useEffect} from "react";
import {classNames} from "shared/lib/classNames/classNames"
import {useTranslation} from "react-i18next";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {fetchProfileData, ProfileCard, profileReducer} from "entities/Profile";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {getProfileData} from "entities/Profile/modal/selectors/getProfileData/getProfileData";
import {getProfileError} from "entities/Profile/modal/selectors/getProfileError/getProfileError";
import {getProfileIsLoading} from "entities/Profile/modal/selectors/getProfileIsLoading/getProfileIsLoading";
import {ProfilePageHeader} from "./ProfilePageHeader/ProfilePageHeader";

const reducer: ReducersList = {
	profile: profileReducer
}

interface ProfilePageProps {
    className?: string,
}

const ProfilePage: FC<ProfilePageProps> = ({ className}) => {
    const dispatch = useAppDispatch()
    const data = useSelector(getProfileData)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)

    useEffect(() => {
        dispatch(fetchProfileData())
    }, []);

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount >
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfilePageHeader/>
                <ProfileCard
                    data={data}
                    isLoading={isLoading}
                    error={error}
                />
            </div>
        </DynamicModuleLoader>

    )
}

export default ProfilePage