import React from 'react';

const SectionHobbys = () => {

  const  hobbys = [
          { id: 1, name: "Nadar" },
          { id: 2, name: "Escuchar música" },
          { id: 3, name: "Ir al cine" },
          { id: 3, name: "Viajar" }
        ]

        return (
             <ul>
              {hobbys.map(hobby =>
                 <li key={hobby.id}>{hobby.name}</li>
              )}
            </ul>
          );
     }
    

export default SectionHobbys
