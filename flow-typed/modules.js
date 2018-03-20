import immutableFlow from 'immutable/dist/immutable.js.flow'; // eslint-disable-line no-unused-vars
import recomposeFlow from 'recompose'; // eslint-disable-line no-unused-vars

declare module 'react-redux' {
  declare module.exports: any;
}
declare module 'redux-form/immutable' {
  declare module.exports: any;
}
declare module 'reselect' {
  declare module.exports: any;
}
declare module 'immutable' {
  declare module.exports: immutableFlow;
}
declare module 'react-router-redux' {
  declare module.exports: any;
}
declare module 'react-router' {
  declare module.exports: any;
}
declare module 'lodash' {
  declare module.exports: any;
}
declare module 'recompose' {
  declare module.exports: recomposeFlow;
}
declare module 'axios' {
  declare module.exports: recomposeFlow;
}
declare module 'jwt-decode' {
  declare module.exports: recomposeFlow;
}
