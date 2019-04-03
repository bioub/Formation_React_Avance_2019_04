import React from 'react';
import { Field } from 'redux-form';
import { CSSTransition } from 'react-transition-group';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from '@material-ui/core';

import './FormUser.css';

function FormUserRow({ input, label, meta }) {
  return (
    <div>
      <FormControl error={meta.touched && meta.invalid}>
        <InputLabel>{label}</InputLabel>
        <Input {...input} />
        {meta.touched && meta.invalid && (
          <FormHelperText>{meta.error}</FormHelperText>
        )}
      </FormControl>
    </div>
  );
}

export function FormUser({ valid }) {
  return (
    <form className="FormUser">
      <Field name="prenom" label="Prénom" component={FormUserRow} />
      <Field name="nom" label="Nom" component={FormUserRow} />
      <div>
        <CSSTransition in={valid} classNames="btn-submit" timeout={5000}>
          <Button color="primary">Ajouter</Button>
        </CSSTransition>
      </div>
    </form>
  );
}
