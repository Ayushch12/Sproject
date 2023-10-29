<script>
      import Footer from "../lib/footer.svelte";
      import Header from "../lib/header.svelte";

  </script>

  <!-- In Svelte, the <slot> element is used to create a slot that can be filled with content when
      the component is used. It allows you to pass content from the
       parent component to the child component. -->
  <Header />
  <slot />
  <Footer />
