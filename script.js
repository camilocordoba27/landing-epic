(function () {
      const grid = document.getElementById("promoGrid");
      const tags = Array.from(document.querySelectorAll(".tag[data-filter]"));
      const search = document.getElementById("search");

      function setPressed(activeTag) {
        tags.forEach(t => t.setAttribute("aria-pressed", String(t === activeTag)));
      }

      function applyFilter() {
        const active = tags.find(t => t.getAttribute("aria-pressed") === "true");
        const filter = active?.dataset.filter ?? "all";
        const q = (search?.value ?? "").trim().toLowerCase();

        Array.from(grid.querySelectorAll(".promo")).forEach(card => {
          const type = card.dataset.type || "all";
          const text = card.innerText.toLowerCase();
          const matchesType = filter === "all" ? true : type === filter;
          const matchesQuery = q ? text.includes(q) : true;
          card.style.display = (matchesType && matchesQuery) ? "" : "none";
        });
      }

      tags.forEach(tag => {
        tag.addEventListener("click", () => {
          setPressed(tag);
          applyFilter();
        });
      });

      search?.addEventListener("input", applyFilter);

      document.querySelectorAll("[data-cta]").forEach(btn => {
        btn.addEventListener("click", () => {
          const key = btn.getAttribute("data-cta");
          alert("CTA: " + key + " (conectalo a tu link real)");
        });
      });
    })();

    function registroEpic() {
    window.location.href = "https://my.sisu.partners/visit/?bta=35985&nci=5672";
  }

  function uniteEpic() {
    window.location.href = "https://my.sisu.partners/visit/?bta=35985&nci=5670"
  }

  function rakeBack(){
    window.location.href = "https://my.sisu.partners/visit/?bta=35985&nci=5669"
  }

  function cashBack() {
    window.location.href= "https://my.sisu.partners/visit/?bta=35985&nci=5668"
  }


 function pixelRef() {
  fbq('track', 'AddPaymentInfo', {
    value: 5000,
    currency: 'CLP'
  });

  setTimeout(function() {
    window.location.href = "https://my.sisu.partners/visit/?bta=35985&nci=5670";
  }, 300);
}