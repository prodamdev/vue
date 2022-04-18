import Vue from 'vue';
import Router from 'vue-router';
import routes from './router/path';
import store from './store';

Vue.use(Router);

function routing(path, page, name, title) {
  return {
    name: page || name,
    path,
    component: async () => import(`@/pages/${page}.vue`),
    meta: {
      title: title || name,
    }
  };
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes.map(r => {
    const route = routing(
      r.path,
      r.page,
      r.name,
      r.title,
    );
    return route;
  })
});


router.beforeEach(async (to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router;