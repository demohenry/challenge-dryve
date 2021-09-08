import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		padding: 2px 0 0 0;

		border: solid 2px ${theme.colors.white};
	`}

	img {
		${({ theme }) => css`
			width: 80px;
			height: 60px;
			margin: 10px 10px 20px 20px;
			border-radius: 4px;
			border: solid 1px ${theme.colors.white};
		`}
	}
`;

export const Data = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 9px;

	.title {
		${({ theme }) => css`
			white-space: nowrap;
			width: 94px;
			height: 16px;
			margin: 0 223px 0 10px;
			font-family: ${theme.font.family2};
			font-size: 12px;
			font-weight: bold;
			font-stretch: normal;
			font-style: normal;
			line-height: 1.33;
			letter-spacing: normal;
			color: ${theme.colors.darkBlueGrey};
		`}
	}

	.code {
		${({ theme }) => css`
			width: 46px;
			height: 10px;
			margin: 4px 271px 4px 10px;
			font-family: ${theme.font.family2};
			font-size: 10px;
			font-weight: normal;
			font-stretch: normal;
			font-style: normal;
			line-height: 1;
			letter-spacing: 0.33px;
			color: ${theme.colors.steel};
		`}
	}

	.yearType {
		${({ theme }) => css`
			width: 72px;
			height: 10px;
			margin: 2px 245px 3px 10px;
			font-family: ${theme.font.family2};
			font-size: 10px;
			font-weight: normal;
			font-stretch: normal;
			font-style: normal;
			line-height: 1;
			letter-spacing: 0.33px;
			color: ${theme.colors.steel};
		`}
	}

	.gearbox {
		${({ theme }) => css`
			width: 135px;
			height: 10px;
			margin: 3px 182px 15px 10px;
			font-family: ${theme.font.family2};
			font-size: 10px;
			font-weight: normal;
			font-stretch: normal;
			font-style: normal;
			line-height: 1;
			letter-spacing: 0.33px;
			color: ${theme.colors.steel};
		`}
	}
`;

export const Price = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2px 102px 4px 35px;
	padding-top: 8px;

	.ad {
		${({ theme }) => css`
			width: 50px;
			height: 10px;
			padding-bottom: 15px;
			/* margin: 2px 102px 4px 182px; */
			font-family: ${theme.font.family2};
			font-size: 10px;
			font-weight: normal;
			font-stretch: normal;
			font-style: normal;
			line-height: 1;
			letter-spacing: 0.33px;
			color: ${theme.colors.steel};
		`}
	}

	.currency {
		${({ theme }) => css`
			width: 66px;
			height: 12px;
			padding-bottom: 15px;

			/* margin: 4px 86px 6px 182px; */
			font-family: ${theme.font.family2};
			font-size: 12px;
			font-weight: bold;
			font-stretch: normal;
			font-style: normal;
			line-height: 1;
			letter-spacing: normal;
			color: ${theme.colors.darkBlueGrey};
		`}
	}
	.min-ad {
		${({ theme }) => css`
			width: 82px;
			height: 10px;
			padding-bottom: 15px;
			white-space: nowrap;

			/* margin: 1px 70px 0 182px; */
			font-family: ${theme.font.family2};
			font-size: 10px;
			font-weight: normal;
			font-stretch: normal;
			font-style: normal;
			line-height: 1;
			letter-spacing: 0.33px;
			color: ${theme.colors.steel};
		`}
	}
	.min-accepted {
		width: 63px;
		height: 12px;
		padding-top: 2px;
		white-space: nowrap;
		/* margin: 3px 89px 20px 182px; */
		font-family: Inter;
		font-size: 12px;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: 1;
		letter-spacing: normal;
		color: #a5abb7;
	}
`;

export const Status = styled.div`
	display: flex;
	flex-direction: column;

	.waiting-price {
		${({ theme }) => css`
			white-space: nowrap;
			width: 176px;
			height: 26px;
			margin: 18px 0px 10px -10px;
			font-family: ${theme.font.family2};
			font-size: 12px;
			font-weight: normal;
			font-stretch: normal;
			font-style: normal;
			line-height: 1;
			letter-spacing: normal;
			text-align: center;
			color: ${theme.colors.steel};
			background: #e1e9f5;
			border-radius: 13px;
			padding: 7px 0px 1px 0px;
		`}
	}

	.date-time {
		${({ theme }) => css`
			width: 108px;
			height: 14px;
			margin: 0px 73px 22px 25px;
			font-family: ${theme.font.family2};
			font-size: 11px;
			font-weight: normal;
			font-stretch: normal;
			font-style: normal;
			line-height: normal;
			letter-spacing: normal;
			text-align: center;
			color: #a5abb7;
		`}
	}
`;
