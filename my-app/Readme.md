# Exercice

## Ex 1

Dans la TopBar utiliser un composant UserCountContainer
qui va afficher le nombre de Users dans le state

Ajouter un selecteur selectUserCount dans users/selectors

## Ex 2

Dans TodoListContainer ajouter un mapDispatchToProps (sur le modèle de TodoForm), de telle sorte à passer au composant TodoList une propriété
onDeleteItem qui fera un dispatch d'une action TODO_DELETE

L'action TODO_DELETE :
{
  type: 'TODO_DELETE',
  payload: {
    id: 123,
    text: 'Acheter du pain',
    completed: false,
  }
}

Dans todos/reducers, ajouter un case à itemsReducer sur TODO_DELETE qui
retourne un nouveau tableau sans l'item supprimé (utiliser la fonction filter
de Array)

Ajouter la constante TODO_DELETE et l'action creation (actions.js) todoDelete

## Ex 3

Reprendre le composant FormUser dans le projet exercice-react et le copier dans users/componants

Créer ou modifier un reducer dans users/reducers (initialiser le state avec une clé newContact: {prenom: '', nom: ''})

Créer une constante USERS_NEW_CONTACT_CHANGE
Un action creatore userNewContactChange :
{
  type: USERS_NEW_CONTACT_CHANGE
  payload: { prenom: 'Rom', nom: ''}
}

Créer un reducer qui sur le type USERS_NEW_CONTACT_CHANGE stocke le payload dans newContact.

Créer le container FormUserContainer qui map contact -> state.users.newContact
et la fonction onContactChange qui fera le dispatch de userNewContactChange

Optionnel : reproduire les étapes pour ajouter au tableau au moment du submit
