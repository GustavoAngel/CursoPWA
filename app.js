 // --- Funciones del Modal ---
        function showCustomModal(title, message, type = 'alert',callback = null) {
            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal-message').textContent = message;
            document.getElementById('custom-modal-overlay').classList.add('visible');
            if (type === 'confirm' && callback) {
                const confirmButton = document.querySelector('.modal-confirm-button');
                confirmButton.onclick = function() {
                    hideCustomModal();
                    callback(true);
                };
            } else if (type === 'alert' && callback) {
                const confirmButton = document.querySelector('.modal-confirm-button');
                confirmButton.onclick = function() {
                    hideCustomModal();
                    callback();
                };
            }
            
        }

        function hideCustomModal() {
            document.getElementById('custom-modal-overlay').classList.remove('visible');
        }