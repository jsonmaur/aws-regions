package regions

import (
	"encoding/json"
	"errors"
	"strings"
)

func lookup(filter func(Region) bool) (Region, error) {
	regions, err := List()
	if err != nil {
		return Region{}, err
	}

	for _, v := range regions {
		if filter(v) {
			return v, nil
		}
	}

	return Region{}, errors.New("Could not find region")
}

func List() (Regions, error) {
	data := []byte(REGION_DATA)

	var regions Regions
	json.Unmarshal(data, &regions)

	return regions, nil
}

func ListPublic() (Regions, error) {
	regions, err := List()
	if err != nil {
		return nil, err
	}

	filtered := make([]Region, 0)
	for _, v := range regions {
		if v.Public {
			filtered = append(filtered, v)
		}
	}

	return filtered, nil
}

func LookupByCode(code string) (Region, error) {
	return lookup(func(region Region) bool {
		return strings.ToLower(region.Code) == strings.ToLower(code)
	})
}

func LookupByName(name string) (Region, error) {
	return lookup(func(region Region) bool {
		return strings.ToLower(region.Name) == strings.ToLower(name)
	})
}
