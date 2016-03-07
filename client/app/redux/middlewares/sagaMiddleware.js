import createSagaMiddleware from 'redux-saga'

import { mySaga } from '/client/app/modules/login/actions';

const sagaMiddleware = createSagaMiddleware(mySaga)

export default sagaMiddleware