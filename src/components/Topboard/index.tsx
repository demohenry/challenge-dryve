import Brand from 'components/Brand';

import * as S from './styles';

const Topboard = () => (
	<S.Wrapper>
		<S.Content>
			<span className="title">Top intenções de compra </span>
			<Brand img={'brands/hyundai.png'} brand={'HB20'} num={'197'} />
			<Brand img={'brands/chevrolet.png'} brand={'Onix'} num={'183'} />
			<Brand img={'brands/jeep.png'} brand={'Jeep'} num={'125'} />
			<Brand img={'brands/volkswag.png'} brand={'T-Cross'} num={'86'} />
			<Brand img={'brands/nissan.png'} brand={'Kicks'} num={'55'} />
		</S.Content>
	</S.Wrapper>
);

export default Topboard;
