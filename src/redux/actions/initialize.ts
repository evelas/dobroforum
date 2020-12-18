export const TypesInitialize = {
  INITIALIZE_APP: '/reducers/initialize/INITIALIZE_APP',
  START_INITIALIZE: '/reducers/initialize/START_INITIALIZE',
};

export const initializeActions = {
  initializedSuccess: () => ({ type: TypesInitialize.INITIALIZE_APP } as const),
  startInitialize: () => ({ type: TypesInitialize.START_INITIALIZE } as const),
};
