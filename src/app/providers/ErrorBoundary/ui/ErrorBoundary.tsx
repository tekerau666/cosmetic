import React, {ErrorInfo, ReactNode, Suspense} from 'react';
import {withTranslation} from 'react-i18next';
import * as https from 'https';
import Hero from 'componets/Hero/Hero';
import {PageError} from 'widgets/PageError/ui/PageError';
import {PageLoader} from 'widgets/PageLoader/ui/PageLoader';


interface ErrorBoundaryProps {
    children: ReactNode
}
interface ErrorBoundaryState {
    hasError: boolean
}
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		// You can also log the error to an error reporting services
		console.log(error, info);
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<Suspense fallback={<PageLoader/>}>
					<PageError/>
				</Suspense>
			);
		}

		return children;
	}
}

export default ErrorBoundary;