<script>
  import { onMount } from "svelte";
  import Header from "./components/Header.svelte";
  import Main from "./components/Main.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import TimeLine from "./components/TimeLine.svelte";
  import { getPost } from "./services/post";

  let data = {};

  onMount(async () => {
    const response = await getPost();
    console.info(response);
    data = response;
  });
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Lato:300,400&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Pacifico&display=swap");

  :global(body) {
    background-color: #fafafa;
    color: rgba(38, 38, 38, 0.7);
    font-family: "Lato", sans-serif;
    margin: 0;
    padding: 0;
  }
  :global(h1, h2, h3) {
    margin: 0;
    padding: 0;
  }
</style>

<Header />
<Main>
  <TimeLine posts={data.posts} />
  <Sidebar {...data.user} />
</Main>
