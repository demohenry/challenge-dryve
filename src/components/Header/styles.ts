import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.header`
	${({ theme }) => css`
		background: ${theme.colors.whiteTwo};
		display: flex;
		margin-left: 70px;
		width: 120vw;
		height: 7rem;
		justify-content: space-between;

		border: #a5abb7 1px solid;

		img {
			padding: 2.1rem 0.2rem 1.5rem 4rem;
			cursor: pointer;
		}

		p {
			display: flex;
			align-items: center;
			color: #a5abb7;
			margin: -38px 0px 0px 148px;

			font-size: 10px;
			font-weight: 700;
			line-height: 1;
			font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
				'Helvetica Neue', sans-serif;
		}

		${media.lessThan('medium')`
			display: flex;
			width: 500px;

		`}
	`}
`;

export const SearchIcon = styled.div`
	${({ theme }) => css`
		display: flex;
		height: 25px;
		cursor: pointer;
		margin: 16px 24px 0 27px;
		padding: 1px;
		color: ${theme.colors.brigthBlue};

		> svg {
			padding-right: 18px;
		}
	`}
`;
