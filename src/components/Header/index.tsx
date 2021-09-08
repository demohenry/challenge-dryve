import * as S from './styles';
import Link from 'next/link';

import { Bell as BellIcon } from '@styled-icons/fa-solid/Bell';
import { Search as SearchInput } from '@styled-icons/evil/Search';

const Header = () => (
	<S.Wrapper>
		<div>
			<Link href="/">
				<img src="/img/logo.svg" alt="Logo da Dryve" />
			</Link>

			<p>BACKOFFICE</p>
		</div>

		<S.SearchIcon>
			<SearchInput />
			<BellIcon />
		</S.SearchIcon>
	</S.Wrapper>
);

export default Header;
