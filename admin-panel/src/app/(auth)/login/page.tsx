'use client';

import { signIn } from 'next-auth/react';
import { Button, TextField, Paper } from '@mui/material';

export default function LoginPage() {
  return (
    <Paper style={{ padding: '2rem', maxWidth: 400, margin: 'auto', marginTop: '4rem' }}>
      <form onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        signIn('credentials', {
          redirect: true,
          email: data.get('email'),
          password: data.get('password'),
          callbackUrl: '/dashboard',
        });
      }}>
        <TextField label="E-Mail" name="email" fullWidth margin="normal" />
        <TextField label="Passwort" name="password" type="password" fullWidth margin="normal" />
        <Button type="submit" fullWidth variant="contained" color="primary">Login</Button>
      </form>
    </Paper>
  );
}
