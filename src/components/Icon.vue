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
		text-shadow: 4px 4px 4px #000000;
		
		background: rgb(26, 26, 26);
		color: #FFFFFF;

		transition: all 150ms;
	}

	.icon_red:hover,
	.icon_green:hover,
	.icon_blue:hover,
	.icon_yellow:hover
	{
		transition: all 150ms;
	}

	.icon_red
	{
		box-shadow: 0px 8px 4px -1px rgb(137, 41, 49);
	}

	.icon_red:hover
	{
		background: rgb(196, 59, 70);
		background: linear-gradient(135deg, rgba(196, 59, 70, 1) 0%, rgba(78, 24, 28, 1) 100%);

		box-shadow: 0 8px 32px 0 rgb(137, 41, 49);
	}

	.icon_green
	{
		box-shadow: 0px 8px 4px -1px rgba(46, 132, 74, 1);
	}

	.icon_green:hover
	{
		background: rgb(66, 189, 106);
		background: linear-gradient(135deg, rgba(66, 189, 106, 1) 0%, rgba(26, 76, 42, 1) 100%);

		box-shadow: 0 8px 32px 0 rgba(46, 132, 74, 1);
	}

	.icon_blue
	{
		box-shadow: 0px 8px 4px -1px rgb(31, 84, 148);
	}

	.icon_blue:hover
	{
		background: rgb(44, 120, 211);
		background: linear-gradient(135deg, rgba(44, 120, 211, 1) 0%, rgba(18, 48, 84, 1) 100%);

		box-shadow: 0 8px 32px 0 rgb(31, 84, 148);
	}

	.icon_yellow
	{
		box-shadow: 0px 8px 4px -1px rgb(176, 117, 3);
	}

	.icon_yellow:hover
	{
		background: rgb(251, 167, 4);
		background: linear-gradient(135deg, rgba(251, 167, 4, 1) 0%, rgba(100, 67, 2, 1) 100%);

		box-shadow: 0 8px 32px 0 rgb(176, 117, 3);
	}

	@media (min-width: 1024px)
	{
		.default_icon
		{
			$size: 6rem;

			width: $size;
			height: $size;
		}
	}

</style>
