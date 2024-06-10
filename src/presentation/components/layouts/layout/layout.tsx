//style imports
import * as Style from './layout.style';

//props imports
import { LayoutProps } from './layout.props';

//component imports
import Navbar from '../navbar/navbar';

const Layout = ({ children }: LayoutProps) => {
	return (
		<Style.Container>
			<Navbar />
			<Style.Content>{children}</Style.Content>
		</Style.Container>
	);
};

export default Layout;
