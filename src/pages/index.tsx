import React from 'react';
import Home from 'templates/Home';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
// import Footer from 'components/Footer';

import * as S from './styles';

export default function Index() {
	return (
		<>
			<S.Wrapper>
				<Sidebar />
				<Header />
				<Home />
				{/* <Footer /> */}
			</S.Wrapper>
		</>
	);
}
