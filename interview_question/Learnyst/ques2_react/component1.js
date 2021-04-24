
import ‘React,{useState, useEffect}’ from ‘react’
Import QuesComponent from ‘./QuesComponent ‘
const FeedbackCollector = () => {
	Const [quesList, setQuesList) = useState([])
	Const [ansList, setAnsList) = useState({})
	Const [currQues, setCurrQues] = useState(‘’)
	Const [next, setNext] = useState(‘’)
	Const [curr_index, setCurrIndex] = useState(0)
	
useEffect(() => {
	fetch(https://api.learnyst.com/getQuestions, {method: ‘GET’})
	.then((res)=>res.json())
	.then((res) => {
			setQuesList(res.data)
setCurrQues(res.data[0].qId)
})
.catch((err) => setError(err))
},[])

Const setAnsHandler = (data,new_next) => {
Const isExist = ifQuesExist (data.qid)
if(isExist === -1){
	setAnsList([...ansList, data])
}else{
	Const newAns = ansList.slice(0, isExist)
	setAnsList([...newAns , data])
}
setCurrQues(new_next)
}
Const ifQuesExist = (qid) => {
	ansList.forEach((ans,idx) => {
	if(ans.qid === qid){
		return idx
}
})
return -1
}
Const changeQues = (type) => {
	if(type === ‘next’){
	setCurrQues(ansList[curr_index+1].qid)
	setCurrIndex(curr_index+1)
}else{
	setCurrQues(ansList[curr_index-1].qid)
setCurrIndex(curr_index-1)
}
}
Const submitFormHandler= () => {
	fetch(https://api.learnyst.com/feedbackData, {method: ‘post’, body: ansList})
}

	return (
		{currQues ?}
<QuesComponent 
quesData = {quesList[currQues]} 
changeQues={(type) => changeQuesHandler(type)}
setAns = {(data,new_next) => setAns(data,new_next)}
isPrev= {curr_index}
isNext = {curr_index !== ansList.length-1}
submitForm ={() => submitFormHandler()}
/>
: <div>Loading</div>
}
)
}
Export default FeedbackCollector 
