//styles
import { MainLayoutContainer, MainLayoutChildrenContainer } from './main.layout.styles';

//props
import { LayoutProps } from './layout.props';

//components
import Navbar from '../components/navbar/navbar';

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <MainLayoutContainer>
      <Navbar />
      <MainLayoutChildrenContainer>{children}</MainLayoutChildrenContainer>
    </MainLayoutContainer>
  );
};

export default MainLayout;
