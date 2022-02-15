import {BACKEND_URL, PROD_BACKEND_URL} from '@env';
const devUrl={BACKEND_URL,};
const prodUrl={PROD_BACKEND_URL,};
export default __DEV__ ? devUrl:prodUrl