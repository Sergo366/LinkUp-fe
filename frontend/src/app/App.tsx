import Home from '../pages/Home/Home';
import { ComponentWrapper } from './styles/styles';
import { Header } from '../entities/Header';
import { Navigation } from '../entities/Navigation';
import { AppRoutes } from './AppRoutes';

export const App = () => {
	return (
		<ComponentWrapper>
			<Header />
			<Navigation />
			<AppRoutes />
		</ComponentWrapper>
	)
}
