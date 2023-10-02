import { createContext, useState, useEffect, useContext } from 'react';

import { api } from '../services/api';

const LOCAL_USER_KEY = '@rocketmovies:user';
const LOCAL_TOKEN_KEY = '@rocketmovies:token';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function login({ email, password }) {
    try {
      const response = await api.post('/session', { email, password });
      const { user, token } = response.data;

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token });

      localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(user));
      localStorage.setItem(LOCAL_TOKEN_KEY, token);
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert(
          'Erro ao tentar realizar login. Tente novamente mais tarde.'
        );
      }
    }
  }

  function logout() {
    localStorage.removeItem(LOCAL_TOKEN_KEY);
    localStorage.removeItem(LOCAL_USER_KEY);
    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append('avatar', fileUploadForm);

        const response = await api.patch('/users/avatar', fileUploadForm);
        user.avatar = response.data.avatar;
      }

      const response = await api.put('/users', user);
      localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(response.data.user));
      setData({
        user: response.data.user,
        token: (prevState) => prevState.token,
      });
      return alert('Dados do usuário atualizados com sucesso.');
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert(
          'Erro ao tentar atualizar o perfil do usuário. Tente novamente mais tarde.'
        );
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem(LOCAL_USER_KEY);
    const token = localStorage.getItem(LOCAL_TOKEN_KEY);

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({
        user: JSON.parse(user),
        token,
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ updateProfile, login, logout, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
