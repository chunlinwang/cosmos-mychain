# cosmosmychain
**cosmosmychain** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).

## init
```shell
# Mac install ignite https://docs.ignite.com/
brew install ignite

# new chain
ignite scaffold scaffold chain github.com/chunlinwang/cosmos-mychain
# new module
ignite scaffold module mymodule

#build chain
ignite chain build

# set minimum-gas-prices
cosmos-mychaind config set app minimum-gas-prices 0.025stake

# init chain\'s node
cosmos-mychaind init mynode --chain-id cosmos-mychain

cosmos-mychaind keys add mykey
cosmos-mychaind genesis add-genesis-account mykey 100000000stake
cosmos-mychaind genesis gentx mykey 1000000stake --chain-id cosmos-mychain
cosmos-mychaind genesis collect-gentxs

cosmos-mychaind start
```

## Get started

```
ignite chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Ignite CLI docs](https://docs.ignite.com).

### Web Frontend

Additionally, Ignite CLI offers both Vue and React options for frontend scaffolding:

For a Vue frontend, use: `ignite scaffold vue`
For a React frontend, use: `ignite scaffold react`
These commands can be run within your scaffolded blockchain project. 
```shell
# generate  react hooks
ignite generate hooks

# generate ts-client
ignite generate ts-client 
```


For more information see the [monorepo for Ignite front-end development](https://github.com/ignite/web).

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.ignite.com/chunlinwang/cosmos-mychain@latest! | sudo bash
```
`chunlinwang/cosmos-mychain` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

## Learn more

- [Ignite CLI](https://ignite.com/cli)
- [Tutorials](https://docs.ignite.com/guide)
- [Ignite CLI docs](https://docs.ignite.com)
- [Cosmos SDK docs](https://docs.cosmos.network)
- [Developer Chat](https://discord.gg/ignite)
