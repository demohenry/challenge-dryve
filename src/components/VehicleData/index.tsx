import * as S from './styles';

export type VehicleProps = {
	title?: string;
	yearType?: '2018 - FLEX';
	gearbox?: 'MECÂNICO' | 'AUTOMÁTICO';

	currency?: string;
	minAccepted?: string;
};

const VehicleData = ({
	title,
	yearType,
	gearbox,
	currency,
	minAccepted,
}: VehicleProps) => (
	<S.Wrapper>
		<img src="" alt="imagem do carro" />
		<S.Data>
			<span className="title">{title}</span>
			<span className="code">GDL8019</span>
			<span className="yearType">{yearType}</span>
			<span className="gearbox">{gearbox} - 70.972 KM</span>
		</S.Data>
		<S.Price>
			<span className="ad">ANÚNCIO</span>
			<span className="currency">R$ {currency}</span>
			<span className="min-ad">MÍNIMO ACEITO</span>
			<span className="min-accepted">R$ {minAccepted}</span>
		</S.Price>
		<S.Status>
			<span className="waiting-price"> Aguardando precificação</span>
			<span className="date-time">18/04/2020 às 14:35</span>
		</S.Status>
	</S.Wrapper>
);

export default VehicleData;
