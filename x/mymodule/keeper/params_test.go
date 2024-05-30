package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "github.com/chunlinwang/cosmos-mychain/testutil/keeper"
	"github.com/chunlinwang/cosmos-mychain/x/mymodule/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := keepertest.MymoduleKeeper(t)
	params := types.DefaultParams()

	require.NoError(t, k.SetParams(ctx, params))
	require.EqualValues(t, params, k.GetParams(ctx))
}
