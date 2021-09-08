import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css`
		width: 387px;
		height: 226px;
		margin: 30px 55px 30px 20px;
		padding: 18px 39px 24px 20px;
		border-radius: 4px;
		background-color: ${theme.colors.whiteTwo};
		border: solid 1px rgba(0, 0, 0, 0.12);
	`}

	.title {
		${({ theme }) => css`
			width: 145px;
			height: 24px;
			margin: 0 6px 20px 0;
			font-family: ${theme.font.family2};
			font-size: 14px;
			font-weight: 600;
			font-stretch: normal;
			font-style: normal;
			line-height: 1.71;
			letter-spacing: 0.1px;
			color: ${theme.colors.black87};
		`}
	}

	.chart-div {
		width: 150px;
		height: 120px;
	}
`;

export const Labels = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	bottom: 80px;

	align-items: flex-end;
	margin: 0 0 0;

	.na-media {
		color: #1070ca;
	}

	.acima-media {
		color: #ec4c47;
	}

	.abaixo-media {
		color: #f7d154;
	}
`;
