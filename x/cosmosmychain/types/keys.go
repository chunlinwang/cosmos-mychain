package types

const (
	// ModuleName defines the module name
	ModuleName = "cosmosmychain"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_cosmosmychain"
)

var (
	ParamsKey = []byte("p_cosmosmychain")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
