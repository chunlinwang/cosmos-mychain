package cosmosmychain_test

import (
	"testing"

	keepertest "github.com/chunlinwang/cosmos-mychain/testutil/keeper"
	"github.com/chunlinwang/cosmos-mychain/testutil/nullify"
	cosmosmychain "github.com/chunlinwang/cosmos-mychain/x/cosmosmychain/module"
	"github.com/chunlinwang/cosmos-mychain/x/cosmosmychain/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.CosmosmychainKeeper(t)
	cosmosmychain.InitGenesis(ctx, k, genesisState)
	got := cosmosmychain.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
