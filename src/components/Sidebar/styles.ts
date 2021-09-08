import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export type SidebarProps = {
	isOpen: boolean;
};

export const Avatar = styled.div`
	${({ theme }) => css`
		width: 2px;
		height: 80px;

		span {
			display: flex;
			position: absolute;
			align-items: flex-end;
			justify-content: center;
			margin: 0 0 0 65px;
			top: 50px;

			font-family: ${theme.font.family2};
			font-weight: ${theme.font.bold};
			font-size: 14px;
		}

		img {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 3px;
			margin: 50px 8px 20px -25px;
			border: #0065ff 3px solid;
			border-radius: 100%;
			width: 6rem;
			height: 6rem;
		}

		svg {
			display: flex;
			position: relative;
			opacity: 0.3;
			width: 13px;
			bottom: 63px;
			margin: 5px 2px 0 60px;
		}

		button {
			display: flex;
			position: relative;
			bottom: 80px;
			width: 29px;
			height: 10px;
			border: none;
			margin: 5px 2px 0 75px;
			opacity: 0.5;
			font-family: Inter;
			font-size: 10px;
			font-weight: 500;
			letter-spacing: 1.5px;
			cursor: pointer;
		}
	`}
`;

export const Wrapper = styled.div`
	${({ theme }) => css`
		width: ${({ isOpen }: SidebarProps) => (!isOpen ? '80px' : '250px')};
		min-width: 80px;
		height: 150vh;
		background: ${theme.colors.whiteTwo};
		position: absolute;
		padding: 0 35px;
		border: #a5abb7 1px solid;

		transition: all 0.2s;

		ul {
			padding: 0;
		}

		ul li {
			list-style-type: none;
		}

		a {
			color: ${theme.colors.brigthBlue};
			font-family: ${theme.font.family2};
			font-weight: ${theme.font.bold};
			font-size: 14px;
			line-height: 1.14;
			text-decoration: none;
			display: flex;
			position: relative;
			bottom: 140px;
			margin: 0px 0 20px 35px;

			padding: 11px 10px 10px 10px;
			border-radius: 4px;
		}

		a:hover,
		a:active {
			background: ${theme.colors.iceBlue};
		}
	`}
`;

export const IconWrapper = styled.div`
	${({ theme }) => css`
		position: relative;
		width: 2.5rem;
		height: 1.7rem;
		cursor: pointer;
		margin: 40px 5px 5px -5px;
		color: ${theme.colors.brigthBlue};
	`}
`;
