import { defineStore } from 'pinia';
import { login } from '@/service/api';
import { localCache } from '@/utils/cache';

const LoginStore = defineStore('LoginStore', {
  state: () => ({
    user: {},
    token: localCache.getCache('token') ?? ''
  }),
  actions: {
    async loginAccountAction(user: User) {
      const res = await login(user);
      this.user = res.data;
      this.token = res.data.token;
      //   console.log(this.user);
      localCache.setCache('user', this.user);
      localCache.setCache('token', this.token);
    }
  }
});

export default LoginStore;
