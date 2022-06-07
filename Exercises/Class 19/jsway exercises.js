let musketeers = ['Athos', 'Porthos', 'Aramis']
for(i = 0; i < musketeers.length; i++){
    console.log(musketeers[i])
    musketeers.push('D\'Artagnan')
}
musketeers.forEach(musketeers => {
    console.log(musketeers)
    musketeers.pop()
})

for (musketeer of musketeers) {
    console.log(musketeers)
}