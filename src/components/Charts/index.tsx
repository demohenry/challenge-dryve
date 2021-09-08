import * as S from './styles';
import { Doughnut } from 'react-chartjs-2';

const Charts = () => (
	<S.Wrapper>
		<span className="title">Preços - Dryve x KBB</span>
		<div className="chart-div">
			<Doughnut
				data={{
					// labels: ['Na Média', 'Acima da média', 'Abaixo na média'],
					datasets: [
						{
							label: 'media de vendas',
							data: [60, 25, 15],
							backgroundColor: [
								'rgb(54, 162, 235)',
								'rgb(255, 99, 132)',
								'rgb(255, 205, 86)',
							],
						},
					],
				}}
				height={320}
			/>
		</div>
		<S.Labels>
			<span className="na-media">Na média</span>
			<span className="acima-media">Acima da média</span>
			<span className="abaixo-media">Abaixo média</span>
		</S.Labels>
	</S.Wrapper>
);

export default Charts;
