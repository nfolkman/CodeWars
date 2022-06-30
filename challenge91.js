/* Description: Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

Note: Keep the original order of the names in output */

function friend(friends){
    let frens=[]
    for(let i = 0; i<friends.length; i++){
        if(friends[i].length === 4){
        frens.push(friends[i])
        }
    }
return frens
}

//or

function friend(friends){
    return friends.filter((el) => el.length === 4)
}
    

    /* test cases:
    friend(["Ryan", "Kieran", "Mark"])
    friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])   */
