<script lang="ts" >
    import wretch from 'wretch'

    let name: string;

    const load = async()=>{
        alert(name)
        await wretch('/api/user/login')
        .post({
            name: name
        })
        .json()
    }
</script>


<h1>home page</h1>

<label for="name">name</label>
<input type="text" bind:value={name}>
<button on:click={load}>click here!</button>