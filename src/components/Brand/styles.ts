import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: flex-start;
		width: 30px;
		height: 75px;
		padding-bottom: 25px;
	`}

	img {
		width: 36px;
		height: 36px;
		margin: 0 14px 0 0;
		object-fit: contain;
		border-radius: 4px;
		border: solid 1px #fff;
	}

	.numSpan {
		margin-left: 22.5rem;
	}

`;
