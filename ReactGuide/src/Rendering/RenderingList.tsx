//making this because we have to access each of the element in the object items1, items2 etc.....

interface Item {
    id: number,
    name: string,
    total: number,
}
//using those elements by the above interface with the specifies parameters(id, name, total)
interface realProps {
    items: Item[],
    category: string
}

// Here getting the props and accessing the elements
function RenderingList({items=[],category="None"}: realProps) {
    //access to items in realprops which will get from interface and that will get from the object (i.e, the type and title)
    // const itemsNew = items 
    // //access to category
    // const categoryNew = category
    //with the object we got we are comparing the values inside 
    // itemsNew.sort((a, b) => b.name.localeCompare(a.name))
    items.sort((a, b) => b.total - a.total)
    // const itemsNewTotal = itemsNew.filter(item => item.total > 70)
    //here we are accessing the each element's id, total and name with Item, realProps interface an
    const listItems = items.map(item => <li key={item.id}>{item.total} {item.name} are there</li>)
    return (
        //listing the elements 
        <div className="all">
        <h3 className="title">{category}</h3>
        <ol className="items-desc">{listItems}</ol>
        </div>
    )
}

export default RenderingList