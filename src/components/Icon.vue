<template>
	
	<a href="" class="default_icon">
		<slot>
			
		</slot>
	</a>

</template>

<script>

	export default
	{
		name: "Icon"
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

		$size: 8rem;
		width: $size;
		height: $size;

		margin: 0.5rem;

		border-radius: 1.5rem;

		font-size: 4rem;
		
		color: #FFFFFF;
		background: rgb(26, 26, 26);

		opacity: 0.75;
		transition: all 150ms;
	}

	.icon_red:hover,
	.icon_green:hover,
	.icon_blue:hover,
	.icon_yellow:hover,
	.icon_red:active,
	.icon_green:active,
	.icon_blue:active,
	.icon_yellow:active
	{
		opacity: 1;
		transition: all 150ms;
	}

	.icon_red
	{
		box-shadow: 0px 8px 4px -1px rgb(137, 41, 49);
	}

	.icon_red:hover
	{
		background: rgb(196, 59, 70);
		background: linear-gradient(135deg, rgb(196, 59, 70) 0%, rgb(78, 24, 28) 100%);

		box-shadow: 0 8px 32px 0 rgb(137, 41, 49);
	}

	.icon_red:active
	{
		background: linear-gradient(315deg, rgb(196, 59, 70) 0%, rgb(78, 24, 28) 100%);

		box-shadow: 0 4px 16px 0 rgb(137, 41, 49);
	}

	.icon_green
	{
		box-shadow: 0px 8px 4px -1px rgb(46, 132, 74);
	}

	.icon_green:hover
	{
		background: rgb(66, 189, 106);
		background: linear-gradient(135deg, rgb(66, 189, 106) 0%, rgb(26, 76, 42) 100%);

		box-shadow: 0 8px 32px 0 rgb(46, 132, 74);
	}

	.icon_green:active
	{
		background: linear-gradient(315deg, rgb(66, 189, 106) 0%, rgb(26, 76, 42) 100%);

		box-shadow: 0 4px 16px 0 rgb(46, 132, 74);
	}

	.icon_blue
	{
		box-shadow: 0px 8px 4px -1px rgb(31, 84, 148);
	}

	.icon_blue:hover
	{
		background: rgb(44, 120, 211);
		background: linear-gradient(135deg, rgb(44, 120, 211) 0%, rgb(18, 48, 84) 100%);

		box-shadow: 0 8px 32px 0 rgb(31, 84, 148);
	}

	.icon_blue:active
	{
		background: linear-gradient(315deg, rgb(44, 120, 211) 0%, rgb(18, 48, 84) 100%);

		box-shadow: 0 4px 16px 0 rgb(31, 84, 148);
	}

	.icon_yellow
	{
		box-shadow: 0px 8px 4px -1px rgb(176, 117, 3);
	}

	.icon_yellow:hover
	{
		background: rgb(251, 167, 4);
		background: linear-gradient(135deg, rgb(251, 167, 4) 0%, rgb(100, 67, 2) 100%);

		box-shadow: 0 8px 32px 0 rgb(176, 117, 3);
	}

	.icon_yellow:active
	{
		background: linear-gradient(315deg, rgb(251, 167, 4) 0%, rgb(100, 67, 2) 100%);

		box-shadow: 0 4px 16px 0 rgb(176, 117, 3);
	}

</style>
