import React from "react";

interface SmallProps{
    value: number
}

const Small = React.memo(({value}: SmallProps) => {
  return (
    <small>{ value }</small>
  )
}
)
export default Small
