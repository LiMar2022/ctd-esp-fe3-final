export const saveDentistToFavorites = (dentist) => {
    // Obtener los datos actuales de favoritos
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    // Agregar o actualizar el dentista en los favoritos
    favorites[dentist.id] = dentist;
    // Guardar los datos actualizados en localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
  