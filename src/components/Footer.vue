<template>
	
	<div class="footer">
		<p>2021.</p>

		<div class="buttons">
			<a href="https://github.com/windwalk-bushido/Interface">Repository</a>
			<a href="#">My website</a>
		</div>
	</div>

</template>

<script>

	export default
	{
		name: "Footer"
	}

</script>

<style lang="scss">

	.footer
	{
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;

		align-items: center;
		align-self: center;
		align-content: center;
		justify-content: center;

		bottom: 0;
		left: 0;
		
		width: 100%;

		margin-bottom: 2rem;

		font-weight: bold;

		z-index: 2;

		p
		{
			margin: 0.5rem 0 0.5rem 0;
		}

		.buttons
		{
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;

			align-items: center;
			align-self: center;
			align-content: center;
			justify-content: center;
			
			width: 100%;

			a
			{
				padding: 0.75rem;
				margin: 0 0.5rem 0 0.5rem;

				border-radius: 1.5rem;

				text-decoration: none;

				color: #FFFFFF;
				background: rgb(26, 26, 26);

				box-shadow: 0px 8px 4px -1px rgb(0, 0, 0);
				transition: all 100ms;
			}

			a:hover
			{
				background: rgb(0, 0, 0);
				background: linear-gradient(315deg, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 100%);

				box-shadow: 0 8px 32px 0 rgb(0, 0, 0);
				transition: all 100ms;
			}

			a:active
			{
				background: rgb(0, 0, 0);
				background: linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 100%);

				box-shadow: 0 4px 16px 0 rgb(0, 0, 0);
				transition: all 100ms;
			}
		}
	}

</style>
