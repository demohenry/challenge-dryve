import Values from 'components/Values';
import Topboard from 'components/Topboard';
import Rates from 'components/Rates';
import Charts from 'components/Charts';
import Footer from 'components/Footer';

import * as S from './styles';

export default function Home() {
	return (
		<>
			<S.Wrapper>
				<Values title={'AVALIAÇÕES HOJE'} balance={36} since={'desde ontem'}>
					29
				</Values>
				<Values title={'CARROS PUBLICADOS'} balance={4} since={'este mês'}>
					389
				</Values>
				<Values
					title={'TICKET MÉDIO DO ESTOQUE'}
					balance={-6}
					since={'este mês'}
				>
					R$ 42.201
				</Values>
			</S.Wrapper>
			<S.Topboard>
				<Topboard />
			</S.Topboard>
			<S.Rates>
				<Rates />
			</S.Rates>
			<S.ChartWrapper>
				<Charts />
			</S.ChartWrapper>
			<Footer />
		</>
	);
}
