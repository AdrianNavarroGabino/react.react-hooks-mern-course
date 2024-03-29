import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';

export const LoginPage = () => {
    const { status, errorMessage } = useSelector(state => state.auth);

    useEffect(() => {
        console.log(errorMessage);
    }, [errorMessage]);

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
        email: 'adrian@google.com',
        password: '12345',
    });

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (event) => {
        event.preventDefault();

        dispatch(checkingAuthentication());
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    }

    const onSignIn = () => {
        dispatch(startLoginWithEmailPassword({ email, password }));
    }

    return (
        <AuthLayout title="Login">
            <form
                className="animate__animated animate__fadeIn animate__faster"
                onSubmit={ onSubmit }
            >
                <Grid container>
                    <Grid item xs={ 12 } sx={ { mt: 2 } }>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            value={ email }
                            onChange={ onInputChange }
                        />
                    </Grid>

                    <Grid item xs={ 12 } sx={ { mt: 2 } }>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            name="password"
                            value={ password }
                            onChange={ onInputChange }
                        />
                    </Grid>

                    { errorMessage && (
                        <Grid container spacing={ 2 } sx={ { mb: 2, mt: 1 } }>
                            <Grid item xs={ 12 }>
                                <Alert severity='error'>{ errorMessage }</Alert>
                            </Grid>
                        </Grid>
                    ) }

                    <Grid container spacing={ 2 } sx={ { mb: 2, mt: 1 } }>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button
                                disabled={ isAuthenticating }
                                onClick={ onSignIn }
                                type="submit"
                                variant="contained"
                                fullWidth>
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button
                                disabled={ isAuthenticating }
                                onClick={ onGoogleSignIn }
                                variant="contained"
                                fullWidth
                            >
                                <Google />
                                <Typography sx={ { ml: 1 } }>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link component={ RouterLink } color="inherit" to="/auth/register">
                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
