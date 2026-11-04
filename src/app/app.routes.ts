import { Routes } from '@angular/router';
import { Board } from './pages/board/board';
import { CreateTeam } from './pages/create-team/create-team';
import { ForgotPassword } from './pages/forgot-password/forgot-password';
import { Login } from './pages/login/login';
import { NewTask } from './pages/new-task/new-task';
import { NotFound } from './pages/not-found/not-found';
import { Register } from './pages/register/register';
import { ResetPassword } from './pages/reset-password/reset-password';
import { Teams } from './pages/teams/teams';
import { VerifyTwoFactor } from './pages/verify-two-factor/verify-two-factor';

export const routes: Routes = [
  // Abrir o site sem caminho leva para a lista de equipes
  { path: '', redirectTo: 'teams', pathMatch: 'full' },

  // Autenticação
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'verify-2fa', component: VerifyTwoFactor },
  { path: 'forgot-password', component: ForgotPassword },
  // Precisa bater com o link do e-mail: FRONTEND_URL + "/reset-password?token=..."
  { path: 'reset-password', component: ResetPassword },

  // App
  { path: 'teams', component: Teams },
  { path: 'teams/new', component: CreateTeam },
  { path: 'teams/:teamId', component: Board },
  { path: 'teams/:teamId/tasks/new', component: NewTask },

  // Qualquer outro caminho: página 404 (precisa ser a última)
  { path: '**', component: NotFound },
];