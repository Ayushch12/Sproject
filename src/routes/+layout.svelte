<header class="layout-header">Header</header>

<!-- In Svelte, the <slot> element is used to create a slot that can be filled with content when
    the component is used. It allows you to pass content from the
     parent component to the child component. -->
<slot />

<footer class="layout-footer">Footer</footer>

<style>
    .layout-header{
        background-color:  #264653;
        color: #f4a261;
        font-size: 30px;
        text-align: center;
        padding: 10px;
    }

    .layout-footer{
        background-color: #264653;
        color: #f4a261;
        font-size: 30px;
        text-align: center;
        padding: 10px;

    }


</style>



