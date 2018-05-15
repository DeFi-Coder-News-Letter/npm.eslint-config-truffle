module.exports = {
  extends: [
    '@codex-protocol/eslint-config-base',
  ],
  env: {
    mocha: true
  },
  globals: {
    artifacts: true,
    contract: true,
    assert: true,
    web3: true
  }
}
