<template>
	
	<div class="group disable_select">
		<slot></slot>
	</div>

</template>

<script>

	export default
	{
		name: "Group"
	}

</script>

<style lang="scss">

	.group
	{
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;

		align-items: center;
		align-self: center;
		align-content: center;
		justify-content: center;

		width: 100%;

		padding: 1rem 0 1rem 0;
	}

	.disable_select
	{
		-webkit-user-select: none;  
		-moz-user-select: none;    
		-ms-user-select: none;      
		user-select: none;
	}

	@media (min-width: 768px) and (max-width: 1023px)
	{
		.group
		{
			width: 50%;
		}
	}

	@media (min-width: 1024px)
	{
		.group
		{
			width: 15%;
		}
	}

</style>
