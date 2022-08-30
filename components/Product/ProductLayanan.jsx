import React, { useState } from 'react'

const ProductLayanan = () => {
    const [appState, changeState] = useState({
        activeObject: null,
        objects: [{id: 1}, {id: 2},{id: 3},{id: 4}, {id: 5},{id: 6}]
    })

    function toggleActive(index) {
        changeState({ ...appState, activeObject: appState.objects[index]})
    }

    function toggleActiveStyle(index) {
        if(appState.objects[index] === appState.activeObject) {
            return "box active"
        }else {
            return "box inactive"
        }
    }

  return (
    <div>
        {appState.objects.map((element, index) => (
            <div key={index} className={`${toggleActiveStyle(index)}`}
            onClick={() => {
                toggleActive(index)
            }}
            >
            </div>
        ))}
    </div>
  )
}

export default ProductLayanan