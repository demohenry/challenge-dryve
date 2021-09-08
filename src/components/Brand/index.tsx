import * as S from './styles';

export type BrandProps = {
	brand?: string;
	img?: string;
	num?: string;
};

const Brand = ({ brand, img, num }: BrandProps) => (
	<S.Wrapper>
		<img src={img} alt="logo da fabricante" />

		<span>{brand}</span>
		<span className="numSpan">{num}</span>
	</S.Wrapper>
);

export default Brand;
