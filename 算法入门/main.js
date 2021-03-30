/**如何找到两个数字中较小的一个 */
let minOf2 = numbers => numbers[0]>numbers[1]?numbers[1]:numbers[0]
minOf2.call(null,[1,2])
/**如何找到三个数字中较小的一个 */
let minOf3 = ([a,b,c]) => {return minOf2(minOf2([a,b]),c)} 
/**如何找到任意数字中较小的一个 */
let min = (numbers) => {
    if(numbers.length > 2){
        return min([numbers[0],min(numbers.slice(1))])
    }else{
        return Math.min.apply(null,numbers)
    }
}
/**长度为二的数组排序 */
let sort2 = ([a,b]) => {
    a>b?[b,a]:[a,b]
}
/**长度为三的数组排序 */
let sort3 = numbers => {
    let index = minIndex(numbers)
    numbers.splice(index,1)
    let min = numbers[index]
    return [min].concat(sort2(numbers))
}
/**长度为四的数组排序 */
let sort4 = numbers => {
    let index = minIndex(numbers)
    numbers.splice(index,1)
    let min = numbers[index]
    return [min].concat(sort3(numbers))
}
/**任意长度的数组排序 */
let minIndex = (numbers) =>
    numbers.indexOf(min(numbers))

      let sort = (numbers) => {
        if(numbers.length > 2){
            let index = minIndex(numbers)
            let min = numbers[index]
            numbers.splice(index, 1)
            return [min].concat(sort(numbers))
        }else{
            return numbers[0]<numbers[1] ? numbers : numbers.reverse()
        }
    }
/**minIndex重写 */
let minIndex = (numbers) => {
    let index = 0
    for(let i = 1;i < numbers.length;i++){
        if(numbers[i]<numbers[index]){
            index = i 
        }
    }
    return index
}
/**选择排序的循环写法 */
let swap = (arr,a,b) => {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}
let sort = (numbers) => {
    for(let i = 0;i < numbers.length -1;i++){
        let index = minIndex(numbers.slice(i)) + i
        if(index !== i){
            swap(numbers,index,i)
        }
    }
    return numbers
}
/**快速排序迭代写法 */
let quickSort = (numbers) => {
    if(numbers.length <= 1){
        return numbers
    }else{
        let pivotIndex = Math.floor(numbers.length / 2)
        let pivot = numbers.splice(pivotIndex,1)[0]
        let left =[]
        let right =[]
        for(let i = 0;i < numbers.length;i++){
            if(numbers[i] < pivot){
                left.push(numbers[i])
            }else{
                right.push(numbers[i])
            }
        }
        return quickSort(left).concat([pivot],quickSort(right))
    }
}
/**归并排序迭代写法 */
let mergeSort = (numbers) => {
    if(numbers.length === 1){return numbers}
    let left = numbers.slice(0,Math.floor(numbers.length/2))
    let right = numbers.slice(Math.floor(numbers.length/2))
    return merge(mergeSort(left),mergeSort(right))
}
let merge = (a,b) => {
    if(a.length === 0){return b}
    if(b.length === 0){return a}
    return a[0] > b[0] ? [b[0]].concat(merge(a,b.slice(1))) 
    : [a[0]].concat(merge(a.slice(1),b))
}

/**计数排序迭代写法 */
let countSort = numbers => {
    let hashTable = []
    let Max = 0
    let result = []
    for(let i = 0;i < numbers.length;i++){
        if(!(numbers[i] in hashTable)){
            hashTable[numbers[i]] = 1
        }else{
            hashTable[numbers[i]] += 1
        }
        if(numbers[i] > Max){Max = numbers[i]} 
    }
    for(let j = 0;j <= Max;j++){
        if(j in hashTable){
            for(i = 0;i < hashTable[j];i++){
                result.push(j)
            }
        }
    }
    return result
}