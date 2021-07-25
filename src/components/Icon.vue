<template>
	
	<a href="" class="default_icon">
		<slot>
			{{ bookmark_name }}
		</slot>
	</a>

</template>

<script>

	export default
	{
		name: "Icon",
		props: 
		{
			bookmark_name: String
		}
	}

</script>

<style lang="scss">

	.default_icon
	{
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;

		align-items: center;
		align-self: center;
		align-content: center;
		justify-content: center;

		width: 100%;

		margin: 0.5rem 1rem 0.5rem 1rem;
		padding: 1rem;

		border-radius: 1.5rem;

		font-size: 2rem;
		font-weight: bold;
		text-decoration: none;
		
		background: rgb(26, 26, 26);
		color: #FFFFFF;

		transition: all 150ms;
	}

	.icon_red:hover,
	.icon_purple:hover,
	.icon_blue:hover,
	.icon_green:hover,
	.icon_yellow:hover,
	.icon_orange:hover
	{
		transition: all 150ms;
	}

	.icon_red
	{
		box-shadow: 0px 0px 32px 4px rgba(128, 26, 39, 1);
	}

	.icon_red:hover
	{
		background: rgb(170, 34, 52);
		background: linear-gradient(135deg, rgba(170, 34, 52, 1) 0%, rgba(85, 17, 26, 1) 100%);

		box-shadow: 0 8px 32px 0 rgba(128, 26, 39, 1);
	}

	.icon_purple
	{
		box-shadow: 0px 0px 32px 4px rgba(96,24,180, 1);
	}

	.icon_purple:hover
	{
		background: rgb(120, 30, 225);
		background: linear-gradient(135deg, rgba(120, 30, 225, 1) 0%, rgba(72, 18, 135, 1) 100%);

		box-shadow: 0 8px 32px 0 rgba(96,24,180, 1);
	}

	.icon_blue
	{
		box-shadow: 0px 0px 32px 4px rgba(0, 167, 204, 1);
	}

	.icon_blue:hover
	{
		background: rgb(0, 209, 255);
		background: linear-gradient(135deg, rgba(0, 209, 255, 1) 0%, rgba(0, 125, 153, 1) 100%);

		box-shadow: 0 8px 32px 0 rgba(0, 167, 204, 1);

		color: #000000;
	}

	.icon_green
	{
		box-shadow: 0px 0px 32px 4px rgba(60, 144, 105, 1);
	}

	.icon_green:hover
	{
		background: rgb(75, 180, 131);
		background: linear-gradient(135deg, rgba(75, 180, 131, 1) 0%, rgba(45, 108, 79, 1) 100%);

		box-shadow: 0 8px 32px 0 rgba(60, 144, 105, 1);

		color: #000000;
	}

	.icon_yellow
	{
		box-shadow: 0px 0px 32px 4px rgba(218, 158, 38, 1);
	}

	.icon_yellow:hover
	{
		background: rgb(243, 183, 63);
		background: linear-gradient(135deg, rgba(243, 183, 63, 1) 0%, rgba(192, 132, 12, 1) 100%);

		box-shadow: 0 8px 32px 0 rgba(218, 158, 38, 1);

		color: #000000;
	}

	.icon_orange
	{
		box-shadow: 0px 0px 32px 4px rgba(230, 64, 26, 1);
	}

	.icon_orange:hover
	{
		background: rgb(255, 89, 51);
		background: linear-gradient(135deg, rgba(255, 89, 51, 1) 0%, rgba(204, 38, 0, 1) 100%);

		box-shadow: 0 8px 32px 0 rgba(230, 64, 26, 1);
	}

	@media (min-width: 1024px)
	{
		.default_icon
		{
			$size: 8rem;

			width: $size;
			height: $size;
		}
	}

</style>
