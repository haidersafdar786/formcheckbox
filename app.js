<script>
  document.addEventListener("DOMContentLoaded", function () {
    const interval = setInterval(() => {
      const checkbox = document.querySelector('input[type="checkbox"]');
      if (checkbox) {
        checkbox.checked = true;
        checkbox.dispatchEvent(new Event("change"));
        clearInterval(interval);
      }
    }, 500);
  });
</script>