import {ReactNode} from "react";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import i18nTests from "shared/config/i18n/i18nTests";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {DeepPartial} from "@reduxjs/toolkit";

interface ComponentRenderWithOption {
    route?: string,
    initialState?: DeepPartial<StateSchema>
}

export function componentRender(component: ReactNode, options: ComponentRenderWithOption = {}) {

    const {
        route = '/',
        initialState
    } = options

    return render(
        <MemoryRouter>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18nTests}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}