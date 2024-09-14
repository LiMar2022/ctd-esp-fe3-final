export const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_DENTISTS':
      return {...state, dentists: action.payload}
    case 'CHANGE_THEME':
      return {...state, theme: !state.theme }
    case 'ADD_FAVORITES':
      return {...state, favs: [...state.favs, action.payload]}
    case 'REMOVE_FAVORITES':
      return {...state, favs: state.favs.filter(fav => fav.id !== action.payload.id)}
    default:
      throw new Error('Acción no existe')
  }
}