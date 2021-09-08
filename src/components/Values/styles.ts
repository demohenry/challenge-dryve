import styled, { css } from 'styled-components';
import { ValuesProps } from './index';

export const Wrapper = styled.main`
	display: flexbox;
	padding-top: -30px;
	margin: 0 -20px 0 -10px;
`;

export const InfoWrapper = styled.div<ValuesProps>`
	${({ theme }) => css`
		/* display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 1px; */
		display: flex;
		flex-direction: column;
		width: max(100px, 400px);
		height: 130px;

		margin: 25px 30px 30px 90px;
		border-radius: 4px;
		background: ${theme.colors.whiteTwo};
		border: solid 1px rgba(0, 0, 0, 0.12);
		position: static;

		span {
			display: flex;
			align-items: center;
			position: relative;
			font-family: ${theme.font.family2};
			width: 114px;
			height: 16px;
			margin: 15px 20px 0 15px;
			opacity: 0.6;
			font-size: 10px;
			font-weight: 500;
			font-style: normal;
			line-height: 1.6;
			letter-spacing: 1.5px;
			color: ${theme.colors.black87};
		}

		h1 {
			font-family: ${theme.font.family2};
			padding: 20px 12px 0 12px;
			font-weight: normal;
		}

		h3 {
			font-family: ${theme.font.family2};
			font-size: 12px;
			padding: 12px 25px;
			font-weight: 600;
			color: ${theme.colors.blueViolet};
		}

		h6 {
			display: flex;
			align-items: center;
			position: relative;
			font-family: ${theme.font.family2};
			bottom: 27px;
			left: 60px;
			opacity: 0.6;
			font-size: 10px;
			font-weight: 500;
			font-style: normal;
			line-height: 1.6;
			letter-spacing: 1.5px;
			color: ${theme.colors.black87};
		}
	`}
`;
