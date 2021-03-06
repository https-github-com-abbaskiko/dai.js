// might not be run through babel in the future, so we must use an ES5-safe export
module.exports = {
  SAI_PIP: require('./abis/DSValue'),
  SAI_PEP: require('./abis/DSValue'),
  SAI_PIT: require('./abis/GemPit'),
  SAI_SIN: require('./abis/ERC20'),
  SAI_MOM: require('./abis/SaiMom'),
  SAI_VOX: require('./abis/SaiVox'),
  SAI_TUB: require('./abis/SaiTub'),
  SAI_TAP: require('./abis/SaiTap'),
  SAI_TOP: require('./abis/SaiTop'),
  SAI_SKR: require('./abis/ERC20'),
  SAI_GEM: require('./abis/WETH9'),
  SAI_GOV: require('./abis/ERC20'),
  SAI: require('./abis/ERC20'),
  SAI_PROXY: require('./abis/SaiProxyCreateAndExecute'),
  PROXY_REGISTRY: require('./abis/ProxyRegistry'),
  DS_PROXY_FACTORY: require('./abis/DSProxyFactory'),
  DS_PROXY: require('./abis/DSProxy'),
  MULTICALL: require('./abis/Multicall'),
  SAI_TUB_CONSTANT: require('./abis/SaiTubConstant')
};
