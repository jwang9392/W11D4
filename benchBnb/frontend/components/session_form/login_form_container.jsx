import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'login',
    link: <Link to="/signup">Sign Up</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (formUser) => dispatch(login(formUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
