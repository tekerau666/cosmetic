import cls from './ProfilePage.module.scss'
import {FC, useCallback, useEffect} from "react";
import {classNames} from "shared/lib/classNames/classNames"
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {fetchProfileData, profileActions, ProfileCard, profileReducer} from "entities/Profile";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {getProfileError} from "entities/Profile/modal/selectors/getProfileError/getProfileError";
import {getProfileIsLoading} from "entities/Profile/modal/selectors/getProfileIsLoading/getProfileIsLoading";
import {ProfilePageHeader} from "./ProfilePageHeader/ProfilePageHeader";
import {getProfileReadonly} from "entities/Profile/modal/selectors/getProfileReadonly/getProfileReadonly";
import {getProfileForm} from "entities/Profile/modal/selectors/getProfileForm/getProfileForm";
import {Currency} from "entities/Currency/modal/types/currency";
import {Country} from "entities/Country/model/types/country";

const reducer: ReducersList = {
	profile: profileReducer
}

interface ProfilePageProps {
    className?: string,
}

const ProfilePage: FC<ProfilePageProps> = ({ className}) => {
    const dispatch = useAppDispatch()
    const formData = useSelector(getProfileForm)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
    const readonly = useSelector(getProfileReadonly)
    useEffect(() => {
        dispatch(fetchProfileData())
    }, []);

    const changeFistName = useCallback((value: string) => {
        dispatch(profileActions.updateProfileData({firstName: value || ''}))
    },[dispatch])

    const changeLastName = useCallback((value: string) => {
        dispatch(profileActions.updateProfileData({lastName: value || ''}))
    },[dispatch])

    const changeAge = useCallback((value: string) => {
        dispatch(profileActions.updateProfileData({age: Number(value) || 0}))
    },[dispatch])

    const changeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfileData({city: value || ''}))
    },[dispatch])

    const changeLogin = useCallback((value: string) => {
        dispatch(profileActions.updateProfileData({username: value || ''}))
    },[dispatch])

    const changeAvatar = useCallback((value: string) => {
        dispatch(profileActions.updateProfileData({avatar: value || ''}))
    },[dispatch])

    const changeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfileData({ currency }))
    },[dispatch])

    const changeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfileData({ country }))
    },[dispatch])

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount >
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfilePageHeader/>
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    changeFistName={changeFistName}
                    changeLastName={changeLastName}
                    changeAge={changeAge}
                    changeCity={changeCity}
                    changeLogin={changeLogin}
                    changeAvatar={changeAvatar}
                    changeCurrency={changeCurrency}
                    changeCountry={changeCountry}
                    readonly={readonly}
                />
            </div>
        </DynamicModuleLoader>

    )
}

export default ProfilePage