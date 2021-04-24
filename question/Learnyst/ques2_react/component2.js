Import 'React,{useState}' from 'react'
const quesComponent = ({quesData,changeQues,setAns ,isPrev,isNext,submitForm  }) => {
	sendAns = (res, next) => {
	const ans = {quid: quesData.quid, Response: res}
		setAns(ans, next)
	}
	return (
	<div>
		<div className=”button-group”>
			{isPrev &&
		<button onClick={() => changeQues(prev)}>Prev</button}
		{isNext ?	
<button onClick={() => changeQues(next)}>Next</button
: <button onClick={submitForm}}<Submit</button>
		</div>
			<p>{quesData.question}</p>
			<div className=”button-group”>
<button
onClick={() => sendAns (quesData.OPTION1.text, quesData.OPTION1.nextQid)}>{quesData.OPTION1.text}</button>
		<button 
onClick={() => sendAns (quesData.OPTION2.text, quesData.OPTION2.nextQid)}>{quesData.OPTION2.text}</button>
			</div>
	</div>
)
}
export default quesComponent 