import styled, { css } from 'styled-components';

export const Wrapper = styled.footer`
	${({ theme }) => css`
		font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
			'Helvetica Neue', sans-serif;
		width: 191px;
		height: 22px;
		/* margin: 16px 942px 0 0; */
		font-size: 14px;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.57;
		letter-spacing: normal;
		color: ${theme.colors.brownishGreyTwo};

		display: inline;
		margin-left: 200px;
		margin-top: 9.5rem;
		position: static;
	`}
`;
