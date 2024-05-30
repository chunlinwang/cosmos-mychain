package mymodule_test

import (
	"testing"

	keepertest "github.com/chunlinwang/cosmos-mychain/testutil/keeper"
	"github.com/chunlinwang/cosmos-mychain/testutil/nullify"
	mymodule "github.com/chunlinwang/cosmos-mychain/x/mymodule/module"
	"github.com/chunlinwang/cosmos-mychain/x/mymodule/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MymoduleKeeper(t)
	mymodule.InitGenesis(ctx, k, genesisState)
	got := mymodule.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
