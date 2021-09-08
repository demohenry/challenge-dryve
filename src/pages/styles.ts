import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.main`
	${({ theme }) => css`
		background-color: ${theme.colors.paleGray};
		width: 110vw;
		height: 100vh;

		/* ${media.lessThan('medium')`
			max-width: 455px;

		`} */
	`}
`;
