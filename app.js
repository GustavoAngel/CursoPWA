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
                const confirmButton = document.querySelector('.modal-cancel-button');
                confirmButton.onclick = function() {
                    hideCustomModal();
                    callback();
                };
            }
            else if (type === 'alert') {
                const cancelbutton = document.querySelector('.modal-confirm-button');
                cancelbutton.display = 'none';
            }

        }

        function hideCustomModal() {
            document.getElementById('custom-modal-overlay').classList.remove('visible');
        }

        function hideEditRoutineModal() {
    document.getElementById("edit-routine-modal-overlay").classList.remove("visible");
}

function showEditRoutineModal(diaKey, routineData) {

    // Debug
    console.log("Día seleccionado:", diaKey);
    console.log("Data de rutina:", routineData.dias.find(d => d.dia === diaKey));

    const routineForDay = routineData.dias.find(d => d.dia === diaKey);
    // Título dinámico
    document.getElementById("edit-routine-modal-title").textContent =
        "Editar rutina del día: " + diaKey;


    // Contenido dinámico de ejercicios
    const exercisesContainer = document.getElementById("edit-routine-exercises-container");
    exercisesContainer.innerHTML = ""; // Limpiar contenido previo
    if (routineForDay && routineForDay.ejercicios.length > 0) {
        routineForDay.ejercicios.forEach(ejercicio => {
            const exerciseDiv = document.createElement("div");
            exerciseDiv.className = "exercise-card"; 
            exerciseDiv.innerHTML = `
                <h4>${ejercicio.nombre}</h4>
                <p>Series: ${ejercicio.series}</p>
            `;
            exercisesContainer.appendChild(exerciseDiv);
        });
    } else {
        exercisesContainer.innerHTML = "<p>No hay ejercicios para este día.</p>";
    }   

    // Mostrar overlay
    document.getElementById("edit-routine-modal-overlay").classList.add("visible");
}

function confirmEditRoutine() {
    // Aquí va lo que sucede al guardar la rutina
    console.log("Rutina editada");
    hideEditRoutineModal();
}


        