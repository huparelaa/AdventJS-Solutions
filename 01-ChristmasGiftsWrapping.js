function wrapping(gifts) {
  if(gifts[0]){
    
    const giftsWrapped = gifts.map((gift)=>{
      const asterisksNumber = '*'.repeat(gift.length+2)
      return asterisksNumber+"\n*"+gift+"*\n"+asterisksNumber
    })
    return giftsWrapped
  }
  return []
}

console.log(wrapping(['toy', 'phone']))