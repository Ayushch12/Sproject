<script>

    import { afterNavigate, beforeNavigate, goto } from "$app/navigation";

    const handleClick = () =>{
        console.log("Placing your order");
        goto("/products", {replaceState:true});
    };


    beforeNavigate((navigation)=>{
        console.log({before: navigation})
    });
    afterNavigate((navigation)=>{
        console.log({after: navigation})
    });
</script>


<h1>Hey my world</h1>

<a href="/blog">Blog</a>
<a href="/products">Product</a>

<button on:click={handleClick}>Place order</button>