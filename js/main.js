let like = "Uwielbiam JavaScript";
let aj = "Jestem świetnym programistą";
function name(paraone, paratwo) {
    if (paraone.length > paratwo.length) {
        return paraone;
    } else {
        return paratwo;
    }
}
console.log(name(like, aj));