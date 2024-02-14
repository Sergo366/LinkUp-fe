import { styled } from 'styled-components';
export const ComponentWrapper = styled.div`
	display: grid;
	width: 100%;
	grid-template-areas:
    "head head"
    "nav  main"
    "nav  main";
	grid-template-columns: 200px 1fr;
	grid-template-rows: 70px calc(100vh - 70px);

	& > header {
		grid-area: head;
		background-color: #8ca0ff;
	}

	& > nav {
		grid-area: nav;
		background-color: #ffa08c;
	}

	& > div {
		grid-area: main;
		background-color: aqua;
	}
`
