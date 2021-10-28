import React from 'react'
import PrePerson from './PrePerson'

//rfac
export default function PrePersonApp() {
  return (
    <div className='prePersonApp'>
      <h1>Less Advanced Version</h1>
      <PrePerson
        name='Juio'
        age={22}
        email='julio@gmail.com'
        isMarried={false}
        children={[]}
        />
      <PrePerson
        name="Charles"
        age={19}
        email="chrl@mac.com"
        isMarried={true}
        children={["Jennie", "Frank"]}

       />
       <PrePerson
       name="Janet"
       age={32}
       email="janet@me.com"
       isMarried={true}
       children={["Steve", "Laura", "Jill"]}

        />
      
    </div>
  )
}


