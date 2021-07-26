<template>
	
	<Column>
		<Group>
			<Icon :class="'icon_blue'" bookmark_name="Facebook"/>
			<Icon :class="'icon_blue'" bookmark_name="Instagram"/>
			<Icon :class="'icon_blue'" bookmark_name="Youtube"/>
			<Icon :class="'icon_blue'" bookmark_name="Reddit"/>
		</Group>

		<Group>
			<Icon :class="'icon_blue'" bookmark_name="Font Awesome"/>
			<Icon :class="'icon_blue'" bookmark_name="Flaticon"/>
			<Icon :class="'icon_blue'" bookmark_name="Coolors"/>
			<Icon :class="'icon_blue'" bookmark_name="Unsplash"/>
		</Group>

		<Group>
			<Icon :class="'icon_blue'" bookmark_name="Color Contrast"/>
			<Icon :class="'icon_blue'" bookmark_name="Color Wheel"/>
			<Icon :class="'icon_blue'" bookmark_name="Color Converter"/>
			<Icon :class="'icon_blue'" bookmark_name="Color Gradient"/>
		</Group>
	</Column>

	<Column>

		<Group>
			<Icon :class="'icon_green'" bookmark_name="Mastodon"/>
			<Icon :class="'icon_green'" bookmark_name="IMDB"/>
			<Icon :class="'icon_green'" bookmark_name="Github"/>
			<Icon :class="'icon_green'" bookmark_name="Dribbble"/>
		</Group>

		<Group>
			<Icon :class="'icon_green'" bookmark_name="CSS Tricks"/>
			<Icon :class="'icon_green'" bookmark_name="FreeCodeCamp"/>
			<Icon :class="'icon_green'" bookmark_name="MDN Docs"/>
			<Icon :class="'icon_green'" bookmark_name="W3Schools"/>
		</Group>

		<Group>
			<Icon :class="'icon_green'" bookmark_name="Box Shadow"/>
			<Icon :class="'icon_green'" bookmark_name="Google Fonts"/>
			<Icon :class="'icon_green'" bookmark_name="Vue Docs"/>
			<Icon :class="'icon_green'" bookmark_name="Vue Localhost"/>
		</Group>

	</Column>

	<Column>

		<Group>
			<Icon :class="'icon_yellow'" bookmark_name="Arch Linux"/>
			<Icon :class="'icon_yellow'" bookmark_name="The Pirate Bay"/>
			<Icon :class="'icon_yellow'" bookmark_name="Learn X in Y"/>
			<Icon :class="'icon_yellow'" bookmark_name="Lib. Gen."/>
		</Group>

		<Group>
			<Icon :class="'icon_yellow'" bookmark_name="Sort Strings"/>
			<Icon :class="'icon_yellow'" bookmark_name="Find Duplicates"/>
			<Icon :class="'icon_yellow'" bookmark_name="Proton Mail"/>
			<Icon :class="'icon_yellow'" bookmark_name="Google Mail"/>
		</Group>

		<Group>
			<Icon :class="'icon_yellow'" bookmark_name="Apple Interface"/>
			<Icon :class="'icon_yellow'" bookmark_name="Steam"/>
			<Icon :class="'icon_yellow'" bookmark_name="Lichess"/>
			<Icon :class="'icon_yellow'" bookmark_name="Recipes"/>
		</Group>

	</Column>

	<Column>

		<Group>
			<Icon :class="'icon_red'" bookmark_name="Google Drive"/>
			<Icon :class="'icon_red'" bookmark_name="Mega Drive"/>
			<Icon :class="'icon_red'" bookmark_name="Wikipedia"/>
			<Icon :class="'icon_red'" bookmark_name="Akademija"/>
		</Group>

		<Group>
			<Icon :class="'icon_red'" bookmark_name="Filter Music"/>
			<Icon :class="'icon_red'" bookmark_name="Deezer"/>
			<Icon :class="'icon_red'" bookmark_name="Twitch TV"/>
			<Icon :class="'icon_red'" bookmark_name="Wired News"/>
		</Group>

		<Group>
			<Icon :class="'icon_red'" bookmark_name="Skriptarnica"/>
			<Icon :class="'icon_red'" bookmark_name="E-Indeks"/>
			<Icon :class="'icon_red'" bookmark_name="JS Cheatsheet"/>
			<Icon :class="'icon_red'" bookmark_name="Svetosavlje"/>
		</Group>

	</Column>

</template>

<script>

	import Icon from './components/Icon.vue'
	import Group from './components/Group.vue'
	import Column from './components/Column.vue'

	export default
	{
		name: 'App',
		components:
		{
			Icon,
			Group,
			Column
		}
	}

</script>

<style lang="scss">

	@import "../src/config/normalize.css";
	@import "../src/config/main.css";

	#app
	{
		@font-face
		{
			font-family: "Montserrat";
			src: url("../src/config/Montserrat/Montserrat-Regular.ttf");
			font-weight: normal;
			font-style: normal;
		}

		display: flex;
		flex-wrap: wrap;
		flex-direction: row;

		align-items: center;
		align-self: center;
		align-content: center;
		justify-content: center;

		//padding-bottom: 0.4rem;

		font-size: 16px;
		font-family: 'Montserrat', sans-serif;

		background-color: #000000;

		background: rgb(0,0,0);
		background: linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(64,64,64,1) 100%);
	}

</style>
