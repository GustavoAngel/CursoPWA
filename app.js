 // --- Funciones del Modal ---
        function showCustomModal(title, message) {
            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal-message').textContent = message;
            document.getElementById('custom-modal-overlay').classList.add('visible');
        }

        function hideCustomModal() {
            document.getElementById('custom-modal-overlay').classList.remove('visible');
        }