import 'React,{useState, useEffect}' from 'react';
const searchBar = () => {
	const [productList, setProductList] = useState([])
    const [searchResult, setSearchResult] = useState([])
	const [error, setError] = useState('')
    const [keyword, setKeyword] = useState('')
    const [checkBoxValue, setCheckBoxValue] = useState(false)
	useEffect(() => {
		fetch('https://api.learnyst.com/products',{method: 'GET'})
            .then((res) => res.json())
            .then((res) => {
                if(typeof res.data === 'Array'){
                    const result = res.data
                    var new_result = {}
                    for (var i=0; i<result.length;i++){
                        if(new_result[result[i].category]){
                            new_result [result[i].category].push(result[i])
                        }else{
                            new_result [result[i].category] = [result[i]]
                        }
                    }
                    setProductList(new_result)
                }else{
                    setError('Something went wrong')
                }
            })
            .catch((err) => setError(err))
        },[])

    const searchHandler = (e) => {
        const curr_keyword= e.target.value
        setKeyword(curr_keyword);
        //logic to show the search results
        if(checkBoxValue){
            let result = productList.filter((product) => product.name.includes(curr_keyword)) && product.stocked
        }else{
            let result = productList.filter((product) => product.name.includes(curr_keyword))
        }
        if(result.length === 0){
            return
        }
        var new_result = {}
        for (var i=0; i<result.length;i++){
            if(new_result[result[i].category]){
                new_result [result[i].category].push(result[i])
            }else{
                new_result [result[i].category] = [result[i]]
            }
        }
        setSearchResult(new_result)
    }
    const showList= (searchResult) => {
        searchResult.map((res) => {
            return (
                <>
                    <span>{res.Category}</span>
                    return (res.List.map((product) => {
                        return (<>
                                    <span 
                                        style={{
                                        color: `{product.stocked ? 'black' : 'red'}`
                                        }}>
                                        {product.name}
                                    </span>
                                    <span>{product.price}</span>
                                </>)
                    }))
                </>
            )
        })
    }
return(
	<div>
		<div className='searchBar'>
	<input type='search' placeholder = 'Search…'
onChange={searchHandler} value={keyword}
/>
<input type='checkbox' 
onChange={() =>setCheckBoxValue(!checkBoxValue) } 
/>
<label>Only show products in stock</label>
</div>
{!error ?
<div className='searchResult'>
{keyword ? 
{searchResult.length ? {showList(searchResult)}
:<p>no item found</p>}
			: {showList(productList)}}
</div>	
: <p>{error}</p>
}
	</div>
)
}
Export default searchBar 
