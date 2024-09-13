<script lang="ts">
  import wretch from "wretch";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  interface dataUser {
    Fname: string;
    password: string;
  }
  let courses = <dataUser[]>([]);

  const auth = async () => {
    const authName = localStorage.getItem("auth");

    if (authName != null) {
      try {
        const response = await wretch("/api/user/auth")
          .post({ name: authName })
          .json<dataUser[]>();
          courses = response
        console.log(courses); // Log the result
      } catch (error) {
        console.error("Error during authentication:", error);
      }
    } else {
      window.location.pathname = "/login";
    }
  };

  // Run authentication on component mount
  onMount(() => {
    auth();
  });
</script>

<h1>Authenticated Data</h1>
<p>{courses.Fname}</p>
<p>{courses.password}</p>

