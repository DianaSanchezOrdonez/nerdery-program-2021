const tabs = document.querySelector(".tabs");
const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(document.querySelectorAll('[role="tabPanel"]'));
const tabList = document.querySelectorAll('[role="tabList"] button');

function handlerTabClicked(e) {
    //console.log(e.currentTarget.id);
    //1.  hide all tab panels
    tabPanels.forEach((panel) => (panel.hidden = true));
    //2.  mark all tabs as unselected
    //tabList.forEach((tab) => tab.setAttribute('aria-selected', false));
    tabButtons.forEach((tab) => (tab.ariaSelected = false));

    //3.  mark the clicked tab as selected
    e.currentTarget.setAttribute("aria-selected", true);

    //4.  find the associated tabPanel and show it!
    const { id } = e.currentTarget;
    tabPanels.forEach((panel) =>
        panel.getAttribute("aria-labelledby") === id
          ? (panel.hidden = false)
          : null
    );
    
    //METHOD 01
    // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    // tabPanel.hidden = false;

    //METHOS 02
    // const panelClicked = tabPanels.find( panel => panel.getAttribute("aria-labelledby") === id);
    // panelClicked.hidden = false;
    
}

tabButtons.forEach((button) => {
    button.addEventListener("click", handlerTabClicked);
});
