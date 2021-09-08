import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
	${({ theme }) => css`
		width: 395px;
		height: 390px;
		display: flex;
		padding: 15px 0 0px 15px;
		background: ${theme.colors.whiteTwo};
		border-radius: 4px;
		border: solid 1px rgba(0, 0, 0, 0.12);

		.title {
			margin-bottom: 40px;
		}
	`}
`;

export const Content = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		font-family: ${theme.font.family2};
		flex-direction: column;
		font-size: 14px;
		font-weight: 600;
		font-stretch: normal;
		font-style: normal;
		margin: 0 175px 30px 0;
		line-height: 1.71;
		letter-spacing: 0.1px;
	`}
`;
