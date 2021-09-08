import { useState } from 'react';
import Link from 'next/link';
import { Home as HomeIcon } from '@styled-icons/entypo/Home';
import { PersonFill as PersonIcon } from '@styled-icons/bootstrap/PersonFill';
import { Power as PowerIcon } from '@styled-icons/bootstrap/Power';
import { VehicleCar as CarIcon } from '@styled-icons/fluentui-system-regular/VehicleCar';

import * as S from './styles';

const Sidebar = ({ name = 'Democrito Henry' }) => {
	const [isOpen, setIsOpen] = useState(false);
	const showSideBar = () => setIsOpen(!isOpen);

	return (
		<S.Wrapper isOpen={isOpen} onClick={showSideBar}>
			<S.Avatar>
				<img src="/img/avatar.jpg" alt="avatar do perfil" />
				{isOpen ? (
					<>
						<span>{name}</span>
						<PowerIcon />
						<button>SAIR</button>
					</>
				) : (
					''
				)}
			</S.Avatar>

			<S.IconWrapper>
				<Link href="/">
					<HomeIcon />
				</Link>
			</S.IconWrapper>
			<S.IconWrapper>
				<Link href="/customers">
					<PersonIcon />
				</Link>
			</S.IconWrapper>
			<S.IconWrapper>
				<CarIcon />
			</S.IconWrapper>

			{isOpen && (
				<ul>
					<li>
						<a href="/">Início</a>
					</li>
					<li>
						<a href="/customers">Clientes</a>
					</li>
					<li>
						<a href="/">Veículos</a>
					</li>
				</ul>
			)}
		</S.Wrapper>
	);
};
export default Sidebar;
