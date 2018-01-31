import wallet from '../../components/wallet.vue';
import issueToken from '../../components/issueToken.vue';
import formTest from '../../components/formTest.vue';

let routes = [
  { path: '/wallet', name: 'wallet', component: wallet },
  { path: '/issueToken', name: 'issue token', component: issueToken },
  { path: '/formTest', name: 'formTest', component: formTest }
]

export default routes;