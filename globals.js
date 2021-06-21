export const notFoundImageUrl = "https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png"

//Chunks array into arrays of n elements
export function chunk(array, n) {
    if(n == 0)
        return array;
    let result = []
    let last = 0;
    for (let i = 0; i < array.length - n; i += n) {
        result.push(array.slice(i, i + n))
        last = i + n;
    }
    let a = []
    for (let i = last; i < array.length; i++) {
        a.push(i)
    }
    result.push(a)
    return result
    //append last elements

}
