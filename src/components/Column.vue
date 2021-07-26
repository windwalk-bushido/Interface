<template>
	
	<div class="column">
		<slot>

		</slot>
	</div>

</template>

<script>

	export default
	{
		name: "Column"
	}

</script>

<style lang="scss">

	.column
	{
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;

		align-items: center;
		align-self: center;
		align-content: center;
		justify-content: center;

		width: 100%;
	}

	@media (min-width: 768px) and (max-width: 1023px)
	{
		.column
		{
			width: 50%;
		}
	}

	@media (min-width: 1024px)
	{
		.column
		{
			width: 400px;
		}
	}

</style>
