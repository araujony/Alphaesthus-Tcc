document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const itemList = document.getElementById('itemList');
    const items = itemList.getElementsByTagName('li');
  
    searchInput.addEventListener('input', function () {
      const searchTerm = searchInput.value.toLowerCase();
  
      for (const item of items) {
        const itemText = item.textContent.toLowerCase();
  
        if (itemText.includes(searchTerm)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    });
  })