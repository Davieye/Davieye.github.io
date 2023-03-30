<script>
    let newItem = '';
	
    let todoList = [];
	
	function addToList() {
		todoList = [...todoList, {text: newItem, status: false}];
		newItem = '';
	}
	
	function removeFromList(index) {
		todoList.splice(index, 1)
		todoList = todoList;
    }
</script>
<div class="midClass">
	<h1> Att göra lista</h1>
	<input bind:value={newItem} type="text" placeholder="Ny grej att göra..">
	<button on:click={addToList}>Lägg till </button>
	
	<br/>
	{#each todoList as item, index}
		<input bind:checked={item.status} type="checkbox">
		<span class:checked={item.status}>{item.text}</span>
		<span on:click={() => removeFromList(index)}>❌</span>
		<br/>
	{/each} 
</div>



<style> 
.midClass{
	margin-left: auto;
	margin-right: auto;
	text-align: center;
}
	.checked {
        text-decoration: line-through;
    }
	

    
</style> 

