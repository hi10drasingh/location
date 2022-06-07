import { BindInput } from "../src/input"
import { LocationAttrSlug } from "../src/constant"

test("use jsdom in this test file", () => {
	// Set up our document body
	document.body.innerHTML = `<div> <input id="testInput" /></div>`

	const input = document.getElementById("testInput")

	BindInput("#testInput", false)

	expect(input).toHaveAttribute(LocationAttrSlug, LocationAttrSlug)
})
