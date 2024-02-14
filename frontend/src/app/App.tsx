import Home from '../pages/Home/Home';
import { ComponentWrapper } from './styles/styles';

export const App = () =>  {

  return (
    <ComponentWrapper>
        <header>header</header>
        <nav>navigation</nav>
      {/*<AppRoutes/>*/}
        <Home/>
    </ComponentWrapper>
  )
}
