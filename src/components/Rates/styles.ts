import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 877px;
	height: 640px;
	margin: 30px 20px 60px 210px;
	padding: 18px 0 7px;
	border-radius: 4px;
	border: solid 1px rgba(0, 0, 0, 0.12);

	.rateUpdate {
		${({ theme }) => css`
			margin: 0 281px 20px 20px;
			font-family: ${theme.font.family2};
			font-size: 14px;
			font-weight: 650;
			font-stretch: normal;
			font-style: normal;
			line-height: 1.71;
			letter-spacing: 0.1px;
			color: ${theme.colors.black87};
		`}
	}
	.open-all {
		${({ theme }) => css`
			white-space: nowrap;
			display: flex;
			align-self: flex-end;
			width: 58px;
			height: 24px;
			margin: 10px 40px 0 0px;
			font-family: ${theme.font.family2};
			font-size: 14px;
			font-weight: 600;
			font-stretch: normal;
			font-style: normal;
			line-height: 1.71;
			letter-spacing: 0.1px;
			text-align: right;
			color: ${theme.colors.brigthBlue};
			cursor: pointer;

			&:hover {
				text-decoration: underline;
			}
		`}
	}
`;

export const DataWrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		white-space: nowrap;
	`}

	.vehicleData {
		${({ theme }) => css`
			width: 123px;
			height: 16px;
			margin: 20px 50px 19px 20px;
			opacity: 0.5;
			font-family: ${theme.font.family2};
			font-size: 10px;
			font-weight: 500;
			font-stretch: normal;
			font-style: normal;
			line-height: 1.6;
			letter-spacing: 1.5px;
			color: ${theme.colors.black87};
		`}
	}

	.price {
		${({ theme }) => css`
			width: 41px;
			height: 16px;
			margin: 20px 50px 19px 281px;
			opacity: 0.5;
			font-family: ${theme.font.family2};
			font-size: 10px;
			font-weight: 500;
			font-stretch: normal;
			font-style: normal;
			line-height: 1.6;
			letter-spacing: 1.5px;
			color: ${theme.colors.black87};
		`}
	}

	.status {
		${({ theme }) => css`
			width: 48px;
			height: 16px;
			margin: 20px 66px 19px 110px;
			opacity: 0.5;
			font-family: ${theme.font.family2};
			font-size: 10px;
			font-weight: 500;
			font-stretch: normal;
			font-style: normal;
			line-height: 1.6;
			letter-spacing: 1.5px;
			color: ${theme.colors.black87};
		`}
	}
`;
