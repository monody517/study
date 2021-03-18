const creatNode = value => {
    return {
        data: value,
        next:null
    }
}
const creatList = value => {
    return creatNode(value)
}

const appendList = (list,value) => {
    const node = creatNode(value)
    let x = list
    while(x.next){
        x = x.next //当传入的list节点个数不为1时，向下查找直到最后一个
    }
    //当传入的list节点个数为1时，让该节点链接新创建的节点
    x.next = node
    return node
}

const removeFromList = (list, node) => {
    let x = list
    let p = node
    while(x !== node && x !== null){ //查找x中的node节点，返回x=node；p=node的前一个，如果node不在x中，返回x=null
        p = x
        x = x.next
    }
    if(x === null){ //node不在list中，返回false
        return false
    }else if(x === p){ //node是list的头节点，list除了头节点其他全删除
        return p = x.next
    }else{
        p.next = x.next //node是普通节点，返回list即可
        return list
    }
  };

const travelList = (list, fn) => {
    let x = list;
    while (x !== null) {
      fn(x);
      x = x.next;
    }
  };

const list = creatList(10);
// const node2 = appendList(list, 20);
// const node3 = appendList(list, 30);
// const node4 = appendList(list, 40);

console.log(list)

travelList(list, node => {
    console.log(node.data);
  });

