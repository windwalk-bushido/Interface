<template>
	
	<div class="">
		<slot>

		</slot>
	</div>

</template>

<script>

	export default
	{
		name: "Group"
	}

</script>

<style lang="scss">

	.group,
	.column
	{
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;

		align-items: center;
		align-self: center;
		align-content: center;
		justify-content: center;

		min-width: 320px;
		width: 100%;
		max-width: 700px;
	}

	.column
	{
		padding: 1rem 2rem 1rem 2rem;
	}

</style>
