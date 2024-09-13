<script lang="ts">
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
            .badRequest((e) => {
                // toast(JSON.parse(e.message).message, "");
                error = JSON.parse(e.message).message;
            })
            .notFound(async (e) => {
                // toast(JSON.parse(e.message).message, "");
                error = JSON.parse(e.message).message;
            })
            .res((e) => {
                localStorage.setItem("auth", name);
                window.location.pathname = "home";
            });
    };
</script>

<h1>home page</h1>
<div class=" flex w-full h-screen justify-center items-center flex-col border">
    <div class="w-[300px] flex flex-col p-4 gap-4 shadow-slate-800 shadow-md">
        <label for="name">Name</label>
        <input type="text" class="border-2 rounded-md pl-2" bind:value={name} />
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
