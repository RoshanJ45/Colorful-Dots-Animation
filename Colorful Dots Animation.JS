        const container = document.getElementById('spiralContainer');
        const totalCells = 100;
        const colors = ["#ff6b6b", "#f39c12", "#3498db", "#8e44ad"];
        
        function createSpiral() {
            for (let i = 0; i < totalCells; i++) {
                const cell = document.createElement('div');
                cell.classList.add('spiral-cell');
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                cell.style.background = randomColor;
                cell.style.animationDelay = `${i * 0.05}s`;
                container.appendChild(cell);
            }
        }
        createSpiral();
    