import * as S from './styles';

export type ValuesProps = {
	children: React.ReactNode;
	title?: 'AVALIAÇÕES HOJE' | 'CARROS PUBLICADOS' | 'TICKET MÉDIO DO ESTOQUE';
	balance?: number;
	since?: 'desde ontem' | 'este mês';
};

const Values = ({ children, title, balance, since }: ValuesProps) => (
	<S.Wrapper>
		<S.InfoWrapper>
			<span>{title}</span>
			<h1>{children}</h1>
			<h3>{balance}%</h3>
			<h6>{since}</h6>
		</S.InfoWrapper>
	</S.Wrapper>
);

export default Values;
