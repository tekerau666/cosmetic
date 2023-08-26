import {ReactNode} from 'react';
import {render} from '@testing-library/react';
import {I18nextProvider} from 'react-i18next';
import i18nTests from '../../i18n/i18nTests';
// Обертка для тестирования react-i18next
export function renderWithTranslation(component: ReactNode) {
	return render(
		<I18nextProvider i18n={i18nTests}>
			{component}
		</I18nextProvider>
	);
}