package regions

import "testing"

func TestList(t *testing.T) {
	result, err := List()
	if err != nil {
		t.Error(err)
	}
	if len(result) < 23 {
		t.Errorf("Should have at least 23 regions, got %v", len(result))
	}
	if result[0].Name != "N. Virginia" {
		t.Error("Couldn't find name on first region")
	}
}

func TestListPublic(t *testing.T) {
	result, err := ListPublic()
	if err != nil {
		t.Error(err)
	}
	if len(result) < 18 {
		t.Errorf("Should have at least 18 regions, got %v", len(result))
	}
	if result[0].Name != "N. Virginia" {
		t.Error("Couldn't find name on first region")
	}
}

func TestLookupByCode(t *testing.T) {
	result, err := LookupByCode("us-east-2")
	if err != nil {
		t.Error(err)
	}
	if result.Name != "Ohio" {
		t.Errorf("Expected Ohio region, got %v", result.Name)
	}
}

func TestLookupByName(t *testing.T) {
	result, err := LookupByName("ohio")
	if err != nil {
		t.Error(err)
	}
	if result.Code != "us-east-2" {
		t.Errorf("Expected Ohio region, got %v", result.Name)
	}
}
