import firebase from '.';

const auth = firebase.auth();

export const createUser = (email, password) => auth.createUserWithEmailAndPassword(email, password);

export const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password);

export const signOut = () => auth.signOut();

export const resetPassword = email => auth.sendPasswordResetEmail(email);

export const updatePassword = password => auth.currentUser.updatePassword(password);
