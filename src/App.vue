<template>
	
	<Group>
		<Icon :class="'icon_red'" bookmark_name="Facebook"/>
		<Icon :class="'icon_red'" bookmark_name="Instagram"/>
		<Icon :class="'icon_red'" bookmark_name="Youtube"/>
		<Icon :class="'icon_red'" bookmark_name="Reddit"/>
	</Group>

	<Group>
		<Icon :class="'icon_purple'" bookmark_name="Mastodon"/>
		<Icon :class="'icon_purple'" bookmark_name="IMDB"/>
		<Icon :class="'icon_purple'" bookmark_name="Github"/>
		<Icon :class="'icon_purple'" bookmark_name="Dribbble"/>
	</Group>

	<Group>
		<Icon :class="'icon_blue'" bookmark_name="Arch Linux"/>
		<Icon :class="'icon_blue'" bookmark_name="The Pirate Bay"/>
		<Icon :class="'icon_blue'" bookmark_name="Learn X in Y"/>
		<Icon :class="'icon_blue'" bookmark_name="Lib. Gen."/>
	</Group>

	<Group>
		<Icon :class="'icon_green'" bookmark_name="Google Drive"/>
		<Icon :class="'icon_green'" bookmark_name="Mega Drive"/>
		<Icon :class="'icon_green'" bookmark_name="Wikipedia"/>
		<Icon :class="'icon_green'" bookmark_name="Akademija"/>
	</Group>

	<Group>
		<Icon :class="'icon_yellow'" bookmark_name="Font Awesome"/>
		<Icon :class="'icon_yellow'" bookmark_name="Flaticon"/>
		<Icon :class="'icon_yellow'" bookmark_name="Coolors"/>
		<Icon :class="'icon_yellow'" bookmark_name="Unsplash"/>
	</Group>

	<Group>
		<Icon :class="'icon_orange'" bookmark_name="CSS Tricks"/>
		<Icon :class="'icon_orange'" bookmark_name="FreeCodeCamp"/>
		<Icon :class="'icon_orange'" bookmark_name="MDN Docs"/>
		<Icon :class="'icon_orange'" bookmark_name="W3Schools"/>
	</Group>

	<Group>
		<Icon :class="'icon_red'" bookmark_name="Sort Strings"/>
		<Icon :class="'icon_red'" bookmark_name="Find Duplicates"/>
		<Icon :class="'icon_red'" bookmark_name="Proton Mail"/>
		<Icon :class="'icon_red'" bookmark_name="Google Mail"/>
	</Group>

	<Group>
		<Icon :class="'icon_purple'" bookmark_name="Filter Music"/>
		<Icon :class="'icon_purple'" bookmark_name="Deezer"/>
		<Icon :class="'icon_purple'" bookmark_name="Twitch TV"/>
		<Icon :class="'icon_purple'" bookmark_name="Wired News"/>
	</Group>

	<Group>
		<Icon :class="'icon_blue'" bookmark_name="Color Contrast"/>
		<Icon :class="'icon_blue'" bookmark_name="Color Wheel"/>
		<Icon :class="'icon_blue'" bookmark_name="Color Converter"/>
		<Icon :class="'icon_blue'" bookmark_name="Color Gradient"/>
	</Group>

	<Group>
		<Icon :class="'icon_green'" bookmark_name="Box Shadow"/>
		<Icon :class="'icon_green'" bookmark_name="Google Fonts"/>
		<Icon :class="'icon_green'" bookmark_name="Vue Docs"/>
		<Icon :class="'icon_green'" bookmark_name="Vue Localhost"/>
	</Group>

	<Group>
		<Icon :class="'icon_yellow'" bookmark_name="Apple Interface"/>
		<Icon :class="'icon_yellow'" bookmark_name="Steam"/>
		<Icon :class="'icon_yellow'" bookmark_name="Lichess"/>
		<Icon :class="'icon_yellow'" bookmark_name="Recipes"/>
	</Group>

	<Group>
		<Icon :class="'icon_orange'" bookmark_name="Skriptarnica"/>
		<Icon :class="'icon_orange'" bookmark_name="E-Indeks"/>
		<Icon :class="'icon_orange'" bookmark_name="JS Cheatsheet"/>
		<Icon :class="'icon_orange'" bookmark_name="Svetosavlje"/>
	</Group>

</template>

<script>

	import Icon from './components/Icon.vue'
	import Group from './components/Group.vue'

	export default
	{
		name: 'App',
		components:
		{
			Icon,
			Group
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
		justify-content: space-evenly;

		font-size: 16px;
		font-family: 'Montserrat', sans-serif;

		background-color: #000000;
	}

</style>
