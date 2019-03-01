package regions

type Regions []Region
type Region struct {
	Name      string   `json:"name"`
	FullName  string   `json:"full_name"`
	Code      string   `json:"code"`
	Public    bool     `json:"public"`
	ZoneLimit int      `json:"zone_limit"`
	Zones     []string `json:"zones"`
}
