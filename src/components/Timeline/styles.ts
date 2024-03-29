import styled from 'styled-components';

export const WrapTimeLine = styled.div`
	display: flex;
	flex-direction: column;
	align-self: flex-start;
	align-items: center;
	height: 80%;
	position: absolute;

	& > span:nth-of-type(2) {
		margin-top: 22.5rem;
	}

	& > span:nth-of-type(3) {
		margin-top: 28.5rem;
	}

	// -------- Mobile ----------------
	@media screen and (max-width: 767px) {
		& > span:nth-of-type(2) {
			margin-top: 25rem;
		}

		& > span:nth-of-type(3) {
			margin-top: 31rem;
		}
	}

	// -------- Tablet ----------------
	@media screen and (min-width: 767px) and (max-width: 1023px) {
		& > span:nth-of-type(2) {
			margin-top: 24rem;
		}

		& > span:nth-of-type(3) {
			margin-top: 30.8rem;
		}
	}
`;

export const WrapCircle = styled.span<{ rotate: number; scale: number }>`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	margin-bottom: 20px;

	/* border: solid 1px #fff; */
	width: 75px;
	height: 75px;

	& > div:first-child {
		display: flex;
		position: absolute;

		transform: rotate(${(props) => `${props.rotate}deg`})
			scale(${(props) => props.scale}); //<<<<
		/* transition: all 600ms cubic-bezier(0.18, 0.89, 0.32, 1.28); */
		transition: var(--slow-animate);

		top: 0;
		width: 70px;
		height: 70px;
		border-radius: 50%;
		border: 5px solid var(--primary-color);
		border-bottom-color: transparent;
	}

	& > div:last-child {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		bottom: 5px;
		height: 60px;
		width: 60px;
		border-radius: 50%;
		background-color: var(--primary-color);

		transition: var(--slow-animate);
		transform: scale(${(props) => props.scale}); // <<<<<;

		h1 {
			font-size: 1.3rem;
			color: var(--light-color);
		}
	}

	// -------- Mobile ----------------
	@media screen and (max-width: 767px) {
	}
`;

export const WrapLine = styled.div<{ height: number }>`
	display: flex;
	position: absolute;
	transition: all 1s cubic-bezier(0.18, 0.89, 0.32, 1.28);

	height: ${(props) => `${props.height}%`};
	width: 7px;
	background: linear-gradient(262deg, #f5f5f5 0%, #656565);
`;
