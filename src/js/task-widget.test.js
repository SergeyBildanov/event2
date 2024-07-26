import CatchGoblin from "./catch-goblin"

test("adding goblin to wrong hole ", ()=>{
    let game = new CatchGoblin();
    expect(()=>{
        game.addGoblin(-1);
    }).toThrow(new Error("Invalid hole number!"))
})
test("adding goblin to wrong hole again", ()=>{
    let game = new CatchGoblin();
    expect(()=>{
        game.addGoblin(18);
    }).toThrow(new Error("Invalid hole number!"))
})