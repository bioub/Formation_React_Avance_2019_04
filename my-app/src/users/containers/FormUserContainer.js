import { reduxForm } from 'redux-form';

import { FormUser } from '../components/FormUser/FormUser';

function validate(values) {
  const errors = {};

  if (!values.prenom) {
    errors.prenom = 'Le prénom est obligatoire';
  }

  if (!values.nom) {
    errors.nom = 'Le nom est obligatoire';
  }

  return errors;
}

export const FormUserContainer = reduxForm({
  form: 'userForm',
  validate,
})(FormUser);
