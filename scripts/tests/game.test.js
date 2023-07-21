/**
 * @jest-environment jsdom
 */

// const buttonClick = require("../button");

// beforeEach(() => {
//     let fs = require("fs");
//     let fileContents = fs.readFileSync("index.html", "utf-8");
//     document.open();
//     document.write(fileContents);
//     document.close()
// })

// describe("DOM tests", () => {
//     test("expects p content to change", () => {
//         buttonClick();
//         expect(document.getElementById("par").innerHTML).toEqual("You Clicked")
//     })
//     test("h1 should exist", () => {
//         expect(document.getElementsByTagName("h1").length).toEqual(1)
//     })
// })


beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close()
})

const { game } = require("../game")

describe("game object contains correct keys", () => {
        test("score key exists", () => {
            expect("score" in game).toBe(true)
        })
        test("currentGame key exists", () => {
            expect("currentGame" in game).toBe(true)
        })
        test("playerMoves key exists", () => {
            expect("playerMoves" in game).toBe(true)
        })
        test("choices key exists", () => {
            expect("choices" in game).toBe(true)
        })
    })