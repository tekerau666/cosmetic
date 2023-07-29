import {ReactNode} from "react";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import i18nTests from "shared/config/i18n/i18nTests";

interface ComponentRenderWithOption {
    route?: string
}
export function componentRender(component: ReactNode, options: ComponentRenderWithOption = {}) {

    const {
        route= '/',
    } = options

    return render(
        <MemoryRouter>
            <I18nextProvider i18n={i18nTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    )
}