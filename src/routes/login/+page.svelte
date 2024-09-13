<script lang="ts">
    import { onMount } from "svelte";
    import wretch from "wretch";

    let name: string;
    let password: string;
    let error: string = "";
    const load = async () => {
        const res = await wretch("/api/user/login")
            .post({
                name: name,
                password: password,
            })
            .json();

           fetchUser(); 
    };

    interface user {
        username: string;
        password: string;
    }
    let dataUser: user[] = [];
    const fetchUser = async () => {
        const response: user[] = await wretch("/api/user/read").get().json();
        dataUser = response;
        console.log(dataUser);
    };

    onMount(() => {
        fetchUser();
    });
</script>

<h1>home page</h1>
<div class=" flex w-full h-screen justify-between items-center">
    <div class="flex w-full justify-center">
        <div
            class="flex flex-col w-[300px] p-4 gap-4 shadow-slate-800 shadow-md"
        >
            <label for="name">Name</label>
            <input
                type="text"
                class="border-2 rounded-md pl-2"
                bind:value={name}
            />
            <label for="name">Password</label>
            <input
                type="password"
                class="border-2 rounded-md pl-2"
                bind:value={password}
            />

            <p class="text-center text-red-400">{error}</p>
            <button on:click={load} class="border">click here!</button>
        </div>
    </div>
    <div class="flex w-full h-full border-l">
        <div class="flex w-full justify-center">
            <div
                class="flex flex-col w-[300px] p-4 gap-4 shadow-slate-800 shadow-md"
            >
                {#each dataUser as data}
                    <div class="border-b">
                        <p><strong>Username: </strong> {data.username}</p>
                        <p><strong>Password: </strong>{data.password}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
