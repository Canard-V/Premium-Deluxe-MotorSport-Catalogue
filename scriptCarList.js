
    const vehicles = typeof VEHICLES_DATA !== "undefined" ? VEHICLES_DATA : [];

    function renderVehicles(category = "all") {
        const grid = document.getElementById("vehiclesGrid");
        const list = category == "all"
            ? vehicles
            : vehicles.filter(v => v.type === category);

        if (!list.length) {
            grid.innerHTML = '<div class="no-vehicles">Aucun véhicule dans cette catégorie pour le moment.</div>';
            return;
        }

        grid.innerHTML = "";
        list.forEach((v, i) => {
            const card = document.createElement("div");
            card.className = "vehicle-card";
            card.style.animationDelay = (i * 0.02) + "s";
            card.innerHTML = `
                <div class="vehicle-image">${v.type}</div>
                <div class="vehicle-info">
                    <div class="vehicle-name">${v.marque} ${v.modele}</div>
                    <div class="stats">
                        <div>
                            <div class="stat-label">Type</div>
                            <div class="stat-value">${v.type}</div>
                        </div>
                        <div>
                            <div class="stat-label">Marque</div>
                            <div class="stat-value">${v.marque}</div>
                        </div>
                        <div>
                            <div class="stat-label">Modèle</div>
                            <div class="stat-value">${v.modele}</div>
                        </div>
                        <div>
                            <div class="stat-label">Prix</div>
                            <div class="stat-value">${v.prix}</div>
                        </div>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    document.querySelectorAll(".category-btn[data-category]").forEach(btn => {
        btn.addEventListener("click", () => {
            const active = document.querySelector(".category-btn.active[data-category]");
            if (active) active.classList.remove("active");
            btn.classList.add("active");
            renderVehicles(btn.dataset.category);
        });
    });

    renderVehicles();
