document.addEventListener("DOMContentLoaded", function () {
  // Open chat in new tab
  const checkbox = document.getElementById("openInNewTab");
  checkbox.checked = JSON.parse(localStorage.getItem("openInNewTab")) || false;

  function updateCheckboxState() {
    localStorage.setItem("openInNewTab", checkbox.checked);
  }
  checkbox.addEventListener("change", updateCheckboxState);


  let listItems = document.querySelectorAll("li");
  listItems.forEach((li) => {
    li.addEventListener("click", function () {
      let website = this.getAttribute("data-website");

      if (checkbox.checked) {
    browser.tabs.create({url: website});
 } else {
    browser.sidebarAction.open();
    browser.sidebarAction.setPanel({panel: website});
    // Измените положение панели на справа
    let sidebar = document.getElementById('sidebar'); // Предполагается, что у вас есть элемент с id 'sidebar'
    if (sidebar) {
      sidebar.style.right = '0';
      sidebar.style.left = 'auto'; // Удалите или сбросьте значение left
    }
 }
});
  });

 
});

