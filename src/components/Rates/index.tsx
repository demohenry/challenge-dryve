import VehicleData from 'components/VehicleData';

import * as S from './styles';

const Rates = () => (
	<S.Wrapper>
		<span className="rateUpdate">Ultimas avaliações</span>
		<S.DataWrapper>
			<span className="vehicleData">DADOS DO VEÍCULO</span>

			<span className="price">VALOR</span>
			<span className="status">STATUS</span>
		</S.DataWrapper>
		<VehicleData
			title={'JEEP COMPASS'}
			yearType={'2018 - FLEX'}
			currency={'115.560'}
			gearbox={'AUTOMÁTICO'}
			minAccepted={'115.560'}
		/>
		<VehicleData
			title={'FORD ECOSPORT'}
			yearType={'2018 - FLEX'}
			currency={'38.900'}
			gearbox={'AUTOMÁTICO'}
			minAccepted={'36.900'}
		/>
		<VehicleData
			title={'CHEVROLET PRISMA'}
			yearType={'2018 - FLEX'}
			currency={'41.200'}
			gearbox={'AUTOMÁTICO'}
			minAccepted={'40.000'}
		/>
		<VehicleData
			title={'FORD ECOSPORT'}
			yearType={'2018 - FLEX'}
			currency={'56.500'}
			gearbox={'AUTOMÁTICO'}
			minAccepted={'40.000'}
		/>
		<VehicleData
			title={'TOYOTA'}
			yearType={'2018 - FLEX'}
			currency={'27.100'}
			gearbox={'AUTOMÁTICO'}
			minAccepted={'55.000'}
		/>
		<span className="open-all">Ver todos</span>
	</S.Wrapper>
);

export default Rates;
