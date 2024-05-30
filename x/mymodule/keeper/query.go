package keeper

import (
	"github.com/chunlinwang/cosmos-mychain/x/mymodule/types"
)

var _ types.QueryServer = Keeper{}
